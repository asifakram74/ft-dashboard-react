/** @format */

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../../components/globalComponents/Layout";
import Card from "../../components/globalComponents/Card";
import _ from "lodash";
import {
  Grid,
  List,
  ListItem,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Button from "../../components/globalComponents/Button";
import CheckBox from "../../components/Checkbox/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { pushNotificationSettings } from "../../constants/FormFields";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(2, 0),
  },
  ListItem: {
    padding: theme.spacing(2, 0),
  },
  ListItemSecondaryAction: {
    right: 0,
  },
}));
const Option = (props) => {
  const classes = useStyles();
  return (
    <>
      <ListItem className={classes.ListItem}>
        <Typography variant="h5" className="p-0">
          {props.title}
        </Typography>

        <ListItemSecondaryAction className={classes.ListItemSecondaryAction}>
          <ul className=" mb-0 setting_list no-border">
            <CheckBox disable={props.isDisabledCheckbox} />
          </ul>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};
const Account_notification = (props) => {
  const isPushNotificationsOn = localStorage.getItem("isPushNotificationsOn")
    ? localStorage.getItem("isPushNotificationsOn")
    : "true";
  //   const isPushNotificationsOn = _.get(
  //     localStorage,
  //     "getItem('isPushNotificationsOn')",
  //     "true"
  //   );
  const isEmailNotificationOn = localStorage.getItem("isEmailNotificationOn")
    ? localStorage.getItem("isEmailNotificationOn")
    : "true";
  const stringifiedPushNotifications = localStorage.getItem(
    "pushNotificationsList"
  )
    ? JSON.parse(localStorage.getItem("pushNotificationsList"))
    : pushNotificationSettings;
  const [pushNotificationsList, setPushNotificationsList] = useState(
    stringifiedPushNotifications
  );
  const [isAllowed, setIsAllowed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEmailNotificationAllowed, setIsEmailNotificationAllowed] = useState(
    isEmailNotificationOn
  );
  //   console.log(
  //     "isPushNotificationsOn",
  //     isPushNotificationsOn,
  //     pushNotificationsList,
  //     pushNotificationsList.location_alerts
  //   );

  useEffect(() => {
    if (isPushNotificationsOn === "false") {
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
    if (isEmailNotificationOn === "false") {
      setIsEmailNotificationAllowed(false);
    } else {
      setIsEmailNotificationAllowed(true);
    }
  }, [""]);
  useEffect(() => {
    if (isAllowed === false) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    // setIsDisabled((prev) => !prev);
  }, [isAllowed]);
  const handleSettingChange = () => {
    setIsAllowed((prev) => !prev);
    const settingChange = isAllowed;
    localStorage.setItem("isPushNotificationsOn", !settingChange);
  };
  const handleEmailChange = (event) => {
    setIsEmailNotificationAllowed((prev) => !prev);
    const emailChange = !isEmailNotificationAllowed;
    localStorage.setItem("isEmailNotificationOn", emailChange);
  };
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPushNotificationsList({ ...pushNotificationsList, [name]: checked });
  };
  const SaveSettings = () => {
    localStorage.setItem(
      "pushNotificationsList",
      JSON.stringify(pushNotificationsList)
    );
  };
  const classes = useStyles();
  return (
    <>
      <Layout title={props.title}>
        <div className="account-setting text-center list-item">
          <Card>
            <Grid container className="single_notification">
              <Grid item xs={12}>
                <img
                  src="/images/icon/notification-setting_illustration2.svg"
                  alt=""
                />
              </Grid>
              <Grid item xs={10} sm={10} md={10} className="text-left pt-1">
                <h4 className="mt-0">Push Notification</h4>
                <p className="sub-title">
                  Enable notifications for updates, location, apps, screens time
                  alerts and general notifications.
                </p>
              </Grid>

              <Grid
                item
                xs={2}
                sm={2}
                md={2}
                className="text-right pt-1 notification_date"
              >
                {/* <CheckBox /> */}
                <ul className=" mb-0 setting_list no-border">
                  <Checkbox
                    icon={<CircleUnchecked />}
                    checkedIcon={<CircleCheckedFilled />}
                    name="push_setting"
                    checked={isAllowed}
                    onChange={handleSettingChange}
                  />
                </ul>
              </Grid>

              <Grid item xs={12}>
                <Divider className={classes.divider} />
                <div id="elementsToOperateOn">
                  <List>
                    <ListItem className={classes.ListItem}>
                      <Typography variant="h5" className="p-0">
                        Location Alerts
                      </Typography>

                      <ListItemSecondaryAction
                        className={classes.ListItemSecondaryAction}
                      >
                        <ul className=" mb-0 setting_list no-border">
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            name="location_alerts"
                            checked={pushNotificationsList.location_alerts}
                            onChange={(e) => handleChange(e)}
                            disabled={isDisabled}
                          />
                          {/* <CheckBox disable={isDisabled} /> */}
                        </ul>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem className={classes.ListItem}>
                      <Typography variant="h5" className="p-0">
                        App Alerts
                      </Typography>

                      <ListItemSecondaryAction
                        className={classes.ListItemSecondaryAction}
                      >
                        <ul className=" mb-0 setting_list no-border">
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            name="app_alerts"
                            checked={pushNotificationsList.app_alerts}
                            onChange={(e) => handleChange(e)}
                            disabled={isDisabled}
                          />
                          {/* <CheckBox disable={isDisabled} /> */}
                        </ul>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.ListItem}>
                      <Typography variant="h5" className="p-0">
                        Screen Time Alerts
                      </Typography>
                      <ListItemSecondaryAction
                        className={classes.ListItemSecondaryAction}
                      >
                        <ul className=" mb-0 setting_list no-border">
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            name="screen_time_alerts"
                            checked={pushNotificationsList.screen_time_alerts}
                            onChange={(e) => handleChange(e)}
                            disabled={isDisabled}
                          />
                          {/* <CheckBox disable={isDisabled} /> */}
                        </ul>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem className={classes.ListItem}>
                      <Typography variant="h5" className="p-0">
                        Contacts Alerts
                      </Typography>
                      <ListItemSecondaryAction
                        className={classes.ListItemSecondaryAction}
                      >
                        <ul className=" mb-0 setting_list no-border">
                          <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            name="contacts_alerts"
                            checked={pushNotificationsList.contacts_alerts}
                            onChange={(e) => handleChange(e)}
                            disabled={isDisabled}
                          />
                          {/* <CheckBox disable={isDisabled} /> */}
                        </ul>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>

        <Card className="account-notificat">
          <Grid container className="single_notification">
            <Grid item xs={10} sm={10} md={10} className="text-left pt-1">
              <h4 className="mt-0">Email Notification</h4>
              <p className="sub-title">
                Enable to receive email from FamilyTime with the system,
                activity reports, product updates, offers, and newsletters.
              </p>
            </Grid>

            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              className="text-right pt-1 notification_date"
            >
              <Checkbox
                icon={<CircleUnchecked />}
                checkedIcon={<CircleCheckedFilled />}
                name="email_notification"
                checked={isEmailNotificationAllowed}
                onChange={handleEmailChange}
              />
              {/* <CheckBox /> */}
            </Grid>
          </Grid>
        </Card>

        <Button title="Save" onClick={SaveSettings} />
      </Layout>
    </>
  );
};

export default Account_notification;
