/** @format */

import React, { useEffect, useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Button from "@material-ui/core/Button";

import {
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import _ from "lodash";
import { ReqDelete, ReqPost, ReqPut } from "../../configs/Request";
import { setSnackbar } from "../../store/Snackbar/snackbar";
import { useDispatch } from "react-redux";
import { CheckAuthentication } from "../../shared/utility";
import { useTranslation } from "react-i18next";
import ExpandIcon from "./ExpandIcon";

const normalizeDoc = (doc) =>
  doc
    ? _.cloneDeep(doc).map((item) => ({ id: item.id, status: item.status }))
    : null;

const SingleParent = (props) => {
  const { data, getCoparents } = props;
  const dispatch = useDispatch();
  const [parent, setParent] = useState(false);
  const [parentremove, setParentremove] = useState(false);
  const [invite, setInvite] = useState(false);
  const [inviteButton, setInviteButton] = useState(false);
  const [alertData, setAlertData] = useState("");
  const { t: trans } = useTranslation();

  const [filterState, setFilterState] = useState(data.settings);
  const [isSelectionChanged, setIsSelectionChange] = useState(true);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    const value = checked ? 1 : 0;
    const cloneObj = _.cloneDeep(filterState);
    const index = data.settings.findIndex((item) => item.id == name);
    _.update(cloneObj, `${index}.status`, () => value);
    setFilterState(cloneObj);
    console.log("cloneObj", cloneObj, index, data.settings);
  };

  useEffect(() => {
    setIsSelectionChange(_.isEqual(data.settings, filterState));
    console.log("filterState", filterState);
  }, [filterState, parent]);

  //Update Data in Notification Settings of Co-Parent
  const UpdateNotificationSettings = async (e, doc, co_parent_user_id) => {
    // e.preventDefault();
    const normDoc = normalizeDoc(doc);
    // setParentremove(false);
    const data = { notifications: normDoc };
    try {
      const updateRes = await ReqPut(
        `settings/notifications/preferences/${co_parent_user_id}`,
        data,
        "MeshServ"
      );
      if (updateRes.data.status === 200 || updateRes.data.status === true) {
        // dispatch(setSnackbar(true, "success", updateRes.data.message));
        // setIsSelectionChange(false);
        getCoparents();
        setParent(true);
      } else if (updateRes.data.status === 500) {
        dispatch(setSnackbar(true, "error", updateRes.data.message));
      } else {
        CheckAuthentication(updateRes);
        dispatch(setSnackbar(true, "error", "Could not Update!"));
      }
    } catch (error) {
      console.log("error updating...");
    }
    // console.log("data", data);
    // console.log("doc", doc, co_parent_user_id, normDoc);
    // setParent(true);
  };
  const removeCoparent = async (user_id) => {
    setParentremove(false);
    const params = { co_parent_user_id: user_id };
    try {
      const res = await ReqDelete("coparent", params, "MeshServ");
      if (res.data.status === 200 || res.data.status === true) {
        dispatch(setSnackbar(true, "success", res.data.message));
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        CheckAuthentication(res);
        dispatch(setSnackbar(true, "error", "Could not Update!"));
      }
      getCoparents();
    } catch (error) {
      console.log("error updating...");
    }
    // console.log("e user", user_id);
  };
  const ResendInvitation = async (e, email) => {
    const params = { email: email };
    setInviteButton(true);
    try {
      const res = await ReqPost("coparent/invite", params, "MeshServ");
      // console.log("res.data", res.data);
      CheckAuthentication(res);
      if (res.data.status === 200 || res.data.status === true) {
        setInvite(true);
        setAlertData(res.data.message);
        // dispatch(setSnackbar(true, "success", res.data.message));
        // getCoparents();
      } else if (res.data.status === 500) {
        dispatch(setSnackbar(true, "error", res.data.message));
      } else {
        dispatch(setSnackbar(true, "error", "Could not Update!"));
      }
      // console.log("Response", res);
      setInviteButton(false);
    } catch (error) {
      console.log("error updating...");
    }
    // console.log("ResendInvitation", email);
  };

  return (
    <>
      <div>
        <div className="parents_card">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandIcon />}>
              <ListItem>
                <ListItemAvatar>
                  <img src="images/icon/avatar-male.svg" alt="icon" />
                </ListItemAvatar>
                <ListItemText
                  primary={data.name}
                  secondary={
                    <>
                      <p>{data.email}</p>
                      {data.active === 0 && (
                        <span className="yellow_tag">Pending</span>
                      )}
                    </>
                  }
                />
              </ListItem>
            </AccordionSummary>

            <AccordionDetails className="parent-list">
              <Grid item xs={12} md={12} lg={12}>
                <List>
                  {_.size(filterState) > 0 && data.active
                    ? filterState.map((setting, index) => {
                        return (
                          <ListItem fullwidth key={setting.id}>
                            <ListItemText primary={setting.display_name} />
                            <ListItemSecondaryAction>
                              <IconButton edge="end">
                                <Checkbox
                                  icon={<CircleUnchecked />}
                                  checkedIcon={<CircleCheckedFilled />}
                                  name={setting.id.toString()}
                                  checked={setting.status == 1}
                                  onChange={handleChange}
                                  classes={{
                                    root: `custom-checkbox-root ${setting.type}`,
                                  }}
                                />
                              </IconButton>
                            </ListItemSecondaryAction>
                          </ListItem>
                        );
                      })
                    : ""}
                </List>
              </Grid>
            </AccordionDetails>

            <AccordionActions>
              <Button
                variant="contained"
                className="forget_me_btn"
                onClick={() => setParentremove(true)}
                // onClick={(e) => removeCoparent(e, data.user_id)}
              >
                {data.active === 0 ? "Revoke" : "Remove"}
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="update_btn"
                // disabled={inviteButton}
                disabled={data.active === 0 ? inviteButton : isSelectionChanged}
                // onClick={UpdateNotificationSettings}
                onClick={
                  data.active === 0
                    ? (e) => ResendInvitation(e, data.email)
                    : (e) =>
                        UpdateNotificationSettings(e, filterState, data.user_id)
                }
              >
                {data.active === 0 ? "Resend" : "Save"}
              </Button>
            </AccordionActions>
          </Accordion>
        </div>
      </div>

      {/* Sweet Alert (POPUP) */}
      <div className="swal_al">
        <SweetAlert
          custom
          show={parent}
          title="Successful!"
          onConfirm={() => setParent(false)}
          onCancel={() => setParent(false)}
          confirmBtnText="OK"
          customIcon="/Images/icon/Tick-illustration.svg"
          customClass="sweet_alert"
        >
          <div className="swt_alert">
            <p>Your Selected "Permissions" are saved successfully.</p>
          </div>
        </SweetAlert>
      </div>
      {/* Popup close */}
      {/* Sweet Alert (POPUP) */}
      <div className="swal_al">
        <SweetAlert
          custom
          show={parentremove}
          // title="Successful!"
          onConfirm={() => removeCoparent(data.user_id)}
          // onConfirm={() => setParentremove(false)}

          onCancel={() => setParentremove(false)}
          confirmBtnText="Yes"
          customIcon="/Images/icon/delete-member.svg"
          customClass="sweet_alert remove_family "
          showCancel={true}
          cancelBtnText="No"
        >
          <div className="swt_alert">
            <p>Do you want to remove this member from family?</p>
          </div>
        </SweetAlert>
      </div>
      {/* Popup close */}
      {/* Sweet Alert (POPUP) */}
      {alertData && (
        <div className="swal_al">
          <SweetAlert
            custom
            show={invite}
            title={trans("success.Successful!")}
            onConfirm={() => setInvite(false)}
            onCancel={() => setInvite(false)}
            confirmBtnText="OK"
            customIcon="/Images/icon/Tick-illustration.svg"
            customClass="sweet_alert"
          >
            <div className="swt_alert">
              <p>
                {/* {trans("success.Your Password has been changed successfully!")} */}
                {alertData}
              </p>
            </div>
          </SweetAlert>
        </div>
      )}
      {/* Popup close */}
    </>
  );
};

export default SingleParent;
