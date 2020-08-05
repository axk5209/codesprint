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
  },
  tabs: {
	border: `1px solid ${theme.palette.divider}`
  }
}));

export default function ScrollableTabsButtonAuto(props) {
	console.log(props)
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getColor(result) {
	  if (result === null)
	  {
		  return "#adad97"
	  }
	  else if (result.result.stdout === result.expectedOutput)
	  {
		return "#3ce895"
	  }
	  else 
	  {
		  return "#e36d6d"
	  }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color = "default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
		  aria-label="scrollable auto tabs example"
		  
        >
          <Tab label="Result 1" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[0]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 2" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[1]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 3" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[2]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 4" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[3]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 5" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[4]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 6" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[5]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 7" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[6]), textColor: "#000000", fontWeight: "bold"}}/>
		  <Tab label="Result 8" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[7]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 9" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[8]), textColor: "#000000", fontWeight: "bold"}}/>
          <Tab label="Result 10" className = {classes.tabs} style = {{backgroundColor: getColor(props.results[9]), textColor: "#000000", fontWeight: "bold"}}/>
        </Tabs>
      </AppBar>

      {value === 0 && <Result result = {props.results[0]}></Result>}
	  {value === 1 && <Result result = {props.results[1]} ></Result>}
	  {value === 2 && <Result result = {props.results[2]} ></Result>}
	  {value === 3 && <Result result = {props.results[3]} ></Result>}
	  {value === 4 && <Result result = {props.results[4]} ></Result>}
	  {value === 5 && <Result result = {props.results[5]}></Result>}
	  {value === 6 && <Result result = {props.results[6]} ></Result>}
	  {value === 7 && <Result result = {props.results[7]} ></Result>}
	  {value === 8 && <Result result = {props.results[8]} ></Result>}
	  {value === 9 && <Result result = {props.results[9]} ></Result>}
	  <br></br>
	  <br></br>
    </div>
  );
}
