import { Grid } from "@material-ui/core";
import React from "react";
import Card from "../../components/globalComponents/Card";
import { Link } from "react-router-dom";
import { history } from "../../configs/history";

const SingleNotification = (props) => {
  return (
    <>
      <div className="notifications">
        <Card>
          <Link to={`/notifications/${props.data_id}`}>
            <Grid container className="single_notification">
              <p className="span-new">{props.note}</p>
              <Grid item xs={12}>
                <img src={props.img} alt="d" class="w100" fullWidth />
              </Grid>

              <Grid item xs={12} sm={10} md={10} className="text-left pt-1">
                <h5 className="card-title activator grey-text text-darken-4 mt-0">
                  {props.title}
                </h5>
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                md={2}
                className="text-right pt-1 notification_date"
              >
                <a href={props.url}>{props.day} </a>
              </Grid>

              <Grid item xs={12} className="text-left">
                <h6>
                  <a href={props.url}>{props.description}</a>
                </h6>
              </Grid>

              <Grid item xs={12} className="text-right ">
                <Link
                  to={`/notifications/${props.data_id}`}
                  className="read-more"
                >
                  Read More &nbsp;
                  <span>
                    <img
                      src="/images/icon/notification-arow-right.svg"
                      alt=""
                    />
                  </span>
                </Link>
              </Grid>
            </Grid>
          </Link>
        </Card>
      </div>
    </>
  );
};

export default SingleNotification;
