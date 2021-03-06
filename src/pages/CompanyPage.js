import React, {
  useRef,
  useEffect,
  useState,
  createRef,
  useContext
} from "react";

import styled from "styled-components";

import BreadCrumbs from "../components/nav/breadcrumbs";
import Tip from "../components/tips/tip";
import GreyButton from "../components/greyButton";
import TipUploader from "../components/tipUploader/tipUploader";
import WarrantUploader from "../components/warrant_uploader/warrantUploader";
import TypeOfData from "../components/typesOfData/TypeOfData";
import Scraper from "../components/typesOfData/scraper";
import TableOfContents from "../components/nav/TableOfContents";
import TypeOfDataUploader from "../components/typesOfData/TypesOfDataUploader";
import { UserContext } from "../Usercontext";

import DataTypesContainer from "../containers/DataTypesContainer";
import SWContainer from "../containers/SWContainer";

import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";
import * as query from "../graphql/queries";
import TipsContainer from "../containers/TipsContainer";
import SearchWarrantContainer from "../containers/SWContainer";

import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "../components/notification.css";

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;
const MainContainer = styled.div`
  flex: 4;
`;
const TableOfContentsContainer = styled.div`
  /* background: yellow; */
  flex: 1;
`;
const TableOfContentsFixedContainer = styled.div`
  /* background: red; */
  position: fixed;
  padding-top: 30px;
`;
const TitleContainer = styled.div`
  margin-bottom: 10px;
  & h1 {
    font-size: 100px;
    margin: 0;
  }
`;
const SectionContainer = styled.div`
  & h2 {
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;
const ComponentContainer = styled.div`
  padding: 10px;
  margin-left: 25px;
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 8px dashed #e7ebef45;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const EmptyStateText = styled.h5`
  /* text-align: center; */
  padding-top: 20px;
  color: #c6cdd9;
`;

const Notification = styled.div`
  background: #59b7b1;
  color: white;
  font-size: 15px;
  padding: 12px 8px;
  width: 100%;
`;

const CompanyPage = props => {
  const [data, setData] = useState(null);
  const sectionElements = useRef([...Array(4)].map(() => createRef()));

  //NOTE: Temporary objects for the following compnents:
  const breadcrumbsObj = {
    dataType: {
      name: "Location",
      link: "reactjs.org",
      icon:
        "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/define-location-icon-18-256.png"
    },
    company: { name: "Uber", link: "google.com", relevancyScore: "90" },
    numLayers: 0
  };
  const highlightObj = {
    query: "location",
    privacyPolicy: "https://privacy.uber.com/policy/",
    timeStamp: 1564087266648,
    category: "location",
    excerptContent:
      "collection of rider location information at any time through the privacy settings in the uber app or via the settings on your mobile device if you disable the device location services on your device your use of the uber app will be affected for example you will need to anually enter your pickup or dropoff locations in addition to location",
    company: "Uber"
  };

  useEffect(() => {
    const fetchCompany = async () => {
      const result = await API.graphql(
        graphqlOperation(query.getSubject, {
          id: window.location.pathname.split("/")[2] // get's the subjectId from the url
        })
      );

      console.log("retrieved subject");
      console.log(result.data.getSubject);
      setData(result.data.getSubject);
    };

    fetchCompany();
  }, [props.companyId]);

  //Triggers notification to showup on screen
  const showNotifications = () => {
    store.addNotification({
      type: "info",
      content: <Notification>Uploaded successfully!</Notification>,
      width: 300,
      insert: "top",
      container: "top-center",
      animationIn: ["notificationAnim", "fadeIn"],
      animationOut: ["notificationAnim", "fadeOut"],
      dismiss: {
        duration: 3000
      }
    });
  };

  //Wrap components with the section component wraper to apply the styles
  const Section = props => {
    return (
      <SectionContainer>
        <h2>{props.title}</h2>
        <ComponentContainer>{props.children}</ComponentContainer>
      </SectionContainer>
    );
  };

  const RenderContent = props => {
    return !props.isEmpty ? (
      <div>
        <div>{props.container}</div>
        <GreyButton
          buttonText={props.buttonText}
          style={{ float: "right" }}
          destination={props.uploader}
          subjectId={props.id}
          showNotifications={showNotifications}
        />
      </div>
    ) : (
      <EmptyStateContainer>
        <EmptyStateText> Be the first to...</EmptyStateText>
        <GreyButton
          buttonText={props.buttonText}
          style={{ paddingBottom: 20 }}
          destination={props.uploader}
          subjectId={props.id}
          showNotifications={showNotifications}
        />
      </EmptyStateContainer>
    );
  };

  return (
    <div>
      {data != null ? (
        <PageContainer>
          <ReactNotification />
          <MainContainer>
            <TitleContainer>
              <h1>{data.name}</h1>
              <BreadCrumbs data={breadcrumbsObj} />
            </TitleContainer>

            <div ref={sectionElements.current[0]}>
              <Section title={"Types of Data"}>
                <Scraper data={highlightObj} />
                <RenderContent
                  container={<DataTypesContainer data={data.dataTypes.items} />}
                  isEmpty={data.dataTypes.items.length === 0}
                  buttonText={"Add Type of Data"}
                  uploader={TypeOfDataUploader}
                  id={data.id}
                />
              </Section>
            </div>

            <div ref={sectionElements.current[1]}>
              <Section title={"How to Request Evidence"}>
                {data.requestDescription}
              </Section>
            </div>

            <div ref={sectionElements.current[2]}>
              <Section title={"Tips and Opinions"}>
                <RenderContent
                  container={<TipsContainer data={data.tips.items} />}
                  isEmpty={data.tips.items.length === 0}
                  buttonText={"Add Warrant Tip"}
                  uploader={TipUploader}
                  id={data.id}
                />
              </Section>
            </div>

            <div ref={sectionElements.current[3]}>
              <Section title={"Search Warrants"}>
                <RenderContent
                  container={
                    <SearchWarrantContainer
                      data={data.approvedWarrants.items}
                    />
                  }
                  isEmpty={data.approvedWarrants.items.length === 0}
                  buttonText={"Upload Search Warrant"}
                  uploader={WarrantUploader}
                  id={data.id}
                />
              </Section>
            </div>
          </MainContainer>
          <TableOfContentsContainer>
            <TableOfContentsFixedContainer>
              <TableOfContents
                onClick={console.log(sectionElements)}
                sec={sectionElements}
                sections={[
                  "Types of Data",
                  "How to Request Evidence",
                  "Tips and Opinions",
                  "Related Search Warrants"
                ]}
              />
            </TableOfContentsFixedContainer>
          </TableOfContentsContainer>
        </PageContainer>
      ) : null}
    </div>
  );
};

export default CompanyPage;
