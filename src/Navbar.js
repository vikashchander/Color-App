import React , {Component} from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';
import {Select, MenuItem} from '@material-ui/core';

class Navbar extends Component{
   constructor(props){
       super(props);
       this.state = {format:'hex'}
       this.changeValue = this.changeValue.bind(this);
   }
   changeValue(e){
       //alert(e.target.value);
       this.setState({format:e.target.value});
       this.props.changeValue(e.target.value);
   }
    render() {
        const {level, changeLevel} = this.props;
        const {format}   = this.state;
        return (
            <header className='Navbar'>
             <div className ='logo'>
                  <a href='#'>Color App</a>
             </div>
             <div className='slider-container/'>
               <span>
               level: {level}
               </span>
             <div className= 'slider'>
             <Slider 
             defaultValue={level} 
             min={100} 
             max={900} 
             step={100} 
          //   handle= {level}
             onAfterChange={changeLevel} />
            </div>
            </div>
            <div className='select-container'>
            <Select value={format} onChange={this.changeValue}>
                 <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                 <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                 <MenuItem value='rgba'>RGBA -  rgba(255,255,255,1.0)</MenuItem>
            </Select>
            </div>
            </header>
        )
    }
}

export default Navbar;