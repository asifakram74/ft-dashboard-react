import { ReqGet } from "../../../configs/Request";
import {
  coparentsInitiated,
  coparentsFailed,
  coparentsSuccess,
} from "./actions";
import { setSnackbar } from "../../Snackbar/snackbar";
import { history } from "../../../configs/history";
import { CheckAuthentication } from "../../../shared/utility";

export const getCoparents = () => async (dispatch) => {
  dispatch(coparentsInitiated());
  try {
    // const token = localStorage.getItem("accessToken");
    const res = await ReqGet("coparents", "MeshServ");
    CheckAuthentication(res);
    if (res.data.status === 200) {
      dispatch(coparentsSuccess(res.data));
    } else {
      dispatch(setSnackbar(true, "error", "Something Went Wrong!"));
    }
    return;
  } catch (error) {
    // console.log("error", error);
    dispatch(coparentsFailed());
    if (error.response) {
      dispatch(setSnackbar(true, "error", error.response.data.message));
    }
    if (error) {
      dispatch(setSnackbar(true, "error", "Something went wrong"));
    }
    return;
  }

  // try {
  //   const res = await ReqGet("coparents", "MeshServ");
  //   if (res.data.status === 200) {
  //     setData(res.data);
  //     setIsSuccess(true);
  //     console.log("dataaa", data);
  //   } else {
  //     CheckAuthentication(res);
  //     dispatch(setSnackbar(true, "error", "Something Went Wrong!"));
  //   }
  //   console.log("response", res);
  // } catch (error) {
  //   console.log("error", error.response);
  // }
};
