/** @format */

import React, { useState } from "react";
import Card from "../../../../../../components/globalComponents/Card";
import Layout from "../../../../../../components/globalComponents/Layout";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SafeSearch from "../../../../../../assets/images/icon/safe-search-instance.svg";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@material-ui/core";
import DatingGambling from "../../../../../../assets/images/icon/dating-gambling-icon-instance.svg";

import DrugsAbortion from "../../../../../../assets/images/icon/drugs-icon-instance.svg";

import Pornography from "../../../../../../assets/images/icon/Pronography-icon-instance.svg";

import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import Item from "../../../Globel/Item";
import { kidsDevicelist } from "../../../../../../constants/ViewLists";
import ListCard from "../../../Globel/ListCard";
import Button from "../../../../../../components/globalComponents/Button";
import SweetAlert from "react-bootstrap-sweetalert";

const InternetFilter = () => {
  // const [testing, setTesting] = useState(false);
  const [internetFilterSave, setInternetFilterSave] = useState(false);

  // const [isAllowed, setIsAllowed] = useState(false);
  // const handleSettingChange = () => {
  // 	setIsAllowed((prev) => !prev);
  // 	const settingChange = isAllowed;
  // 	localStorage.setItem("isPushNotificationsOn", !settingChange);
  // };

  // handleChange = (event) => {
  // 	this.setState({ boxAll: event.target.checked }, () => {
  // 		console.log("This returned true or false", this.state.boxAll);
  // 	});
  // };
  return (
    <div>
      <Layout>
        <div className="internetfilter">
          <Card>
            <Grid container alignItems="center">
              <Grid item sm={10} className="text-left">
                <h5>Enable Internet Filters</h5>
              </Grid>

              <Grid item sm={2} className="text-right notification_date">
                {/* <CheckBox /> */}
                <div className="switch right schedule_toggle">
                  <input
                    type="checkbox"
                    id="switch" /* onClick={notfify} */
                    // onChange={this.handleChange}
                  />
                  <label for="switch"></label>
                  {/*     <input type="checkbox" className="toast-custom" checked />
					   <span className="lever"></span> </label> */}
                </div>{" "}
                {/* <FormControlLabel
        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
        label="iOS style"
      /> */}
                {/* <Checkbox
										icon={<CircleUnchecked />}
										checkedIcon={<CircleCheckedFilled />}
										name="push_setting"
										// checked={isAllowed}
										// onChange={handleSettingChange}
									/> */}
              </Grid>
            </Grid>
          </Card>

          <Card>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className="list-mui blue-checkbox">
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <img src={SafeSearch} alt="SafeSearch" />
                      </ListItemAvatar>

                      <ListItemText
                        primary="SafeSearch"
                        secondary="It filters adult, pornographic and explicit sites search."
                      />

                      <ListItemSecondaryAction>
                        <IconButton edge="end" className="checkbox-mui">
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            name="test"
                          />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Card>

          <Card>
            <ListCard
              mainClass="pink-checkbox"
              avatar={Pornography}
              title="Pornography"
              subtitle="Blocks access to all 18+/mature content websites."
            />
          </Card>

          <Card>
            <ListCard
              mainClass="purple-checkbox"
              avatar={DrugsAbortion}
              title="Drugs/Abortion"
              subtitle="It blocks the websites which contain drugs and abortion related content."
            />
          </Card>
          <Card>
            <ListCard
              mainClass="yellow-checkbox"
              avatar={DatingGambling}
              title="Dating/Gambling"
              subtitle="It filters adult, pornographic and explicit sites search."
            />
          </Card>
          <Button title="Save" onClick={() => setInternetFilterSave(true)}>
            {" "}
          </Button>
        </div>
      </Layout>

      <div className="swal_al single-btn">
        <SweetAlert
          custom
          show={internetFilterSave}
          title="Activated!"
          // onConfirm={() => removeKid(data.user_id)}
          // onConfirm={() => removeKid(false)}

          onConfirm={() => setInternetFilterSave(false)}
          confirmBtnText="OK"
          customIcon="/Images/icon/Tick-illustration.svg"
          customClass="sweet_alert remove_family "
          // showCancel={true}
          // cancelBtnText="OK"
        >
          <div className="swt_alert">
            <p>Your selected "internet filters" are active now.</p>
          </div>
        </SweetAlert>
      </div>
    </div>
  );
};

export default InternetFilter;
