/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
 
  ScrollView,
} from 'react-native';
import {styles} from './Style/ProfileStyle'
const Profile = ({navigation}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'Santu',
    email: 'Santu@gmail.com',
    phone: '8945007301',
    address:'Purba Medinipur, West Bengal'
  });
  const [editableDetails, setEditableDetails] = useState({ ...userDetails });

  const handleEdit = () => setIsEditing(true);
//for save the data after edit
  const handleSave = () => {
    setUserDetails(editableDetails);
    setIsEditing(false);
   alert('Success Your profile details have been updated!');
  };

  return (
  <>
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.header}>User Profile</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          placeholder="Name"
          editable={isEditing}
          value={editableDetails.name}
          onChangeText={(text) =>
            setEditableDetails((prev) => ({ ...prev, name: text }))
          }
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          placeholder="Email"
          editable={isEditing}
          value={editableDetails.email}
          onChangeText={(text) =>
            setEditableDetails((prev) => ({ ...prev, email: text }))
          }
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          placeholder="Phone"
          editable={isEditing}
          value={editableDetails.phone}
          onChangeText={(text) =>
            setEditableDetails((prev) => ({ ...prev, phone: text }))
          }
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, !isEditing && styles.disabledInput]}
          placeholder="Address"
          editable={isEditing}
          value={editableDetails.address}
          onChangeText={(text) =>
            setEditableDetails((prev) => ({ ...prev, address: text }))
          }
        />

      </View>

      {isEditing ? (
  <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={()=>{navigation.navigate('Login');}}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  </>
  );
};

export default Profile;

