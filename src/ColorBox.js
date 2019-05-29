import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './ColorBox.css';

class ColorBox extends  Component{
      constructor(props){
           super(props);
           this.state= {copied:false};
           this.changeState = this.changeState.bind(this);
      }
    changeState(){
         this.setState({copied:true}, ()=>
             setTimeout(  ()=> this.setState({copied:false}),2000)
          ) };

     render() {
         const {name,background} =this.props;
         const {copied} = this.state;
         return (
            <CopyToClipboard text={background} onCopy={this.changeState} >
            <div style={{background}} className='ColorBox' >
            <div style={{background}} className={` copy-overlay ${copied && 'show' }`}  />
            <div class={` copy-msg ${copied && 'show' }`} >
            <h2>Copied</h2>
            <p>{background}</p>
            </div>
             <div  className='copy-content'>
                  <div  className='box-content'>
                  <span>{name}</span>          
                  </div>
                  <button className='copy-button'>Copy</button>
             </div>
             <span className='see-more'> More </span>
             </div>
             </CopyToClipboard>
         )
     }
}
export default ColorBox;