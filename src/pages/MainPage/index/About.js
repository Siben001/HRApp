import React, {Component} from 'react';
import {Divider, Typography, withStyles} from "@material-ui/core";

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f9f9f9',
    backgroundColor: '#494949',
    height: 220,
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif !important',
  },
  cardsContainer: {
    flexBasis: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexBasis: '51%'
  },
  card: {
    flexBasis: '30%'
  }
});

class About extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.cardsContainer}>
          <div className={classes.cards}>
            <div className={classes.card}>
              <Typography color={"inherit"}  color="inherit"variant={"h5"}>Работодателям</Typography>
              <Typography color={"inherit"}>Прайс-лист</Typography>
              <Typography color={"inherit"}>Производственный календарь</Typography>
              <Typography color={"inherit"}>HR-Digital</Typography>
              <Typography color={"inherit"}>Условия оказания услуг</Typography>
              <Typography color={"inherit"}>Условия использования Сайтов</Typography>
            </div>
            <div className={classes.card} style={{
              paddingBottom: 10
            }}>
              <Typography color={"inherit"} variant={"h5"}>HR специалистам</Typography>
              <Typography color={"inherit"}>Прайс-лист</Typography>
              <Typography color={"inherit"}>Продвижение резюме</Typography>
              <Typography color={"inherit"}>Работа в других городах</Typography>
              <Typography color={"inherit"} variant={"h5"}>Интервьюерам</Typography>
              <Typography color={"inherit"}>Удаленная работа</Typography>
            </div>
          </div>
          <div className={classes.cards} style={{
            paddingTop: 10,
            borderTop: '1px solid #f9f9f9'
          }}>
            <div className={classes.card}>
              <Typography color={"inherit"}>©2019 HRApp team</Typography>
            </div>
            <div className={classes.card}>
              <Typography color={"inherit"}>Все права защищены</Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);