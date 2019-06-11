import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';
import "./ColorBox.css";

const styles ={
  ColorBox: {
    width: "20%",
    height: props => (props.showFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4.5px",
    "&:hover button": {
      opacity: 1
    }
  },
  colorName:{
    color :props =>chroma(props.background).luminance() <=0.4 ?'white' :'black'
  },
  colorText :{
       color :props => chroma(props.background).luminance()  >=0.5 ?'black':'white'
  },
  // seeMore:
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.3 ? "rgba(0,0,0,0.6)" : "black",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    background: "rgba(255, 255, 255, 0.3)",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.3  ? "rgba(0,0,0,0.6)" : "white",
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
    textDecoration: "none",
    opacity: 0
  }
};

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyColors = this.changeCopyColors.bind(this);
  }
  changeCopyColors() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }
  render() {
    const { name, background, classes, moreUrl, showFullPalette } = this.props;
    const { copied } = this.state;
    // const isDarkColors = chroma(background).luminance() <=0.4;
    // const isLightColors = chroma(background).luminance() >=0.3;
   // console.log(isDarkColors); 
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyColors}>
        <div style={{ background }} className={classes.ColorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={classes.colorText} >copied!</h1>
            <p className={classes.colorName}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          { showFullPalette &&
             <Link to={moreUrl} onClick={e => e.stopPropagation()}>
           <span className={classes.seeMore}>More</span>
          </Link>
        }
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(styles)(ColorBox);