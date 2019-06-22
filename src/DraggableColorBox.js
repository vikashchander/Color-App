import React from 'react';
import  {withStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const Styles ={
     root:{
        width: "20%",
        height: '25%',
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-2.5px",
        "&:hover svg":{
          color:'white',
          transform:"scale(1.2)"
        }
     },
     boxContent:{
            position: "absolute",
            width: "100%",
            left: "0px",
            bottom: "0px",
            padding: "10px",
            color: "black",
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontSize: "12px",
            display:'flex',
           justifyContent:"space-between",
          },
          deleteIcon:{
        transition: 'all 0.3s ease-in-out'
          }
};

function DragColorBox(props){
    const {classes,color}  = props;
    return(
    <div 
        className={classes.root} 
        style={{backgroundColor:color}} >
        <div className={classes.boxContent}>
         <span>{props.name}</span>
         <DeleteIcon className={classes.deleteIcon} />
         </div>
    </div> 
    
    )
}

export default withStyles (Styles) (DragColorBox);