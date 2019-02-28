import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MainProfileInfo from "./index/MainProfileInfo";
import {theme} from "../style";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder"

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class Profile extends React.Component {

    render() {
        const {open, onClose, info} = this.props;

        return (
                <Dialog
                    open={open}
                    PaperProps={{
                        style: {
                            width: '1300px',
                            maxWidth: '1300px',
                            margin: 0,
                            height: '100%',
                            maxHeight: '100vh',
                            borderRadius: 0
                        }
                    }}
                    TransitionComponent={Transition}
                    TransitionProps={{style: {justifyContent: 'flex-end'}}}
                    keepMounted
                    onClose={onClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                        <DialogContentText id="alert-dialog-slide-description">
                            <div style={{display: 'flex'}}>
                                <div style={{flexBasis: '800px'}}>
                            <MainProfileInfo info={info}/>
                                </div>
                                <div style={{flexBasis: '220px', display: 'flex', flexDirection: 'column', marginLeft: '24px'}}>
                                    <Button style={{
                                        backgroundColor: theme.colors.primary,
                                        color: "#fff",
                                        marginBottom: '12px',
                                    }}
                                    >
                                        Написать
                                    </Button>
                                    <Button variant={"outlined"}><FavoriteIcon style={{marginRight: '8px'}}/>Сохранить</Button>
                                </div>
                                <div style={{flexGrow: '1'}}/>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

        );
    }
}

export default Profile;


//getListHRs