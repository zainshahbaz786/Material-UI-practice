import * as React from 'react';
//import ResponsiveAppBar from './Componenets/ResponsiveAppBar';
//import NavBar from './Componenets/Navbar';
//import MainPage from './Componenets/MainPage';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container  } from '@material-ui/core';
import Button from '@mui/material/Button';
import {buttonGroupClasses} from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import makeStyles from '@material-ui/styles/makeStyles';
// the best way to make styling in material ui is :-

const useStyles = makeStyles((theme) => ({
backgroundColor: theme.palette.background.paper,
padding: theme.spacing(8, 0, 6)


}));



const App = () => {
  // const buttons = [
  //   <Button color='primary' key="one">One</Button>,
  //   <Button key="two">Two</Button>,
  //   <Button key="three">Three</Button>,
  // ];

  return (
    <>
  {/* we use it as a wrapper */}
        <CssBaseline />
        <AppBar position = "relative" style={{display:"inline-block"}} > 
          <toolbar>
             <CameraIcon />
            <Typography variant = "h6">
              Photo Album
            </Typography>
          </toolbar>
        </AppBar>
        <main>
          {/* main componenets will be imposed here */}
            <div>
              <Container maxWidth = "sm" style={{marginTop:"100px"}}>
                <Typography variant = "h2" align="center" color = "textPrimary" gutterButtom>
                  Photo Album
                  <Typography variant = "h5" align="center" color = "textSecondary" paragraph>
                      Hello Everyone, This is a photo album and I'm trying to make this line as long as possible so that I can see how it looks like on the screen
                      {/* <buttonGroupClasses color="primary" aria-label="medium primary button group">
                       {buttons}
                      </buttonGroupClasses> */}
                      <div>
                        <Grid container spacing={2} justifyContent="center" >
                        <Grid item>
                            <Button variant="contained" color="primary">
                                Primary Action
                            </Button>
                            </Grid> 

                          <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary Action
                            </Button>
                            </Grid> 
                                
                        </Grid>
                      </div>

                  </Typography>

                </Typography>
              </Container>


            </div>
        </main>

    </>
  )
}

export default App