import "./App.css";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">App header content here</header>
    </div>
  );
}

export default App;
