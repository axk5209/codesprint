import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	titleText: {
		flexGrow: 1,
		fontWeight: "bold",
		color: "#962f2f"
	},
}));

export default function LoggedInHeader(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: '#fff5f5' }}>
				<CssBaseline />
				<Toolbar>
					<Typography variant="h4" className={classes.titleText}>
							Code Sprint
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
