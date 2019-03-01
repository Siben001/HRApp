import React, {Component} from 'react';
import {Card, CardContent, Typography, withStyles} from "@material-ui/core";
import First from '../../../asserts/article1.jpg';
import Second from '../../../asserts/article2.jpg';
import Third from '../../../asserts/article3.jpg';
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
    flexBasis: '30%',
    boxShadow: 'none'
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0
  },
  caption: {
    margin: '10px 0',
    fontWeight: 'bold',
    width: '100%',
    alignText: 'left'
  }
});

class Articles extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.text}>
          <Typography style={{color: '#494949', fontWeight: 'bold'}} variant={"h3"}>Интересно знать</Typography>
        </div>
        <div className={classes.cardsContainer}>
          <div className={classes.cards}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/'}>
                    <img className={classes.image} src={First} alt={'company'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"subheading"}>Сколько у нас фрилансеров и где они работают </Typography>
                </div>
                <Typography variant={"caption"}>
                  Оказалось, что среди работающих соискателей 31% работает удалённо. Из них 14% — фрилансеры и 17% —
                  удаленные сотрудники в штате компаний.
                  <Link to={'/'}>Подробнее</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/'}>
                    <img className={classes.image} src={Second} alt={'HR'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"subheading"}>Стойка на руках и губы уточкой: как выбрать фото для
                    резюме</Typography>
                </div>
                <Typography variant={"caption"}>
                  Обязательно ли загружать фото? Зачем, если желаемая должность не связана с презентационными функциями?
                  Как рекрутеры относятся к резюме без фотографий?
                  <Link to={'/'}>Подробнее</Link>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <div>
                  <Link to={'/'}>
                    <img className={classes.image} src={Third} alt={'Interviewer'}/>
                  </Link>
                </div>
                <div className={classes.caption}>
                  <Typography variant={"subheading"}>«HR-перезагрузка» неизбежна</Typography>
                </div>
                <Typography variant={"caption"}>
                  В 62% резюме, размещенных на hh.ru HR-специалистами из России, указан ключевой навык управления
                  персоналом. В каждом третьем — учет кадров. В каждом четвертом — развитие персонала и рекрутмент.
                  <Link to={'/'}>Подробнее</Link>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Articles);