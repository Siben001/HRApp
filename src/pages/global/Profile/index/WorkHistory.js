import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Divider, Typography} from "@material-ui/core";
import Star from "@material-ui/icons/Star"
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


class WorkHistory extends React.Component {

    state = {
        fullText: false,
    };

    render() {
        const {classes, history} = this.props;

        const row = ({name, rating, time, totalSum, price, status}) =>
            <div>
             <div style={{display: 'flex', padding: '24px 0'}}>
                <div style={{flexGrow: 1}}>
                    <Typography style={{color: theme.colors.primary, fontSize: '18px', fontWeight: '500'}}>{name}
                    </Typography>
                    <Typography>{status}</Typography>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                    <Star style={{color: theme.colors.primary, height: '14px'}}/><Typography>{rating}</Typography>
                    </div>
                </div>
                <div style={{textAlign: 'right'}}>
                    <Typography style={{fontWeight: 700}}>{`${totalSum}р`}</Typography>
                    <Typography style={{color: "#656565"}}>{`${price}р/час`}</Typography>
                    <Typography>{time}</Typography>
                </div>
            </div>
                <Divider/>
            </div>;

        return (
            <Paper className={"paper"} style={{borderRadius: 0, marginTop: '30px', padding: 0}}>
                <div style={{backgroundColor: theme.colors.background, padding: '24px'}}>
                    <Typography variant={"h4"}>История проектов</Typography>
                </div>
                <Divider/>
                <div style={{padding: "0 24px 24px 24px"}}>
                {history.map(row_info => row(row_info))}
                </div>

            </Paper>
        );
    }
}

export default withStyles(styles)(WorkHistory);