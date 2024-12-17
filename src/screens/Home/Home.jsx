/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { style } from './Style/HomeStyle';
import { Colors } from '../../theme/Colors.js';
import { AddImg, AvatarImg, NotifactionImg } from '../../theme/Images.js';

// Sample task arrays
const tasks = [
   {
    id:1,
    taskName:"Task 1",
    taskdetails:"Details Of Task 1",
    taskStatus:'pending'
  },
  {
    id:2,
    taskName:"Task 2",
    taskdetails:"Details Of Task 2",
    taskStatus:'pending'
  },
  {
    id:3,
    taskName:"Task 3",
    taskdetails:"Details Of Task 3",
    taskStatus:'pending'
  },
  {
    id:4,
    taskName:"Task 4",
    taskdetails:"Details Of Task 4",
    taskStatus:'pending'
  },
];

//custom task
const customTask = [
 
  {
    id:1,
    taskName:"Task 1",
    taskdetails:"Details Of Task 1",
    myStatus:'pending'
  },
  {
    id:2,
    taskName:"Task 2",
    taskdetails:"Details Of Task 2",
    myStatus:'Done'
  },
  {
    id:3,
    taskName:"Task 3",
    taskdetails:"Details Of Task 3",
    myStatus:'In Progress'
  },
  {
    id:4,
    taskName:"Task 4",
    taskdetails:"Details Of Task 4",
    myStatus:'Done'
  },
  {
    id:5,
    taskName:"Task 5",
    taskdetails:"Details Of Task 5",
    myStatus:'pending'
  },
  {
    id:6,
    taskName:"Task 6",
    taskdetails:"Details Of Task 6",
    myStatus:'pending'
  },
  {
    id:7,
    taskName:"Task 7",
    taskdetails:"Details Of Task 7",
    myStatus:'pending'
  },
  {
    id:8,
    taskName:"Task 8",
    taskdetails:"Details Of Task 8",
    myStatus:'In Progress'
  },
  {
    id:9,
    taskName:"Task 9",
    taskdetails:"Details Of Task 9",
    myStatus:'In progress'
  },
];

// Taskitem 
const TaskItem = ({ taskName, taskDetails, taskStatus }) => (
  <View style={style.taskContainer}>
    <Text style={style.taskName}>{taskName}</Text>
    <Text style={style.taskDetailss}>{taskDetails}</Text>
    <Text style={style.taskStatus}> Status: {taskStatus}</Text>
  </View>
);

// CustomTaskItem
const CustomTaskItem = ({ taskName, taskDetails, myStatus }) => {
  let StatusColor;
  switch (myStatus) {
    case 'pending':
      StatusColor = 'red';
      break;
    case 'In Progress':
      StatusColor = 'yellow';
      break;
    case 'Done':
      StatusColor = 'green';
      break;
    default:
      StatusColor = 'gray';
      break;
  }

  return (
    <View style={style.taskContainer}>
      <Text style={style.statusCircule}>
        {taskName}{' '}
        <View style={[style.pending, { backgroundColor: StatusColor }]} />
      </Text>

      <View style={style.statusDetails}>
        <Text>{taskDetails}</Text>
        <Text>{myStatus}</Text>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  const [filterTasked, setFilterTask] = useState(customTask);
  const [activeTab, setActiveTab] = useState('All');


  // Filter tasks
  const filterTsk = (myStatus) => {
    let filtered;
    if (myStatus === 'All') {
      filtered = customTask;
    } else {
      filtered = customTask.filter((task) => task.myStatus === myStatus);
    }
    setFilterTask(filtered);
    setActiveTab(myStatus);
  };

 

    

  return (
    <View style={style.homeContainer}>
      {/* Profile Section */}
      <View style={style.homeView}>
        <View style={style.profileView}>
          <View>
            <Image source={AvatarImg} style={style.ProfileImage} />
          </View>
          <View style={style.taskDetails}>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
              Good Morning
            </Text>
            <Text style={{ fontSize: 18, color: 'white' }}>
              3 Tasks Remaining
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image source={NotifactionImg} style={style.notificationImg} />
        </TouchableOpacity>
      </View>

      {/* Summary  */}
      <View style={style.summeryView}>
        <View style={style.summeryCard}>
          <Text style={style.tastText}>Today Task Summary</Text>
          <View style={style.addview}>
            <View>
              <Text style={{ fontSize: 18 }}>
                Progress<Text style={style.pogress}>75%</Text>
              </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('AddTask')}>
              <Image source={AddImg} style={style.AddImg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tasks Section */}
      <ScrollView>
        {/* Upcoming Tasks */}
        <View style={style.upComming}>
          <Text style={style.upcommingText}>Upcoming Task</Text>
          <FlatList
            data={tasks}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TaskItem
                taskDetails={item.taskdetails}
                taskName={item.taskName}
                taskStatus={item.taskStatus}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        {/* My Task */}
        <View style={style.taskListView}>
          <Text style={style.upcommingText}>My Task List</Text>
          <View style={style.filterContainer}>
            {['All', 'pending', 'In Progress', 'Done'].map((status) => (
              <TouchableOpacity
                key={status}
                onPress={() => filterTsk(status)}
                style={[
                  style.filterAll,
                  activeTab === status && style.activeTabFilterButton,
                ]}
              >
                <Text
                  style={[
                    style.filtertext,
                    activeTab === status && style.activeTabFilterText,
                  ]}
                >
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {filterTasked.map((item) => (
          <CustomTaskItem
            key={item.id}
            taskName={item.taskName}
            taskDetails={item.taskdetails}
            myStatus={item.myStatus}
          />
        ))}
      </ScrollView>


    </View>
  );
};

export default Home;
