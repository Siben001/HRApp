import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Divider, Table, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {theme} from "../../style";
import Chip from "@material-ui/core/Chip";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";

const styles = () => ({});


class SkillsBlock extends React.Component {


    render() {
        const {tests} = this.props;

        return (
            <Paper className={"paper"} style={{borderRadius: 0, marginTop: '30px', padding: 0}}>
                <div style={{backgroundColor: theme.colors.background, padding: '24px'}}>
                    <Typography variant={"h4"}>Тесты</Typography>
                </div>
                <Divider/>
                <div style={{padding: "0 24px 24px 24px"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell align="center">Балл</TableCell>
                                <TableCell />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tests.map((test, ind) => (
                                <TableRow key={"test" + ind}>
                                    <TableCell>{test.name}</TableCell>
                                    <TableCell align="center">{test.score}</TableCell>
                                    <TableCell align="center">
                                        <Typography style={{color: theme.colors.primary}}>Подробнее</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(SkillsBlock);