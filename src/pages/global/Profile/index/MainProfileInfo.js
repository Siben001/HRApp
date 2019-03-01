import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import "./style.css"
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle"

import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import Rating from "../../Rating";
import {theme} from "../../style";

const styles = () => ({
    avatar: {
        width: '80px',
        height: '80px',
    },
    avatarBlock: {
        flexBasis: '92px',
        paddingRight: '12px',
    },
    nameBlock: {
        flexBasis: 'calc(100% - 92px - 174px)',
    },
    achieveBlock: {
        flexBasis: '174px',
        padding: '0 12px,'
    },
    column: {
        flexGrow: 1,
    }
});


class MainProfileInfo extends React.Component {

    state = {
        fullText: false,
    };

    render() {
        const {classes, info} = this.props;
        const {fullText} = this.state;
        const text = JSON.parse(JSON.stringify(info.descriptionProfile));
        const rate = (value, name) => <div className={classes.column}>
            <Typography variant={"h6"}>{value}</Typography>
            <Typography style={{fontSize: "16px"}}>{name}</Typography>
        </div>;

        return (
            <Paper className={"paper"} style={{borderRadius: 0}}>
                <div key={"main-info"} style={{display: 'flex', marginBottom: '24px'}}>
                    <div key="avatar" className={classes.avatarBlock}>
                        <Avatar className={classes.avatar}>
                            <AccountCircle className={classes.avatar}/>
                        </Avatar>
                    </div>
                    <div key="info" className={classes.nameBlock}>
                        <Typography variant={"h6"}>{`${info.firstName} ${info.lastName}`}</Typography>
                        <Typography style={{fontWeight: 'bold'}}>{info.location}</Typography>
                    </div>
                    <div className={classes.achieveBlock}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography
                                style={{fontSize: '16px', fontWeight: 'bold'}}>{`${info.rating}%`}</Typography>
                            <Rating rating={info.rating}/>
                            <Typography style={{color: "rgba(0,0,0, 0.54)"}}>Успешных проектов</Typography>
                        </div>

                    </div>
                </div>
                <div key={"about-yourself"} style={{marginBottom: '24px'}}>
                    <Typography variant={"h6"}>{info.specialization}</Typography>
                    <Typography>
                        {text.length > 510 && !fullText ? text.substr(0, 510) + " ..." : text}
                        {text.length > 510 && !fullText ? <a onClick={() => this.setState({fullText: true})}
                                                             className={"more"}
                        >еще</a> : null}
                    </Typography>
                </div>
                <div key={"rates"} style={{display: 'flex', justifyContent: "space-between"}}>
                    {rate(`${info.pricePerHour}р/час`, 'Ставка')}
                    {rate(`${info.earned}+`, 'Заработано')}
                    {rate(`${info.workHistories.length}`, 'Проектов')}
                    {rate(`${info.totalWorkTime}`, 'Отработано часов')}
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(MainProfileInfo);