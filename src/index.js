import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import config from "./config";
import registerServiceWorker from "./registerServiceWorker";
import Playground from "./Playground";
import CompanyPage from "./pages/CompanyPage";
import "./index.css";

import Amplify from "aws-amplify";
import appSyncConfig from "./aws-exports.js";

// use for connecting to data sources via GraphQl
Amplify.configure(appSyncConfig);

Amplify.configure({
  // Auth: {
  //   region: config.cognito.REGION,
  //   userPoolId: config.cognito.USER_POOL_ID,
  //   userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  //   identityPoolId: config.cognito.IDENTITY_POOL_ID
  // },
  // API: {
  //   graphql_endpoint: graphql.cognito.ENDPOINT
  // }
  // Storage: {
  //   AWSS3: {
  //     bucket: config.s3.BUCKET,
  //     region: config.s3.REGION
  //   }
  // }
});

ReactDOM.render(
  // --- PRODUCTION ---
  <Router>
    <App />
  </Router>,

  // --- DEV ---
  // <CompanyPage />,
  // <Playground />,
  document.getElementById("root")
);
registerServiceWorker();
