import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/styles';
import styles from './Styles/colorBoxStyles';

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
            className={`${classes.copyOverlay} ${copied && classes.showOverlay }`}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1 className={classes.colorText} >copied!</h1>
            <p className={classes.colorName}>{background}</p>
          </div>
          <div >
            <div className={classes.boxContent}>
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