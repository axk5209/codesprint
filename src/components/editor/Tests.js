import React, {useState} from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Test from "./Test"

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

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

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
          <Tab label="Test 1"/>
          <Tab label="Test 2" />
          <Tab label="Test 3" />
          <Tab label="Test 4" />
          <Tab label="Test 5"/>
          <Tab label="Test 6"  />
          <Tab label="Test 7" />
		  <Tab label="Test 8"  />
          <Tab label="Test 9"  />
          <Tab label="Test 10"  />
        </Tabs>
      </AppBar>
	  <br></br>
	  <br></br>
      {value === 0 && <Test test = {props.tests[0]} setTests ={props.setTests}></Test>}
	  {value === 1 && <Test test = {props.tests[1]} setTests ={props.setTests}></Test>}
	  {value === 2 && <Test test = {props.tests[2]} setTests ={props.setTests}></Test>}
	  {value === 3 && <Test test = {props.tests[3]} setTests ={props.setTests}></Test>}
	  {value === 4 && <Test test = {props.tests[4]} setTests ={props.setTests}></Test>}
	  {value === 5 && <Test test = {props.tests[5]} setTests ={props.setTests}></Test>}
	  {value === 6 && <Test test = {props.tests[6]} setTests ={props.setTests}></Test>}
	  {value === 7 && <Test test = {props.tests[7]} setTests ={props.setTests}></Test>}
	  {value === 8 && <Test test = {props.tests[8]} setTests ={props.setTests}></Test>}
	  {value === 9 && <Test test = {props.tests[9]} setTests ={props.setTests}></Test>}
	  <br></br>
	  <br></br>
    </div>
  );
}
