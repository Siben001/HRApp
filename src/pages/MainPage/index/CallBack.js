import React, {Component} from 'react';
import {Checkbox, FormControlLabel, InputBase, InputLabel, Typography, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = () => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fa324f',
    height: 150,
    color: '#f9f9f9'
  },
  center: {
    display: 'flex',
    justifyContent: 'space-around',
    flexBasis: '100%',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    flexBasis: '50%',
    flexWrap: 'wrap'
  },
  itemContainer: {
    display: 'flex',
    flexBasis: '50%'
  },
  headlineText: {
    fontWeight: 'bald',
    width: 400,
    alignText: 'left'
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 3,
  },
  checkbox: {
    color: '#f9f9f9',
    '&$checked': {
      color: '#f9f9f9',
    }
  },
  ccc: {}
});

class CallBack extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.center}>
          <div className={classes.itemContainer}>
            <div className={classes.item}>
              <Typography color={"inherit"}
                          variant={"h4"}>Появились вопросы?</Typography>
              <Typography color={"inherit"}
                          className={classes.headlineText}
                          variant={"caption"}>Оставьте ваш номер телефона и наш специалист свяжется с вами, чтобы
                ответить на ваши вопросы</Typography>
            </div>
            <div className={classes.item} style={{marginTop: 5}}>
              <InputBase className={classes.input} inputRef={(input) => {
                this.textInput = input
              }} placeholder={'Телефон'}/>
              <Button color={"inherit"} variant={"outlined"}>Получить консультацию</Button>
              <FormControlLabel control={<Checkbox color={"default"} classes={{root: classes.checkbox}}/>}
                                label={<Typography style={{color: '#f9f9f9'}} variant={"caption"}>
                                  Я согласен с условиями обработки персональных данных
                                </Typography>}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CallBack);