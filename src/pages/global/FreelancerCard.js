import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import {theme} from "../global/style";
import Profile from "./Profile";
import Rating from "./Rating";


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

    state = {
        isOpen: false,
    };

    handleOpen = () => this.setState({isOpen: true});

    handleClose = () => this.setState({isOpen: false});


    render() {
        const {classes, info} = this.props;
        const {firstName, lastName, specialization, } = info;
        const {isOpen} = this.state;
        console.log(theme.colors.primary)

        const text = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
        const skills = ["Python", "Java", "React.js", "Javascript"]

        return (
            <div key="card" style={{display: 'flex', margin: 24, textAlign:'left'}}>
                <div key="avatar" style={{}}>
                    <Avatar className={classes.avatar}>
                        <AccountCircle className={classes.avatar}/>
                    </Avatar>
                </div>
                <div key="info" style={{flexBasis: '83%', marginLeft: 24}}>
                    <div key="main-bar" style={{display: 'flex', marginBottom: '8px'}}>
                        <div key="main-info" style={{textAlign: 'left', flexGrow: 1}}>
                            <Typography className={classes.topText} style={{color: theme.colors.primary}}>
                                {`${info.firstName} ${info.lastName}`}
                            </Typography>
                            <Typography className={classes.topText}>
                                {info.specialization}
                            </Typography>
                        </div>
                        <div key="buttons">
                            <Button className={classes.button} variant={"outlined"}
                                    onClick={this.handleOpen}
                            >Профиль</Button>
                            <Button className={classes.button}
                                    style={{backgroundColor: theme.colors.primary, color: "#fff"}}
                                    color={"primary"}>Написать</Button>
                        </div>
                    </div>
                    <div key={"salary-info"} style={{display: 'flex', marginBottom: '8px'}}>
                        <div style={{flexBasis: '25%'}}>
                            <Typography><span style={{fontWeight: 'bold'}}>{`${info.pricePerHour}р`}</span>/час
                            </Typography>
                        </div>
                        <div style={{flexBasis: '25%'}}>
                            <Typography><span style={{fontWeight: 'bold'}}>{`${info.earned}`}</span>+ заработано
                            </Typography>
                        </div>
                        <div style={{flexBasis: '25%'}}>
                            <Typography>
                                <span style={{fontWeight: 'bold'}}>{`${info.rating}%`}</span> Успешных проектов
                            </Typography>
                            <Rating rating={info.rating}/>
                        </div>
                        <div style={{flexBasis: '25%', textAlign: 'center'}}>
                            <Typography style={{fontWeight: 'bold'}}>{`${info.location}`}</Typography>
                        </div>
                    </div>
                    <div key={"additional-info"} style={{marginBottom: '4px'}}>
                        <Typography
                            style={{textAlign: 'left'}}>
                            {info.descriptionProfile.length > 300 ? info.descriptionProfile.substr(0, 300) + " ..." : info.descriptionProfile}
                        </Typography>
                    </div>
                    <div key={"skills"}>
                        {info.tags.map((skill, ind) => ind < 3
                                ? <Chip label={skill}
                                        key={ind + "skill"}
                                        variant={"outlined"}
                                        className={classes.chip}
                                        style={{marginLeft: ind === 0? 0: 8}}/>
                                : ind === 3
                                ?
                                <Chip label={"еще " + (skills.length-3)}
                                      style={{backgroundColor: theme.colors.secondary, color: "#fff"}}
                                      onClick={this.handleOpen}
                                />
                                :null
                                  )}
                    </div>
                </div>
                <Profile info={info} open={isOpen} onClose={this.handleClose}/>

            </div>
        );
    }

}

export default withStyles(styles)(FreelancerCard);