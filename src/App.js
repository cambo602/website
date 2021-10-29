import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Link, Route, BrowserRouter as Router} from 'react-router-dom';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Grid from './components/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';
import  InstagramIcon from '@material-ui/icons/Instagram';
import  TrendingUpIcon from '@material-ui/icons/TrendingUp';
import  ImportExportIcon from '@material-ui/icons/ImportExport';
import  ComputerIcon from '@material-ui/icons/Computer';
import  HttpIcon from '@material-ui/icons/Http';

const styles = makeStyles({
  wrapper: {
  width: "65%",
  margin: "auto",
  textAlign: "center"
},
bigSpace: {
  marginTop: "5rem"
},
littleSpace: {
  marginTop: "2.5rem"
},
grid: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
},
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: { 
      fontWeight: 600,
      fonstSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2em',
    },
  }
});

function App() {
  const classes = styles();
  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
          <Navbar/>
          <switch>
            <Route exact path="/">
            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Grid icon={<GitHubIcon style={{fill: "#0", height:"125", width:"125"}}/>} title="My Github" btnTitle="Take me there!" link="https://github.com/cambo602"/>
              <Grid icon={<InstagramIcon style={{fill: "#bc2a8d", height:"125", width:"125"}}/>} title="@CameronJHarrison" btnTitle="Show me!" link="https://www.instagram.com/cameronjharrison/"/>
              <Grid icon={<TrendingUpIcon style={{fill: "#70d424", height:"125", width:"125"}}/>} title="Stonks" btnTitle="WIP"/>
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
              <Grid icon={<ImportExportIcon style={{fill: "#5EA780", height:"125", width:"125"}}/>} title="Modular" btnTitle="Show me More"/>
              <Grid icon={<ComputerIcon style={{fill: "#E69426", height:"125", width:"125"}}/>} title="Multi-Platform" btnTitle="Show me More"/>
              <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
            </div>
            </Route>
            <Route path="/about">

            </Route>
            <Route path="/blog">
              
            </Route>
            <Route path="/cv">
              
            </Route>
            <Route path="/contact">
              
            </Route>
          </switch>
      </ThemeProvider>
    </div>
   </Router>
  );
}

export default App;
