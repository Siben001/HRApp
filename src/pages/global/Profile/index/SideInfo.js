import React from 'react';
import Button from '@material-ui/core/Button';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Slide from '@material-ui/core/Slide';
import {theme} from "../../style";
import FavoriteIcon from "@material-ui/icons/FavoriteBorder"
import {Divider, Typography} from "@material-ui/core";
import Link from "react-router-dom/es/Link";


class SideInfo extends React.Component {

    render() {
        const {open, onClose, info} = this.props;

        return (

            <div style={{flexBasis: '180px', display: 'flex', flexDirection: 'column', marginLeft: '24px'}}>
                <Button style={{
                    backgroundColor: theme.colors.primary,
                    color: "#fff",
                    marginBottom: '12px',
                }}
                >
                    Написать
                </Button>
                <Button variant={"outlined"} style={{marginBottom: '12px', height: "36px"}}>
                    <FavoriteIcon style={{marginRight: '8px'}}/>Сохранить</Button>
                <Button style={{height: "36px"}}>
                    <VisibilityOff style={{marginRight: '8px'}}/>Скрыть</Button>
                <Divider style={{margin: "30px 0"}}/>
                <Typography style={{
                    marginBottom: "30px",
                    lineHeight: '23px',
                    fontSize: '16px',
                    fontWeight: '500'
                }}
                >Занятость</Typography>
                <Typography>Более 30ч/нед</Typography>
                <Typography>Ответ в течении 3+ дней</Typography>
                <Divider style={{margin: "30px 0"}}/>
                <Typography style={{
                    marginBottom: "30px",
                    lineHeight: '23px',
                    fontSize: '16px',
                    fontWeight: '500'
                }}
                >Профили</Typography>
                <Typography>
                    GitHub: <span style={{color: theme.colors.secondary, textDecoration: "underline"}}>ссылка</span>
                </Typography>
                <Typography>
                    Habrahabr: <span style={{color: theme.colors.secondary, textDecoration: "underline"}}>ссылка</span>
                </Typography>
                <Divider style={{margin: "30px 0"}}/>
                <Typography style={{
                    marginBottom: "30px",
                    lineHeight: '23px',
                    fontSize: '16px',
                    fontWeight: '500'
                }}
                >Языки</Typography>
                <Typography>
                    <span style={{fontWeight: '500'}}>Английский:</span> Intermediate
                </Typography>
                <Typography>
                    <span style={{fontWeight: '500'}}>Немецкий:</span> Intermediate
                </Typography>
                <Typography>
                    <span style={{fontWeight: '500'}}>Русский:</span> Native
                </Typography>

            </div>


        );
    }
}

export default SideInfo;

