import Logo from "../../asserts/logo_toolbar.png";
import SearchIcon from "@material-ui/icons/Search";
import Header from "../../asserts/header_img.png";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LoginModal from "./index/LoginModal";

class MainPage extends React.Component{

  render() {

    return (
      <div>
        <AppBar elevation={0} position={"sticky"} color={"default"}>
          <Toolbar style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img src={Logo} style={{marginRight: 30}} alt={'Logo'}/>
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
        </AppBar>
        <div style={{
          height: 350,
          width: '100%',
          backgroundImage: `url(${Header})`,
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div>
            <Typography variant={"h3"}><b>Работа найдется для каждого</b></Typography>
          </div>
          <LoginModal/>
        </div>
      </div>
    )
  }
}

export default MainPage;