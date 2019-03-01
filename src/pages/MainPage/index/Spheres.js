import React from 'react';
import {Typography, withStyles} from "@material-ui/core";
import Img1 from '../../../asserts/-e-image_1.png';
import Img2 from '../../../asserts/-e-image_2.png';
import Img3 from '../../../asserts/-e-image_3.png';
import Img4 from '../../../asserts/-e-image_4.png';
import Img5 from '../../../asserts/-e-image_5.png';
import Img6 from '../../../asserts/-e-image_6.png';
import Img7 from '../../../asserts/-e-image_7.png';
import Img8 from '../../../asserts/-e-image_8.png';
import Img9 from '../../../asserts/-e-image_9.png';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const data = [
  {
    desc: 'Информационные технологии',
    img: Img1,
  },
  {
    desc: 'Бухгалтерия, учет, финансы',
    img: Img2,
  },
  {
    desc: 'Маркетинг, реклама, PR',
    img: Img3,
  },
  {
    desc: 'Административный персонал',
    img: Img4,
  },
  {
    desc: 'Банки, инвестиции, лизинг',
    img: Img5,
  },
  {
    desc: 'Управление персоналом, тренинги',
    img: Img6,
  },
  {
    desc: 'Автомобильный бизнес',
    img: Img7,
  },
  {
    desc: 'Безопасность',
    img: Img8,
  },
  {
    desc: 'Высший менеджмент',
    img: Img9,
  },
];

const styles = () => ({
  container: {
    paddingTop: 50,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif !important',
  },
  header: {
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
  listItem: {
    flexBasis: '30%',
    flexGrow: 1,
  },
  cardContainer: {
    flexBasis: '30%',
    height: 130,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10
  },
  button: {
    backgroundColor: '#008489',
    color: '#fff',
    margin: '20px 0'
  }
});

class Spheres extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
          <Typography className={classes.header} variant={"h4"}>Сферы деятельности</Typography>
        <div className={classes.cardsContainer}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexBasis: '60%'
          }}>
            {data.map(item => {
              return (
                <Card className={classes.cardContainer}>
                  <CardContent
                    style={{margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <div style={{width: 60, height: 60, flexBasis: '100%'}}>
                      <img src={item.img} alt={item.desc}/>
                    </div>
                    <div style={{marginLeft: 60, marginTop: 30, flexBasis: '100%', alignText: 'left', width: 150}}>
                      <Typography variant={"subheading"}>{item.desc}</Typography>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
        <Button className={classes.button} variant={"outlined"}>Смотреть все сферы</Button>
      </div>
    )
  }
}


export default withStyles(styles)(Spheres);