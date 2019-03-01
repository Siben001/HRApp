import React from "react";
import {theme} from "../global/style";
import {Divider, Typography} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Link from "react-router-dom/es/Link";
import Avatar from "@material-ui/core/Avatar";

class Notification extends React.Component {


    render() {
        const {showNoti} = this.props;

        return (
            <div style={{
                zIndex: 2202,
                position: 'fixed',
                top: '70px',
                right: 'calc((100% - 1200px)/2 + 48px',
                boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.2), " +
                    "0px 2px 2px 0px rgba(0,0,0,0.14), " +
                    "0px 3px 1px -2px rgba(0,0,0,0.12)",
                maxWidth: '300px',
                transition: 'ease 700ms'
            }}>
                {!showNoti ? null :
                    <div>
                        <div style={{backgroundColor: theme.colors.background, padding: '8px 24px'}}>
                            <Typography variant={"h6"}>Уведомления</Typography>
                        </div>
                        <Divider/>
                        <div style={{padding: '8px 24px'}}>
                            <div style={{display: 'flex'}}>
                                <div style={{flexGrow: '1', marginRight: 8}}>
                                    <Avatar style={{height: '24px', width: '24px'}}>
                                        <AccountCircle style={{height: '24px'}}/>
                                    </Avatar>
                                </div>
                                <Typography>Клавдия сделала <Link to={"/offer"}>предложение</Link> для вашего
                                    проекта</Typography>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}

export default Notification;