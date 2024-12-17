import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    addTaskContainer:{
        flex:1, 
        backgroundColor:'white'
    },
    continer:{
        flexDirection:'row',
        paddingHorizontal:20,
        alignItems:'center',
        backgroundColor:'green',
        paddingTop:20,
        paddingBottom:20
    },
    backArrow:{
        width:10,
        height:20
    },
    textAdd:{
        fontSize:18,
        color:'white',
        paddingLeft:120,
        fontWeight:'bold'
          
    },
    inputContainer:{
        flex:1,
        paddingHorizontal:20,
        paddingTop:20
    },
    label:{
        fontSize:13,
        color:'black',
        fontWeight:'bold'
        
    },
    inputView:{
        marginTop:15,
        height:80
    },
    Input:{
        backgroundColor:"#b9f6ca",
        borderRadius:10,
        paddingHorizontal:10,
        marginTop:10,
        fontSize:18
    },
    calenderImgs:{
        width:25,
        height:25
    },
    dateView:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#b9f6ca',
        borderRadius:10,
        paddingHorizontal:10,
        alignItems:'center',
        marginTop:10
    },
    InputDate:{
        fontSize:12
    },
    btn:{
        backgroundColor:'green',
        padding:15,
        borderRadius:10,
        marginTop:25,
      },
      btnText:{
        color:'white',
        textAlign:"center",
        fontWeight:'bold'
       // fontFamily:Fonts.MEDIUM
      },
})