import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
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
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyColors}>
        <div style={{ background }} className='ColorBox'>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          { showMoreLink &&
             <Link to={moreUrl} onClick={e => e.stopPropagation()}>
           <span className='see-more'>More</span>
          </Link>
        }
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;