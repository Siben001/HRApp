import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import MainProfileInfo from "./Profile/MainProfileInfo";

function Transition(props) {
    return <Slide direction="left" {...props} />;
}

class Profile extends React.Component {

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={this.state.open}
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
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent style={{backgroundColor: 'rgba(0,0,0,0.08)'}}>
                        <DialogContentText id="alert-dialog-slide-description">
                            <MainProfileInfo/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default Profile;