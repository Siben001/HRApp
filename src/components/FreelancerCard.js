import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";


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
        // height: 12,
    },

});


class FreelancerCard extends React.Component {


    render() {
        const {classes} = this.props;

        const text = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
        const skills = ["Python", "Java", "React.js", "Javascript"]

        return (
            <div key="card" style={{display: 'flex', margin: 24, textAlign:'left'}}>
                <div key="avatar" style={{}}>
                    <Avatar  className={classes.avatar}>
                        <AccountCircle className={classes.avatar}/>
                    </Avatar>
                </div>
                <div key="info" style={{flexBasis: '83%', marginLeft: 24}}>
                    <div key="main-bar" style={{display: 'flex', marginBottom: '8px'}}>
                        <div key="main-info" style={{textAlign: 'left', flexGrow: 1}}>
                            <Typography className={classes.topText} color="primary">Name AnotherName F.</Typography>
                            <Typography className={classes.topText}>Job name atatata</Typography>
                        </div>
                        <div key="buttons">
                            <Button className={classes.button} variant={"outlined"}>View profile</Button>
                            <Button className={classes.button} variant={"contained"} color={"primary"}>Contact</Button>
                        </div>
                    </div>
                    <div key={"salary-info"} style={{display: 'flex', marginBottom: '8px'}}>
                        <div style={{flexBasis: '20%'}}><Typography><b>$90</b>/hr</Typography></div>
                        <div style={{flexBasis: '60%'}}><Typography><b>50k+</b> earned</Typography>
                        </div>
                        <div style={{flexBasis: '20%', textAlign: 'center'}}><Typography><b>Russia</b></Typography></div>
                    </div>
                    <div key={"additional-info"} style={{marginBottom: '4px'}}>
                        <Typography
                            style={{textAlign: 'left'}}>{text.length > 300 ? text.substr(0, 300) + " ..." : text}
                        </Typography>
                    </div>
                    <div key={"skills"}>
                        {skills.map((skill, ind) => ind < 3
                                ? <Chip label={skill}
                                        className={classes.chip}
                                        style={{marginLeft: ind === 0? 0: 8}}/>
                                : ind === 3
                                ?
                                <Chip label={(skills.length-3) +" more"} color={"primary"}/>
                                :null
                                  )}
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(FreelancerCard);