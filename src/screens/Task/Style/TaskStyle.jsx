import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  taskView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#20bf55',
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  profileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  UserPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    paddingLeft: 15,
  },
  nestext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  taskTest: {
    color: 'white',
  },
  notifaction: {
    width: 30,
    height: 30,
  },
  calender: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
    marginTop: -20,
  },
  mainCal: {
    flex: 1,
    padding: 20,
  },
  stickyCircle:{
    position:'absolute',
    bottom:30,
    right:25,
    borderRadius:25
},
addImg:{
    width:60,
    height:60,
    borderRadius:25
}
});
