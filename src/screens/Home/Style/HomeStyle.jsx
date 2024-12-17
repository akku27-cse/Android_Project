import { Platform, StyleSheet } from "react-native";
import {color} from '../../../theme/Colors.js';

export const style=StyleSheet.create({
    homeContainer:{
flex:1,
backgroundColor:'white'

    },
    homeView:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#20bf55',
        paddingTop:20,
        paddingBottom:40,
        alignItems:'center'
    },
    profileView:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    ProfileImage:{
        width:50,
        height:50,
borderRadius:25,
    },
    taskDetails:{
        paddingLeft:15,    },
    notificationImg:{
      width:30,
      height:30,
    },
    summeryView:{
        backgroundColor:'white',
        marginTop:-20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    summeryCard:{
backgroundColor:'green',
marginTop:20,
marginHorizontal:20,
borderRadius:15,
paddingBottom:10,

    },
    tastText:{
fontSize:20,
color:'black',
padding:10
    },
    AddImg:{
width:30,
height:30
    },
pogress:{
color:'black',

},

    addview:{

        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    },
    upComming:{
        paddingHorizontal:20,
        marginTop:15,
    },
    upcommingText:{
        fontSize:18,
        color:'black',
        paddingHorizontal:5,
        fontWeight:'bold',
    },
    taskContainer:{
        marginHorizontal:5,
        padding:15,
        marginTop:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#ccc',
        ...Platform.select({
            ios:{
                shadowColor:'#000000',
                shadowOffset:{width:0, height:2
                }
            }
        })
    },
    taskName:{
        fontSize:18,
        marginBottom:5,
        fontWeight:'bold'
    },
    taskDetailss:{},
    taskStatus:{},
    taskListView:{
        paddingHorizontal:20,
        marginTop:15
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    filterAll:{
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:'green',
        borderRadius:5
    },
    filtertext:{
        color:'black',
        fontWeight:'bold'
    },
    activeTabFilterText:{
        color:'white',
        fontWeight:'bold',
    },
    statusCircule:{
        flexDirection:'row',
        justifyContent:'space-between',

    },
    pending:{
        width:15,
        height:15,
        backgroundColor:'red',
        borderRadius:30,
         flexDirection:'row',
       
     
    },
    statusDetails:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    
    
})
