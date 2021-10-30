import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Grid from './components/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';
import  InstagramIcon from '@material-ui/icons/Instagram';
import  TrendingUpIcon from '@material-ui/icons/TrendingUp';
import  DocIcon from '@material-ui/icons/Description';
import  YoutubeIcon from '@material-ui/icons/YouTube';
import HttpIcon from '@material-ui/icons/Http'
import { Typography } from '@material-ui/core';
import { Document, Page } from 'react-pdf';

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
    alignItems: "center",
    justifyContent: "center",
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
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
          <Navbar/>
          <switch>
            <Route exact path="/">
            <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
              This is my website!
              </Typography>
              <Typography variant="h5" className={classes.bigSpace} color="primary">
              Welcome, this website is for uh...... Website
              </Typography>
              </div>
            <div className={`${classes.grid} ${classes.bigSpace}`}>
              <Grid icon={<GitHubIcon style={{fill: "#0", height:"125", width:"125"}}/>} title="My Github" btnTitle="Take me there!" link="/github"/>
              <Grid icon={<InstagramIcon style={{fill: "#bc2a8d", height:"125", width:"125"}}/>} title="@CameronJHarrison" btnTitle="Show me!" link="/insta"/>
              <Grid icon={<YoutubeIcon style={{fill: "#c4302b", height:"125", width:"125"}}/>} title="A cool video" btnTitle="(Banger)" link="/video"/>
            </div>
            <div className={`${classes.grid} ${classes.littleSpace}`}>
              <Grid icon={<DocIcon style={{fill: "#305ec2", height:"125", width:"125"}}/>} title="Resume" btnTitle="Show me More" link="/cv"/>
              <Grid icon={<TrendingUpIcon style={{fill: "#70d424", height:"125", width:"125"}}/>} title="Stonks" btnTitle="To the Moon!" link="/stonk"/>
              <Grid icon={<HttpIcon style={{fill: "#2EA09D", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
            </div>
            </Route>
            <Route path="/about">
              <div className={classes.wrapper}>
              <Typography variant="h4" className={classes.bigSpace} color="primary">
                I am become death destroyer of worlds
              </Typography>
              <Typography variant="h5" className={classes.littleSpace} color="primary">
                Something equally edgy, woohoo super lomg sentances to show off how cool this section of the website is i will continue typing for at least the next serveral chars
              </Typography>
              </div>
            </Route>
            <Route path="/blog">
              
            </Route>
            <Route path="/cv">
              <Document file="./Cameron_Resume" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </Route>
            <Route path="/contact">
              
            </Route>
            <Route path="/stonk">

            </Route>
            <Route path="/github" component={() => {window.location.href = 'https://github.com/cambo602';return null;}}></Route>
            <Route path="/insta" component={() => {window.location.href = 'https://www.instagram.com/cameronjharrison/';return null;}}></Route>
            <Route path="/video" component={() => {window.location.href = 'https://www.youtube.com/watch?v=ZEcqHA7dbwM&ab_channel=FrankSinatra-Topic';return null;}}></Route>
          </switch>
      </ThemeProvider>
    </div>
   </Router>
  );
}

export default App;
