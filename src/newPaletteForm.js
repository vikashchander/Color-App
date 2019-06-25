import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ColorPickerForm from './ColorPickerForm';
import PaletteFormNav from './PaletteFormNav';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DragableColorList from './DragableColorList';
import { arrayMove } from "react-sortable-hoc";


const drawerWidth = 350;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    height:'100vh'
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  container: {
    marginLeft:'1rem',
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    width: "100%"
  },
  button: {
    margin:'1px auto',
    width: "50%"
  }
});
class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20
  };
  constructor(props) {
    super(props);
    this.state = {  
      open: true,
      colors: this.props.palettes[0].colors,
    };
   this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.generateRandomColor = this.generateRandomColor.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  addNewColor(newColor) {
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: ""
    });
  }
  handleChange(evt) {
    this.setState({ newName: evt.target.value });
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(newPalette) {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
    newPalette.colors = this.state.colors;
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeColor(colorName){
   this.setState({
     colors: this.state.colors.filter(color => color.name !==colorName)
   })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex)
    }));
  };

   clearPalette(){
     this.setState({colors: [ ]})
   }

   generateRandomColor(){
     const allColors = this.props.palettes.map(color=>(color.colors)).flat();
     var rand = Math.floor(Math.random() * allColors.length);
     const randColors = allColors[rand];
 //  console.log({allColors});
   this.setState({colors:[...this.state.colors, randColors] })
    }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >=maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav 
         classes={classes} 
         open={open}
         palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen} 
          />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
          <Typography variant='h4'>Design Your Palette</Typography>
          <div  className={classes.buttons}>
            <Button 
            variant='contained' 
            color='secondary' 
            onClick= {this.clearPalette}
            className = {classes.button}>
              Clear Palette
            </Button>
            <Button 
            variant='contained' 
            className={classes.button}
            disabled={isPaletteFull}
            color={isPaletteFull ?'secondary': 'primary' } 
            onClick={this.generateRandomColor}>
            {isPaletteFull ? 'Palette Full' : ' Random Color'}
            </Button>
          </div>
          <ColorPickerForm
          paletteIsFull={isPaletteFull}
          addNewColor={this.addNewColor}
          colors={colors}
        />
        </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
            <DragableColorList 
            colors={this.state.colors}  
            removeColor={this.removeColor}
            axis ='xy'
            onSortEnd = {this.onSortEnd}
            />
        </main>
      </div>
    );
  }
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);