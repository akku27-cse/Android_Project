import { StyleSheet } from "react-native";


export const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        padding:20
    },
    mainContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between'
    },
    img:{
        width:'100%',
        height:300,
    },
    text:{
        fontSize:30,
        color:'black',
        fontWeight:'bold',
        marginTop:30,
    },
    textSub:{
        textAlign:'center',
        marginTop:30,
        fontSize:20,
        color:'black',
        fontWeight:'semibold'
    },
    btn:{
        backgroundColor:'green',
        padding:15,
        borderRadius:15,
        marginTop:40,
        marginBottom:30
    },
    BtnText:{
        color:'white',
        textAlign:'center',
        fontSize:20
    }
    
})