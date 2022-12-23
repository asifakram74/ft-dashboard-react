import React from "react";
import Anchor from "./Anchor";
import LanguageDropdown from "../../../components/globalComponents/Language_Select";
function LoginFooter() {
  return (
    <>
      <footer>
        <ul className="login_ul">
          <LanguageDropdown />
          <li>
            <Anchor url="/Confirm_Email" title="Help" />
          </li>
          <li>
            <Anchor url="#" title="Privacy" />
          </li>
          <li>
            <Anchor url="#" title="Terms" />
          </li>
        </ul>
      </footer>
    </>
  );
}

export default LoginFooter;
