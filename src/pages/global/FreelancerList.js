import React from "react";
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterIcon from '@material-ui/icons/FilterList';
import Button from "@material-ui/core/Button";
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


class FreelancerList extends React.Component {

    state = {
        page: 0,
        rowsPerPage: 5,
    };

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({page: 0, rowsPerPage: event.target.value});
    };


    render() {
        const {classes, data} = this.props;
        const {page, rowsPerPage} = this.state;

        const internal_list = JSON.parse(JSON.stringify(data));

        return (
            <div>
                <div style={{display: 'flex', backgroundColor: '#F9F9F9', padding: '24px 48px'}}>
                    <Paper className={classes.searchBar}>
                        <InputBase style={{flexGrow: 1}} placeholder={"Поиск"}/>
                        <Divider className={classes.divider}/>
                        <SearchIcon/>
                    </Paper>
                    <Button style={{marginLeft: '24px', backgroundColor: '#fff', borderRadius: 0}}
                            variant={"contained"}>
                        <FilterIcon style={{marginRight: '4px'}}/>
                        Фильтры
                    </Button>
                </div>
                <Divider/>
                {internal_list.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(freelancer =>
                    <div>
                        <FreelancerCard info={freelancer}/><
                        Divider/>
                    </div>)}
                <div style={{display: 'flex'}}>
                    <div style={{flexGrow: 1}}/>
                    <TablePagination
                        count={internal_list.length}
                        onChangePage={this.handleChangePage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        labelRowsPerPage={"Строк на странице"}
                        rowsPerPageOptions={[5]}
                        labelDisplayedRows={({from, to, count}) => `${from}-${to} из ${count}`}
                    />
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(FreelancerList);