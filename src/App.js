import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Routes from "./Routes";
import { Auth } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import styled from "styled-components";
import { UserContext } from "./Usercontext";

const AppContainer = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: null
    };
  }

  async componentDidMount() {
    try {
      let userObj = await Auth.currentSession();
      if (userObj) {
        let user = {};
        try {
          const idToken = userObj.idToken;
          user.userGroup = idToken.payload["cognito:groups"][0]; //NOTE: this could cause an error is a user is in multiple groups
          user.fullName = idToken.payload.name;
          user.email = idToken.payload.email;
        } catch (error) {}
        this.userHasAuthenticated(true, user);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = (authenticated, user) => {
    if (authenticated) {
      this.setState({ user: user });
      this.setState({ isAuthenticated: authenticated });
      console.log(user);
    }
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
    this.props.history.push("/login");
  };
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      user: this.state.user
    };
    return (
      <AppContainer>
        {/* styling for nav bar */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <Navbar bg="light" expand="md">
          {this.state.isAuthenticated ? (
            <Navbar.Brand>
              <LinkContainer to="/swdemo">
                <NavItem>Search Warrant Explorer v0.4</NavItem>
              </LinkContainer>
              <LinkContainer to="/companydemo">
                <NavItem>Company Explorer v0.4 </NavItem>
              </LinkContainer>
            </Navbar.Brand>
          ) : (
            <Navbar.Brand>
              <LinkContainer to="/">
                <NavItem>E-Crime Portal v0.4</NavItem>
              </LinkContainer>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {this.state.isAuthenticated ? (
                // isAuthenticated
                <Fragment>
                  {this.state.user.userGroup === "Moderator" ? (
                    <LinkContainer
                      style={{ paddingRight: 10 }}
                      to="/swmoderator"
                    >
                      <NavItem>Moderate</NavItem>
                    </LinkContainer>
                  ) : null}
                  <LinkContainer style={{ paddingRight: 10 }} to="/">
                    <NavItem>Help</NavItem>
                  </LinkContainer>
                  <NavItem
                    style={{ paddingRight: 10 }}
                    onClick={this.handleLogout}
                  >
                    Logout
                  </NavItem>
                </Fragment>
              ) : (
                // isNotAuthenticated
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <UserContext.Provider value={childProps.user}>
          <Routes childProps={childProps} />
        </UserContext.Provider>
      </AppContainer>
    );
  }
}

export default withRouter(App);
