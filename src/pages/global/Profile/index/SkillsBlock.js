import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Divider, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {theme} from "../../style";
import Chip from "@material-ui/core/Chip";

const styles = () => ({

});



class SkillsBlock extends React.Component {


    render() {
        const {skills} = this.props;

        return (
            <Paper className={"paper"} style={{borderRadius: 0, marginTop: '30px', padding: 0}}>
                <div style={{backgroundColor: theme.colors.background, padding: '24px'}}>
                    <Typography variant={"h4"}>Навыки</Typography>
                </div>
                <Divider/>
                <div style={{padding: "24px"}}>
                    {skills.map((skill, ind) =>
                        <Chip label={skill}
                              variant={"outlined"}
                              key={ind + "skill"}
                              style={{margin: 8}}/>)
                    }
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(SkillsBlock);