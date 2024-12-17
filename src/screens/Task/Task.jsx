/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { style } from './Style/TaskStyle';
import { AddImg, AvatarImg, NotifactionImg } from '../../theme/Images';
import { Agenda} from 'react-native-calendars';

const Task = ({navigation}) => {
  const [items, setItems] = useState({
    '2024-12-02': [{ name: 'Meeting with Sir', time: '7 PM', task: 'Project Presentation' }],
    '2024-12-03': [{ name: 'Meeting with Sir', time: '7 PM', task: 'Figma Presentation' }],
    '2024-12-04': [{ name: 'Meeting with Sir', time: '7 PM', task: 'Working Progress Discuss' }],
  });

  const customTheme = {
    agendaTodayColor: '#20bf55',
    agendaKnobColor: '#20bf55',
    dotColor: '#20bf55',
    selectedDayBackgroundColor: '#20bf55',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#20bf55',
  };
//for empty task
  const renderEmptyData = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}>
        <Text>No Task For This Day</Text>
      </View>
    );
  };

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={style.taskView}>
          <View style={style.profileView}>
            <Image source={AvatarImg} style={style.UserPhoto} />
            <View style={style.details}>
              <Text style={style.nestext}>Task List</Text>
              <Text style={style.taskText}>Upcoming Text</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={NotifactionImg} style={style.notifaction} />
          </TouchableOpacity>
        </View>
{/**Show for the select day event data */}
        <View style={style.calender}>
          <View style={style.mainCal}>
            <Agenda
              items={items}
              theme={customTheme}
              showOnlySelectedDayItems={true}
              renderEmptyData={renderEmptyData}
              renderItem={(item) => (
                <View style={{marginVertical:10,marginTop:20,backgroundColor:'white', marginHorizontal:10,padding:10}}>
                  <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
                  <Text style={{fontSize:16,fontWeight:'bold'}}>{item.time}</Text>
                  <Text style={{fontSize:16}}>{item.task}</Text>
                </View>
              )}
            />
          </View>
        </View>
        <TouchableOpacity style={style.stickyCircle} onPress={()=>navigation.navigate('AddTask')}>
            <Image source={AddImg} style={style.addImg}/>
      </TouchableOpacity>
      </View>
    </>
  );
};

export default Task;
