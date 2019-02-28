import React from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import {theme} from "../global/style"

const styles = () => ({
    achieveBlock: {
        width: '174px',
        padding: '0 12px,'
    },
});


class Rating extends React.Component {

    render() {
        const {rating} = this.props;

        return (
            <div style={{width: '150px', maxWidth: '150px', minWidth: '150px', height: '4px', backgroundColor: theme.colors.background}}>
                <div style={{width: rating * 1.5, height: '4px', backgroundColor: theme.colors.secondary}}/>
            </div>

        );
    }
}

export default withStyles(styles)(Rating);