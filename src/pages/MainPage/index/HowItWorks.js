import React, {Component} from 'react';
import {Typography, withStyles} from "@material-ui/core";

const styles = () => ({
  container: {
    backgroundColor: '#c9c9c9',
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#494949',
    flexWrap: 'wrap',
    fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif !important',
  },
});

class HowItWorks extends Component {
  render() {
    const {classes} = this.props;
    const divider = <div style={{display: 'flex'}}>
      <div style={{
        height: '5px',
        width: '5px',
        borderRadius: '50%',
        margin: 16,
        backgroundColor: "#fff"
      }}/>
      <div style={{height: '5px', width: '5px', borderRadius: '50%', margin: 16, backgroundColor: "#fff"}}/>
      <div style={{height: '8px', width: '8px', borderRadius: '50%', margin: 15, backgroundColor: "#fa324f"}}/>
      <div style={{height: '5px', width: '5px', borderRadius: '50%', margin: 16, backgroundColor: "#fff"}}/>
      <div style={{
        height: '5px',
        width: '5px',
        borderRadius: '50%',
        margin: 16,
        backgroundColor: "#fff"
      }}/>
    </div>;

    return (
      <div className={classes.container}>
        <div style={{
          color: '#494949',
          fontWeight: 'bold',
          marginTop: 40,
          marginBottom: 40
        }}>
          <Typography style={{color: '#494949', fontWeight: 'bold'}} color={"inherit"} variant={"h3"}>Как это работает</Typography>
        </div>
        <div style={{
          flexBasis: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div style={{
            flexBasis: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 180
          }}>
            <div
              style={{
                height: '90px',
                width: '90px',
                borderRadius: '50%',
                backgroundColor: "#fff",
                textAlign: 'center'
              }}>
              <Typography style={{fontSize: "60px"}}>1</Typography>
              <div style={{marginLeft: 20}}>
                <Typography variant={"subheading"}
                            color={"inherit"}
                            style={{
                              width: 120,
                              textAlign: 'center',
                              marginLeft: -30,
                              marginTop: 20
                            }}>Первый этап</Typography>
                <Typography variant={"caption"}
                            color={"inherit"}
                            style={{
                              width: 150,
                              marginLeft: -30,
                              textAlign: 'left',
                              marginTop: 20
                            }}>записанную в студии с отличным качеством видео и звука</Typography>
              </div>
            </div>
            {divider}
            <div
              style={{
                height: '90px',
                width: '90px',
                borderRadius: '50%',
                backgroundColor: "#fff",
                textAlign: 'center'
              }}>
              <Typography style={{fontSize: "60px"}}>2</Typography>
              <div style={{marginLeft: 20}}>
                <Typography variant={"subheading"}
                            color={"inherit"}
                            style={{
                              width: 120,
                              textAlign: 'center',
                              marginLeft: -30,
                              marginTop: 20
                            }}>Второй этап</Typography>
                <Typography variant={"caption"}
                            color={"inherit"}
                            style={{
                              width: 150,
                              marginLeft: -30,
                              textAlign: 'left',
                              marginTop: 20
                            }}>записанную в студии с отличным качеством видео и звука</Typography>
              </div>
            </div>
            {divider}
            <div
              style={{
                height: '90px',
                width: '90px',
                borderRadius: '50%',
                backgroundColor: "#fff",
                textAlign: 'center'
              }}>
              <Typography style={{fontSize: "60px"}}>3</Typography>
              <div style={{marginLeft: 20}}>
                <Typography variant={"subheading"}
                            color={"inherit"}
                            style={{
                              width: 120,
                              textAlign: 'center',
                              marginLeft: -30,
                              marginTop: 20
                            }}>Третий этап</Typography>
                <Typography variant={"caption"}
                            color={"inherit"}
                            style={{
                              width: 150,
                              marginLeft: -30,
                              textAlign: 'left',
                              marginTop: 20
                            }}>записанную в студии с отличным качеством видео и звука</Typography>
              </div>
            </div>
            {divider}
            <div
              style={{
                height: '90px',
                width: '90px',
                borderRadius: '50%',
                backgroundColor: "#fff",
                textAlign: 'center'
              }}>
              <Typography style={{fontSize: "60px"}}>4</Typography>
              <div style={{marginLeft: 20}}>
                <Typography variant={"subheading"}
                            color={"inherit"}
                            style={{
                              width: 120,
                              textAlign: 'center',
                              marginLeft: -30,
                              marginTop: 20
                            }}>Четвертый этап</Typography>
                <Typography variant={"caption"}
                            color={"inherit"}
                            style={{
                              width: 150,
                              marginLeft: -30,
                              textAlign: 'left',
                              marginTop: 20
                            }}>записанную в студии с отличным качеством видео и звука</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HowItWorks);