import React from "react";
import {withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../asserts/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import {Link} from "react-router-dom";


const styles = () => ({
  avatar: {
    margin: '0 24px',
    width: 100,
    height: 100,
    // color: 'rgba(0,0,0, 0.54)'
  },
  button: {
    margin: '0 8px'
  },
  topText: {
    fontWeight: 500,
    lineHeight: '23px',
    fontSize: '15px',
  },
  chip: {
    margin: 8,
  },

});


class Header extends React.Component {

  render() {
    const {isNoti, onClickNoti} = this.props;

    return (
      <AppBar position={"sticky"} color={"#fff"} style={{display: 'flex', alignItems: 'center'}}>
        <Toolbar style={{
          display: 'flex',
          width: 1200,
        }}>
          <div style={{
            height: 40,
            width: 40,
            marginRight: 100,
            padding: 5
          }}>
            <Link to={'/'}>
              <img src={Logo} style={{
                height: 40,
                objectFit: 'contain',
              }} alt={'Logo'}/>
            </Link>
          </div>
          <div style={{
            border: '2px solid #dedede',
            height: 35,
            borderRadius: 2,
            flexBasis: '20%',
            marginRight: 50,
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}>
            <SearchIcon style={{flexBasis: '9%'}}/>
            <input ref={(input) => {
              this.textInput = input;
            }} style={{
              flexBasis: '90%',
              height: '95%',
              fontSize: '100%',
              border: 'none'
            }} placeholder={'Поиск'}/>
          </div>
          <div style={{flexGrow: 1}}/>
          <div>
            <Button variant={"text"}>Как это работает</Button>
            <Button variant={"text"}>Поддержка</Button>
            <IconButton onClick={onClickNoti}>
              <Badge
                color="secondary"
                badgeContent={1}
                invisible={!isNoti}
                style={{marin: "8px"}}
              ><NotificationsIcon/></Badge>
            </IconButton>
            <IconButton><AccountCircle/></IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }

}

export default withStyles(styles)(Header);