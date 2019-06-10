import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from 'chroma-js';
import "./ColorBox.css";

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
    const { name, background, moreUrl, showMoreLink } = this.props;
    const { copied } = this.state;
    const isDarkColors = chroma(background).luminance() <=0.4;
    const isLightColors = chroma(background).luminance() >=0.3;
    console.log(isDarkColors); 
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyColors}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={`${isLightColors && 'dark-text'}`} >copied!</h1>
            <p className={`${isLightColors && 'dark-text'}`}>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span className={isDarkColors && 'light-text'}>{name}</span>
            </div>
            <button className={`copy-button  ${isLightColors && 'dark-text'}`}>Copy</button>
          </div>
          { showMoreLink &&
             <Link to={moreUrl} onClick={e => e.stopPropagation()}>
           <span className={` see-more ${isLightColors && 'dark-text'}`}>More</span>
          </Link>
        }
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;