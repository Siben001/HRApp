import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Header from "../global/Header";
import hr_list from "../../asserts/json/hr"
import interviewers_list from "../../asserts/json/interviewers"
import Paper from "@material-ui/core/Paper";
import FreelancerCard from "../global/FreelancerCard";
import {Divider, Typography} from "@material-ui/core";
import {theme} from "../global/style";
import Button from "@material-ui/core/Button";


const styles = () => ({
    row: {
        display: 'flex',
    },
    col1: {
        flexGrow: 1,
    },
    col2: {
        flexBasis: '150px',
        minWidth: '150px',
        maxWidth: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '1px',
        borderLeft: '1px solid rgba(0,0,0,0.12)'
    }

});


class Offer extends React.Component {

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
        if (time < 3) this.setState({time: time + 1});
        else {
            this.setState({isNoti: true});
            clearTimeout(timerId)
        }
    };


    render() {
        const {classes, budget, duration, amount, region} = this.props;
        const row = (info, salary, time) => <div>
            <div className={classes.row}>
                <div className={classes.col1}>
                    {info ? <FreelancerCard info={info}/> : null}
                </div>
                <div className={classes.col2}><Typography variant={"h5"}>{time}</Typography></div>
                <div className={classes.col2}><Typography variant={"h5"}>{salary}</Typography></div>
            </div>
            <Divider/>
        </div>;

        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Header/>
                <Paper elevation={1} style={{borderRadius: 0, marginTop: '24px', width: '1200px'}}>
                    <div style={{backgroundColor: theme.colors.background, padding: '24px 48px'}}>
                        <Typography variant={"h4"}>Предложение</Typography>
                    </div>
                    <div style={{padding: "24px 48px", display: 'flex', width: '100%'}}>
                        <div style={{display: 'flex', flexGrow: 1}}>
                            <div style={{flexBasis: '250px', display: 'flex', flexDirection: 'column'}}>
                                <Typography style={{
                                    fontSize: "18px",
                                    margin: '8px 0',
                                    minHeight: '30px',
                                    color: theme.colors.primary
                                }}>Бюджет</Typography>
                                <Typography style={{
                                    fontSize: "18px",
                                    margin: '8px 0',
                                    minHeight: '30px',
                                    color: theme.colors.primary
                                }}>Срок</Typography>
                            </div>
                            <div style={{flexBasis: '200px', display: 'flex', flexDirection: 'column'}}>
                                <Typography style={{margin: '8px 0', minHeight: '30px'}}> {budget}</Typography>
                                <Typography style={{margin: '8px 0', minHeight: '30px'}}> {duration}</Typography>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexGrow: 1}}>
                            <div style={{flexBasis: '250px', display: 'flex', flexDirection: 'column'}}>
                                <Typography style={{
                                    fontSize: "18px",
                                    margin: '8px 0',
                                    minHeight: '30px',
                                    color: theme.colors.primary
                                }}>Кол-во кандидатов</Typography>
                                <Typography style={{
                                    fontSize: "18px",
                                    margin: '8px 0',
                                    minHeight: '30px',
                                    color: theme.colors.primary
                                }}>Регион</Typography>
                            </div>
                            <div style={{flexBasis: '200px', display: 'flex', flexDirection: 'column'}}>
                                <Typography style={{margin: '8px 0', minHeight: '30px'}}> {amount}</Typography>
                                <Typography style={{margin: '8px 0', minHeight: '30px'}}> {region}</Typography>
                            </div>
                        </div>
                    </div>
                    <Divider/>
                    <div className={classes.row}>
                        <div className={classes.col1}/>
                        <div className={classes.col2}><Typography style={{fontSize: '16px'}}>Сроки</Typography></div>
                        <div className={classes.col2}><Typography style={{fontSize: '16px'}}>Сумма</Typography></div>
                    </div>
                    <Divider/>
                    <Typography variant={"h5"}
                                style={{color: theme.colors.secondary, padding: '12px 48px'}}>HR</Typography>
                    <Divider/>
                    {row(hr_list[3], "50т.р", "1 месяц")}
                    <Typography variant={"h5"}
                                style={{color: theme.colors.secondary, padding: '12px 48px'}}>Интервьюверы</Typography>
                    <Divider/>
                    {row(interviewers_list[0], "20т.р", "1 месяц")}
                    {row(interviewers_list[2], "30т.р", "1 месяц")}
                    <div style={{display: 'flex'}}>
                        <div className={classes.col1} style={{padding: '24px 48px'}}>
                            <Typography variant={"h5"}>Итого</Typography>
                        </div>
                        <div className={classes.col2} style={{padding: '24px 0px'}}>
                            <Typography variant={"h5"}>1 месяц</Typography>
                        </div>
                        <div className={classes.col2} style={{padding: '24px 0px'}}>
                            <Typography variant={"h5"}>100т.р</Typography>
                        </div>
                    </div>
                </Paper>
                <div style={{display: "flex", margin: "24px 0", width: '1200px', justifyContent: 'flex-end'}}>
                    <Button variant={"outlined"} style={{marginRight: '12px'}}>Обсудить</Button>
                    <Button variant={"outlined"} style={{marginRight: '12px'}}>Отказаться</Button>
                    <Button style={{backgroundColor: theme.colors.secondary, color: "#fff"}}>Согласиться</Button>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(Offer);