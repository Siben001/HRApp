import React, {Component} from 'react';
import {Card, CardContent, Typography, withStyles} from "@material-ui/core";
import HR from '../../../asserts/ic-hr@3x.png';
import Company from '../../../asserts/ic@3x.png';
import Interviewer from '../../../asserts/ic_2@3x.png';
import {Link} from "react-router-dom";

const styles = () => ({
  container: {
    paddingTop: 50,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif !important',
    marginBottom: 50
  },
  text: {
    color: '#494949',
    fontWeight: 'bold',
    marginBottom: 40
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
    justifyContent: 'space-between',
    flexBasis: '50%'
  },
  card: {
    flexBasis: '30%'
  },
  image: {
    width: 138,
    height: 162,
    objectFit: 'contain',
  },
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  caption: {
    margin: '10px 0'
  }
});

class WhoAmI extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography variant={"h3"}>Кто я?</Typography>
        </div>
        <div className={classes.cardsContainer}>
          <div className={classes.cards}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/new_deal'}>
                    <img className={classes.image} src={Company} alt={'company'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"h6"}>Работодатель</Typography>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/'}>
                    <img className={classes.image} src={HR} alt={'HR'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"h6"}>HR-специалист</Typography>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/'}>
                    <img className={classes.image} src={Interviewer} alt={'Interviewer'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"h6"}>Интервьюер</Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WhoAmI);