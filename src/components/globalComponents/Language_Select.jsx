import React, { useEffect, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { languages } from "../../constants/FormFields";
import i18n from "../../i18n";
import { ReqPut } from "../../configs/Request";
import { CheckAuthentication } from "../../shared/utility";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { connect, useDispatch } from "react-redux";
import { authenticateUser } from "../../store/authentication/user/async-action";
import { UpdateUserDetails } from "../../store/authentication/user/update-language-async-action";

const LanguageDropdown = (props) => {
  const {
    userReducer,
    authenticateUser,
    UpdateUserDetails,
    isLiveLanguageUpdate,
  } = props;
  const defaultLanguage = i18n.language ? i18n.language : "en";
  const [language, setLanguage] = useState(defaultLanguage);
  const [updateLanguage, setUpdateLanguage] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
    if (isLiveLanguageUpdate) {
      setUpdateLanguage(true);
    }
    // UpdateLanguageApiCall(event.target.value);
  };
  useEffect(() => {
    if (updateLanguage) {
      const data = {
        name: userReducer.user.name,
        phone: userReducer.user.phone,
        relationship: userReducer.user.relationship,
        name: userReducer.user.name,
        language: language,
      };
      UpdateUserDetails(data);
      authenticateUser();
    }
    setUpdateLanguage(false);
  }, [updateLanguage]);
  function HomeIcon(props) {
    return <img src={props.image} alt="" />;
  }
  useEffect(() => {
    setLanguage(localStorage.getItem("i18nextLng"));
  }, [defaultLanguage]);
  return (
    <div className="languages_drop">
      <FormControl className="navbar-list right">
        <Select
          onChange={handleChange}
          value={language}
          menuprops={{ disableScrollLock: true }}
        >
          {languages.map((lang, key) => {
            return (
              <MenuItem key={key} value={lang.value}>
                <HomeIcon image={lang.image} />
                <p>{lang.name} </p>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => dispatch(authenticateUser()),
    UpdateUserDetails: (data) => dispatch(UpdateUserDetails(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown);
