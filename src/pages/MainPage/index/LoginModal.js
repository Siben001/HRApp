import React, {Component} from 'react';
import Social from "../../../asserts/socialNetworks.png";
import InputBase from "@material-ui/core/InputBase";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

class LoginModal extends Component {
  render() {
    return (
      <Card style={{width: 340}}>
        <CardHeader title={
          <div style={{
            marginRight: '1%',
            marginLeft: '6%',
          }}>
            <Button>Войти с помощью</Button>
            <Button>Регистрация</Button>
          </div>
        } style={{
          paddingBottom: 0
        }}>
        </CardHeader>
        <CardContent style={{
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: 0,
        }}>
          <img src={Social} style={{
            flexBasis: '80%',
            marginRight: '9%',
            marginLeft: '9%',
          }} alt={'Social'}/>
          <InputBase inputRef={(input) => {
            this.textInput = input
          }}
                     placeholder={'EMail или телефон'}
                     style={{
                       border: '2px solid #dedede',
                       borderRadius: 3,
                       flexBasis: '80%',
                       marginRight: '9%',
                       marginLeft: '9%',
                       margin: '5% 9% 5% 9%'
                     }}/>
          <InputBase inputRef={(input) => {
            this.textInput = input
          }}
                     placeholder={'Пароль'}
                     style={{
                       border: '2px solid #dedede',
                       borderRadius: 3,
                       flexBasis: '80%',
                       marginRight: '9%',
                       marginLeft: '9%',
                       margin: '0% 9% 0 9%'
                     }}/>
          <div style={{
            margin: '0% 9% 5% 9%',
          }}>
            <FormControlLabel control={<Checkbox/>}
                              label={'Запомнить'}/>
            <a style={{color: '#dedede'}} href={'/'}>Получить пароль</a>
          </div>
          <Button>Войти</Button>
        </CardContent>
      </Card>
    );
  }
}

export default LoginModal;