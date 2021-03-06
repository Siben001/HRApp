import Logo from "../../asserts/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import Header from "../../asserts/image_header.png";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoginModal from "./index/LoginModal";
import {withStyles} from "@material-ui/core";
import Spheres from "./index/Spheres";
import GrayStrip from "./index/GrayStrip";
import HowItWorks from "./index/HowItWorks";
import WhoAmI from "./index/WhoAmI";
import CallBack from "./index/CallBack";
import Articles from "./index/Articles";
import About from "./index/About";
import Some from '../../asserts/1.png';

const styles = () => ({
  root: {
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif !important',
  }
});

class MainPage extends React.Component {

  render() {
    const {classes} = this.props;
    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <AppBar elevation={0} position={"sticky"} color={"#fff"} style={{display: 'flex', justifyContent: 'center'}}>
            <Toolbar style={{
              width: 1200,
              marginRight: '12%',
              marginLeft: '12%',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                height: 40,
                width: 40,
                marginLeft: 30,
                marginRight: 100,
                padding: 5
              }}>
                <img src={Logo} style={{
                  height: 40,
                  objectFit: 'contain',
                }} alt={'Logo'}/>
              </div>
              <div style={{
                border: '2px solid #dedede',
                height: 35,
                borderRadius: 2,
                flexBasis: '20%',
                marginRight: 50,
                alignItems: 'center',
                display: 'flex',
                flexWrap: 'wrap'
              }}>
                <SearchIcon style={{flexBasis: '9%'}}/>
                <input ref={(input) => {
                  this.textInput = input;
                }} style={{
                  flexBasis: '90%',
                  height: '95%',
                  fontSize: '100%',
                  border: 'none'
                }} placeholder={'Поиск'}/>
              </div>
              <Button variant={"text"}>Как это работает</Button>
              <Button variant={"text"}>Поддержка</Button>
              <Button variant={"text"}>Зарегистрироваться</Button>
              <Button variant={"text"}>Войти</Button>
            </Toolbar>
            <div style={{
              height: 350,
              width: '100%',
              backgroundImage: `url(${Header})`,
              backgroundSize: 'cover',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{
                marginRight: 120
              }}>
                <Typography variant={"h3"} style={{
                  width: 400,
                  alignText: 'left',
                  color: '#494949',
                  marginBottom: 50,
                }}><b>Мы работаем пока вы спите</b></Typography>
                <Button style={{
                  width: 220,
                  marginRight: 10
                }} variant={"contained"} color={"secondary"}>Разместить вакансию</Button>
                <Button style={{
                  width: 220,
                  marginLeft: 10
                }} variant={"contained"} color={"default"}>Разместить резюме</Button>
              </div>
              <LoginModal/>
            </div>
            <GrayStrip/>
            <Spheres/>
            <img src={Some} alt={'1'} style={{
              objectFit: 'contain',
            }}/>
            {/*<HowItWorks/>*/}
            <WhoAmI/>
            <CallBack/>
            <Articles/>
            <About/>
          </AppBar>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MainPage);