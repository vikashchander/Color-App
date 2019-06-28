import sizes from './sizes'

export default {
    root:{
        backgroundColor:'blue',
        height: '100vh',
        display:'flex', 
        alignItems:'flex-start',
        justifyContent:'center', 
        overflow:'hidden'
    },
    container:{
        width:'50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap:'wrap',
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "55%"
    }
    },
    nav:{
display:'flex',
width:'100%',
justifyContent:"space-between",
color:'white',
alignItems: 'center',
'& a':{
textDecoration: 'none',
color:"white",
fontSize: '20px',
fontWeight:"200px"
}
    },
    palettes:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'3%',
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 50%)"
          },
          [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1rem"
          }
    }
}
