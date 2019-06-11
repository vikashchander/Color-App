import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import {withStyles} from '@material-ui/styles'
import {Link } from 'react-router-dom';

const styles ={
    Palette:{
        height : '100vh',
        display: 'flex',
        flexDirection:'column',
        overflow:'hidden'
    },
    colors:{
        height:'90%'
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
          color: "white",
          width: "100px",
          height: "30px",
          position: "absolute",
          display: "inline-block",
          top: "50%",
          left: "50%",
          marginLeft: "-50px",
          marginTop: "-15px",
          textAlign: "center",
          outline: "none",
          background: "rgba(255, 255, 255, 0.3)",
          fontSize: "1rem",
          lineHeight: "30px",
          textTransform: "uppercase",
          border: "none",
          textDecoration: "none"
        }
      }
}

 class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state = {format:'hex'};
        this.changeValue = this.changeValue.bind(this);
        this._shades = this.generateColors(this.props.palette , this.props.colorId);
        console.log(this._shades);
    };
    changeValue(value){
        this.setState({format:value});
    }
    
    //generateColors palettes thorough color palette
    generateColors(palette, allColorsFilterBy){
       let  shades=[];
       let allColors = palette.colors;
       for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(colors =>(
                 colors.id ===allColorsFilterBy
                ))
            )
       }
           //return all shades of given colors 
           return shades.slice(1);      
    }
    render() {
        const {paletteName, emoji,id} = this.props.palette;
        const {classes}  = this.props;
        const {format }=this.state;
        const colorBoxes = this._shades.map(color =>(
            <ColorBox  
            key={color.name}
            name={color.name}
            background ={color[format]}
           showFullPalette={false}
            />
            ));
        return (
            <div className={classes.Palette}>
                 <Navbar  changeValue = {this.changeValue} ShowSlider={false}/>
                <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                <Link to={`/palette/${id}`}  className='back-button'> 
                Go Back 
                </Link>
                </div>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);