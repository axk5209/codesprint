import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Result from "./Result"

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "80%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color = "default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Result 1" />
          <Tab label="Result 2" />
          <Tab label="Result 3" />
          <Tab label="Result 4" />
          <Tab label="Result 5"/>
          <Tab label="Result 6"  />
          <Tab label="Result 7" />
		  <Tab label="Result 8"  />
          <Tab label="Result 9"  />
          <Tab label="Result 10"  />
        </Tabs>
      </AppBar>
	  <br></br>
	  <br></br>
      {value === 0 && <Result result = {props.results[0]} setResults ={props.setResults}></Result>}
	  {value === 1 && <Result result = {props.results[1]} setResults ={props.setResults}></Result>}
	  {value === 2 && <Result result = {props.results[2]} setResults ={props.setResults}></Result>}
	  {value === 3 && <Result result = {props.results[3]} setResults ={props.setResults}></Result>}
	  {value === 4 && <Result result = {props.results[4]} setResults ={props.setResults}></Result>}
	  {value === 5 && <Result result = {props.results[5]} setResults ={props.setResults}></Result>}
	  {value === 6 && <Result result = {props.results[6]} setResults ={props.setResults}></Result>}
	  {value === 7 && <Result result = {props.results[7]} setResults ={props.setResults}></Result>}
	  {value === 8 && <Result result = {props.results[8]} setResults ={props.setResults}></Result>}
	  {value === 9 && <Result result = {props.results[9]} setResults ={props.setResults}></Result>}
	  <br></br>
	  <br></br>
    </div>
  );
}
