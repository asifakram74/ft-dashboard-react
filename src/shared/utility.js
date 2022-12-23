import moment from "moment";
import { history } from "../configs/history";
import { store } from "../store/configureStore";
import { setSnackbar } from "../store/Snackbar/snackbar";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const CheckAuthentication = (res) => {
  if (res.auth === false) {
    // console.log("Unauthenticated");
    history.push("/login");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    store.dispatch(setSnackbar(true, "error", res.data.error));
    store.dispatch({ type: "LOGOUT" });
    store.dispatch({ type: "HOME_ON_LOGOUT" });
    return true;
  }
  return true;
};

export const greeting = () => {
  var currentHour = moment().hour();
  if (currentHour >= 3 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Good Evening";
  } else if (currentHour >= 20 && currentHour < 3) {
    return "Good Night";
  } else {
    return "Hello";
  }
};

export const Capitalize = (str) => {
  return str.replace(/\S*/g, function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
};

export const DaysDifferenceFromToday = (date) => {
  var expiry_date = moment(date, "YYYY-MM-DD HH:mm:ss");
  var today = moment(new Date(), "YYYY-MM-DD HH:mm:ss");
  return Math.ceil(moment.duration(expiry_date.diff(today)).asDays());
};

export const DaysDifferenceInHumanReadable = (Udate) => {
  let date = moment(Udate);
  if (moment().diff(date, "days") >= 1) {
    // console.log("date now", date.fromNow());
    return date.fromNow(); // '2 days ago' etc.
  }
  return date.calendar().split(" ")[0]; // today, yesterday,...
};

export const getIdFromPath = (pathName) => {
  return pathName.split("/").reverse()[0];
};

export const normalizePhoneNumber = (value) => {
  const phone = parsePhoneNumberFromString(value);
  if (!phone) {
    return value;
  }
  return phone.formatInternational();
};

export const removeSpacesFromString = (string) => {
  const str = string.replace(/\s+/g, "");
  return str;
};

export const stringToLowercase = (string) => {
  if (string) {
    const res = string.toLowerCase();
    // console.log("string", res);
    return res;
  }
};
