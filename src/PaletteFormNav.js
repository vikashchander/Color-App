import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import  PaletteMetaDialog from './PaletteMetaDialog';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm } from "react-material-ui-form-validator";

const drawerWidth = 350;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    }
  },

});


class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = { newPaletteName: "", formShowing:false};
    this.handleChange = this.handleChange.bind(this);
    this.showForm = this.showForm.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  handleHide(){
    this.setState({formShowing:false})
  }
  render() {
    const { classes, open, palettes, handleSubmit } = this.props;
    //const { newPaletteName } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A New Palette
            </Typography>
            </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/' >
            <Button
            variant='contained'
            color='secondary'
            className={classes.button}
          >Back</Button>
          </Link>
          <Button
              variant='contained'
              color='primary'
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
        </div>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaDialog palettes={palettes} handleSubmit={handleSubmit} 
          handleHide={this.handleHide} />
        )}
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);