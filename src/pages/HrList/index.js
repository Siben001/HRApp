import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Header from "../global/Header";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import {Divider, InputBase} from "@material-ui/core";
import FreelancerCard from "../global/FreelancerCard";


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
    divider: {
        height: 28,
        width: 1,
        margin: 4,
    },
    searchBar: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: 0,
    },

});


class HrList extends React.Component {

    state = {

    }


    render() {
        const {classes} = this.props;

        const text = "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
        const skills = ["Python", "Java", "React.js", "Javascript"]
        const hr_list = [
            {name: "Вася", lastname: "П."},
            {name: "Маша", lastname: "Д."},
            {name: "Петя", lastname: "В."},
        ]
        const hr_internal = JSON.parse(JSON.stringify(hr_list));

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Header/>
                <Paper elevation={1} style={{borderRadius: 0, marginTop: '24px', width: '1200px'}}>
                    <div style={{display: 'flex', backgroundColor: '#F9F9F9', padding: '24px'}}>
                        <Paper className={classes.searchBar}>
                            <InputBase style={{flexGrow: 1}} placeholder={"Поиск"}/>
                            <Divider className={classes.divider}/>
                            <SearchIcon/>
                        </Paper>
                        <Button style={{marginLeft: '24px', backgroundColor: '#fff', borderRadius: 0}} variant={"contained"}>
                            <FilterIcon style={{marginRight: '4px'}}/>
                            Фильтры
                        </Button>
                    </div>
                    {hr_internal.slice().map(hr => <FreelancerCard info={hr}/>)}
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(HrList);