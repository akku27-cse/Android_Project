import { StyleSheet } from "react-native";


export const style=StyleSheet.create({
    container:{
flex:1,
backgroundColor:"white",

    },
    Loginimg:{
        width:"100%",
        height:280,
        resizeMode:'contain'
    },
    mainContainer:{paddingHorizontal:20,},
    WelcomeText:{
        fontSize:35,
        color:'black',
        fontWeight:'bold',
        marginLeft:20
    },
    LoginInputView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#6FC276',
        borderRadius: 20,
        padding: 10,
        width: '100%',
        height: 60, 
    },
    proflileImage:{

        width:30,
        height:30,
        marginRight: 10,
        borderRadius:20

    },
    loginInput: {
        flex: 1, // Ensures the input takes up remaining space
        fontSize: 20, // Increased font size for better visibility
        padding: 10,
        height: '100%', // Ensures it matches the parent height
        color: '#333',
      },
      forgotText:{
        
        flexDirection:'row',
        textAlign:'right',
//       marginTop:,
        fontSize:18,
        color:'black',
      },

      SignInBtn:{
        backgroundColor:'green',
        padding:15,
        borderRadius:15,
        marginTop:20,
        marginBottom:30
    },
    btnText:{
        color:'white',
        textAlign:'center',
        fontSize:20
    },
    TextContinue:{
        textAlign:'center',
        marginTop:6,
        color:'black',
        fontSize:20,
        fontWeight:'semibold'

    },
    socialIcon:{
flexDirection:'row',
justifyContent:'space-evenly',
marginTop:5
    },
    googleImg:{
        width:35,
        height:35
    },
    bgImg:{
        borderRadius:30,
    // backgroundColor:'green',
        padding:20
    },
    signUp:{
        textAlign:'center',
        fontSize:18,
        marginTop:6
    }
})