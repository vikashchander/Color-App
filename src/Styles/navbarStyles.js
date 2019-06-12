export default{
    Navbar:{
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'flex-start',
      height: '7vh'
  },
  logo:{
      marginRight: '15px',
      padding: '0 13px',
      fontSize: '22px',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      backgroundColor: '#eceff1',
      fontFamily: 'Roboto',
      "& a":{
        textDecoration: 'none',
        color: 'black'
      }
  },
  slider:{
      width:"340px",
     margin: '0 10px',
     display: 'inline-block',
     "& .rc-slider-track":{
      backgroundColor: "transparent"
   },
   "& .rc-slider-rail":{
      height: "8px"
   },
   "& .rc-slider-handle,  .rc-slider-handle:focus":{
    backgroundColor: "green",
    outline: "none",
    border: "2px solid green",
    boxShadow: "none",
    width: "13px",    
    height: "13px",
    marginLeft: "-7px",
    marginTop: "-3px"
   },
   "& .rc-slider-handle:active, .rc-slider-handle:hover" :{
      backgroundColor:"brown",
      outline:"royalblue",
      border: "2px solid brown",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
   }
  },
  "selectContainer":{
    marginLeft: "auto",
    marginRight: "1rem"
  }  
  }
  