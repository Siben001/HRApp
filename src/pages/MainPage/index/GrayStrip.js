import React, {Component} from 'react';
import FirstImage from "../../../asserts/Forma 1.png";
import SecondImage from "../../../asserts/Forma 2.png";
import ThirdImage from "../../../asserts/Forma 3.png";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

const styles = () => ({
  container: {
    height: 100,
    backgroundColor: '#494949',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemContainer: {
    display: 'flex',
    margin: '0 20px',
    justifyContent: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 30
  },
  text: {
    width: 200,
    alignText: 'left',
    color: '#f9f9f9'
  },
});

class GrayStrip extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.itemContainer}>
          <img className={classes.image} src={FirstImage} alt={'first image'}/>
          <Typography className={classes.text} variant={"subheading"}>Первое из трех наших преимуществ</Typography>
        </div>
        <div className={classes.itemContainer}>
          <img className={classes.image} src={SecondImage} alt={'second image'}/>
          <Typography className={classes.text} variant={"subheading"}>Второе из трех наших преимуществ</Typography>
        </div>
        <div className={classes.itemContainer}>
          <img className={classes.image} src={ThirdImage} alt={'first image'}/>
          <Typography className={classes.text} variant={"subheading"}>Третье из трех наших преимуществ</Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles) (GrayStrip);