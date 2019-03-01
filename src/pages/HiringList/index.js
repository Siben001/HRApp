import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Header from "../global/Header";
import FreelancerList from "../global/FreelancerList";
import hr_list from "../../asserts/json/hr"
import interviewers_list from "../../asserts/json/interviewers"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import {theme} from "../global/style";
import {Divider, Typography} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Link from "react-router-dom/es/Link";
import Avatar from "@material-ui/core/Avatar";
import Notification from "./Notification";


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


class HiringList extends React.Component {

    state = {
        tab: 0,
        isNoti: false,
        showNoti: false,
        time: 0,
        timerId: null,
    };

    handleChange = (event, tab) => {
        this.setState({tab});
    };

    componentDidMount() {
        let timerId = setInterval(this.tick, 1000);
        this.setState({timerId})
    }

    tick = () => {
        const {time, timerId} = this.state;
        if(time<3) this.setState({time: time+1});
        else {
            this.setState({isNoti: true});
            clearTimeout(timerId)}
    };


    render() {
        const {classes} = this.props;
        const {tab, isNoti, showNoti} = this.state;

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Header isNoti={isNoti} onClickNoti={() => this.setState(state => ({showNoti: !state.showNoti}))}/>
                <Notification showNoti={showNoti}/>
                <Paper elevation={1} style={{borderRadius: 0, marginTop: '24px', width: '1200px'}}>
                    <Tabs value={tab} onChange={this.handleChange}>
                        <Tab label="HR"/>
                        <Tab label="Интервьюеры"/>
                    </Tabs>
                    {tab === 0 && <FreelancerList data={hr_list}/>}
                    {tab === 1 && <FreelancerList data={interviewers_list}/>}
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(HiringList);