import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <p>App header content here</p>
      </header>
    </div>
  );
};

export default withAuthenticator(App);
