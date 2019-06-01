import React , {Component} from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';
import {Select, MenuItem} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component{
   constructor(props){
       super(props);
       this.state = {format:'hex', open:false}
       this.changeValue = this.changeValue.bind(this);
       this.handleClose = this.handleClose.bind(this);
   }
   changeValue(e){
       //alert(e.target.value);
       this.setState({format:e.target.value,open:true});
       this.props.changeValue(e.target.value);
   }

   handleClose(){
       this.setState({open:false})
   }
    render() {
        const {level, changeLevel} = this.props;
        const {format,open}   = this.state;
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
            <div className='snackbar-container'>
            <Snackbar  
            anchorOrigin={{
                   vertical:'bottom',
                   horizontal:'left'
               }}
               open={open}
               autoHideDuration={3000}
               ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Changed Format To {format.toUpperCase()}</span>}
              action={[
                <IconButton
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.handleClose}
                >
                  <CloseIcon />
                </IconButton>,
              ]}
              />
            </div>
            </header>
        )
    }
}

export default Navbar;