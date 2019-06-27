export default {
    root:{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
          opacity:1
        }
    },
    color:{
    backgroundColor:'dae1e4',
    height:"100px",
    width:'100%',
    borderRadius: "5px",
    overflow:'hidden'
    },
    title:{
    display:'flex',
    height:"1.5rem",
    justifyContent:'space-between',
    alignItems:'center',
    margin:'0',
    color:'black',
    paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    }, 
    emoji:{
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
      },
    delete:{

  } ,
  deleteIcon:{
    position:'absolute',
    right:'0px',
    top:'0px',
    color:'white',
    backgroundColor:'#eb3d30',
    width:'20px',
    height:'20px',
    zIndex:'10',
    opacity:0
  } 
    };
    