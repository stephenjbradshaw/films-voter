import { AmplifySignOut } from "@aws-amplify/ui-react";

import React from "react";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1>Films Voter</h1>
      <AmplifySignOut />
    </header>
  );
};

export default Header;
