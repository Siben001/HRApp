import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Header from "../global/Header";
import FreelancerList from "../global/FreelancerList";
import hr_list from "../../asserts/json/hr"
import interviewers_list from "../../asserts/json/interviewers"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";


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
    };

    handleChange = (event, tab) => {
        this.setState({tab});
    };


    render() {
        const {classes} = this.props;
        const {tab} = this.state;

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Header/>
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