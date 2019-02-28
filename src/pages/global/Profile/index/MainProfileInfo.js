import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import "./style.css"
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle"
import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";

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
        const {classes} = this.props;
        const {fullText} = this.state;
        const text = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
        const rate = (value, name) => <div className={classes.column}>
            <Typography variant={"h6"}>{value}</Typography>
            <Typography style={{fontSize: "16px"}}>{name}</Typography>
        </div>

        return (
            <Paper className={"paper"} style={{borderRadius: 0}}>
                <div key={"main-info"} style={{display: 'flex', marginBottom: '24px'}}>
                    <div key="avatar" className={classes.avatarBlock}>
                        <Avatar className={classes.avatar}>
                            <AccountCircle className={classes.avatar}/>
                        </Avatar>
                    </div>
                    <div key="info" className={classes.nameBlock}>
                        <Typography variant={"h6"}>Name AnotherName F.</Typography>
                        <Typography><b>Russia</b></Typography>
                    </div>
                    <div className={classes.achieveBlock}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <Typography style={{fontSize: '16px'}}><b>100%</b></Typography>
                        <div style={{width: '150px', height: '4px', backgroundColor: '#008489'}}/>
                            <Typography style={{color: "rgba(0,0,0, 0.54)"}}>Job success</Typography>
                        </div>

                    </div>
                </div>
                <div key={"about-yourself"} style={{marginBottom: '24px'}}>
                    <Typography variant={"h6"}>Job name atatata</Typography>
                    <Typography>
                        {text.length > 510 && !fullText ? text.substr(0, 510) + " ..." : text}
                        {text.length > 510 && !fullText ? <a onClick={() => this.setState({fullText: true})}
                                                className={"more"}
                        >more</a> : null}
                    </Typography>
                </div>
                <div key={"rates"} style={{display: 'flex', justifyContent: "space-between"}}>
                    {rate('$75.00','Hourly rate')}
                    {rate('$9k+', 'Total earned')}
                    {rate('24', 'Jobs')}
                    {rate('289', 'Hours worked')}
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(MainProfileInfo);