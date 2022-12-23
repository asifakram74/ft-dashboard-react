import React from 'react';
import Layout from '../components/globalComponents/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import { setuptStepskids } from '../constants/ViewLists';
import Button from '../components/globalComponents/Button';
const SetupKids = (props) => {
  var QRCode = require('qrcode.react');

  return (
    <div>
      <div className="setupkids qr_code_com">
        <Card>
          <div className={props.className}>
            <div className="qr_code">
              <div className="qr_code_border">
                <QRCode
                  value="http://facebook.github.io/react/"
                  renderAs="svg"
                />
              </div>
            </div>
          </div>
          <div className="kidsdevice">
            <h3 className="">{props.heading}</h3>
            <p>{props.description}</p>
          </div>
          <List>
            {setuptStepskids.map((step, index) => {
              return (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={step.image} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={step.title}
                    secondary={step.description}
                  />
                </ListItem>
              );
            })}
          </List>
          <Button
            url={props.url}
            title={props.button}
            img="/images/icon/browser_link_icon.svg"
          />
        </Card>
      </div>
    </div>
  );
};

const Qr_Screen = () => {
  return (
    <div>
      <Layout>
        <SetupKids
          className="setupkids_bg_blue"
          heading="Setup Your Kid Device"
          description="Perform all these steps on your kid’s device"
          url="#"
          button="View Detailed Instructions"
        />
      </Layout>
    </div>
  );
};

export default Qr_Screen;
