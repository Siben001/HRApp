import React, {Component} from 'react';
import {
  Avatar, Button, CardActions,
  CardContent,
  CardHeader, Checkbox,
  FormControlLabel, InputBase,
  LinearProgress,
  Typography,
  withStyles
} from "@material-ui/core";
import Header from "../global/Header";
import Card from "@material-ui/core/Card";

const styles = () => ({
  pageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 50
  },
  card: {
    flexBasis: '100%',
    margin: '0 15%'
  },
  cardContent: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    flexBasis: '40%',
    margin: '0 50px'
  },
  buttons: {
    width: 100,
    margin: '0 30px'
  },
  input: {
    border: '2px solid grey',
    margin: '10px 0',
    borderRadius: 3,
    flexBasis: '100%',
  }
});

class DealConstructor extends Component {
  state = {
    step: 25,
  };

  render() {
    const {classes, budget, amount, duration, region, comment, dealParamsAdded} = this.props;
    return (
      <div>
        <Header/>
          <LinearProgress variant={"determinate"} style={{height:20}} value={this.state.step} color={'secondary'}/>
          <div className={classes.pageContainer}>
            <Card className={classes.card} style={this.state.step === 25 ? {} : {display: 'none'}}>
              <CardHeader avatar={<Avatar>1</Avatar>}
                          title={<Typography variant={"subheading"}>Сфера деятельности</Typography>}/>
              <CardContent className={classes.cardContent}>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Информационные технологии</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Бухгалтерия, учет, финансы</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Маркетинг, реклама, PR</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Административный персонал</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Банки, инвестиции, лизинг</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Управление персоналом, тренинги</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Автомобильный бизнес</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Безопасность</Typography>}/>
                <FormControlLabel className={classes.item}
                                  control={<Checkbox/>}
                                  label={<Typography variant={'subheading'}>Высший менеджмент</Typography>}/>
              </CardContent>
              <CardActions style={{justifyContent: 'flex-end'}}>
                <Button className={classes.buttons} onClick={() => this.setState({step: 50})}>Далее</Button>
              </CardActions>
            </Card>
            <Card className={classes.card} style={this.state.step === 50 ? {} : {display: 'none'}}>
              <CardHeader avatar={<Avatar>2</Avatar>}
                          title={<Typography variant={"subheading"}>Специализация</Typography>}/>
              <CardContent className={classes.cardContent}>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>WEB</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>iOS</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Android</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Администрирование</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>DevOps</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Full stack</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Разработка игр</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Безопасность</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Backend</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>BigData</Typography>}/>
              </CardContent>
              <CardActions style={{justifyContent: 'flex-end'}}>
                <Button className={classes.buttons} onClick={() => this.setState({step: 25})}>Назад</Button>
                <Button className={classes.buttons} onClick={() => this.setState({step: 75})}>Далее</Button>
              </CardActions>
            </Card>
            <Card className={classes.card} style={this.state.step === 75 ? {} : {display: 'none'}}>
              <CardHeader avatar={<Avatar>3</Avatar>}
                          title={<Typography variant={"subheading"}>Мне требуется</Typography>}/>
              <CardContent className={classes.cardContent}>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Специальст HR</Typography>}/>
                <FormControlLabel className={classes.item} control={<Checkbox/>} label={<Typography variant={'subheading'}>Интервьюер</Typography>}/>
              </CardContent>
              <CardActions style={{justifyContent: 'flex-end'}}>
                <Button className={classes.buttons} onClick={() => this.setState({step: 50})}>Назад</Button>
                <Button className={classes.buttons} onClick={() => this.setState({step: 100})}>Далее</Button>
              </CardActions>
            </Card>
            <Card className={classes.card} style={this.state.step === 100 ? {} : {display: 'none'}}>
              <CardHeader avatar={<Avatar>4</Avatar>}
                          title={<Typography variant={"subheading"}>Параметры</Typography>}/>
              <CardContent className={classes.cardContent}>
                <InputBase  className={classes.input} value={budget} onChange={dealParamsAdded('budget')} placeholder={'Бюджет'}/>
                <InputBase className={classes.input} value={amount} onChange={dealParamsAdded('amount')} placeholder={'Сколько человек'}/>
                <InputBase className={classes.input} value={duration}  onChange={dealParamsAdded('duration')} placeholder={'Срок'}/>
                <InputBase className={classes.input} value={region}  onChange={dealParamsAdded('region')} placeholder={'Регион'}/>
                <InputBase className={classes.input} multiline rows={5} value={comment}  onChange={dealParamsAdded('comment')} placeholder={'Коментарий'}/>
              </CardContent>
              <CardActions style={{justifyContent: 'flex-end'}}>
                <Button className={classes.buttons} onClick={() => this.setState({step: 75})}>Назад</Button>
                <Button className={classes.buttons} >Сохранить</Button>
              </CardActions>
            </Card>
          </div>
      </div>
    );
  }
}

export default withStyles(styles)(DealConstructor);