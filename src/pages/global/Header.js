import React from "react";
import {withStyles} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../../asserts/logo_toolbar.png";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";


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
                            <img src={Logo} style={{marginRight: 30}} alt={'Logo'}/>
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