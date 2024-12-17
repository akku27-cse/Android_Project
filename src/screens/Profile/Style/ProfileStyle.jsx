/* eslint-disable quotes */
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 20,
      backgroundColor: '#f4f4f9',
      justifyContent: 'center',
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30,
      color: '#333',
    },
    formContainer: {
      marginBottom: 20,
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#555',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 10,
      marginBottom: 20,
     fontSize: 18,
     fontWeight:'bold',
//  backgroundColor: '#f9f9f9',
color:'green',
    },
    disabledInput: {
      backgroundColor: '#f0f0f0',
      color: '#999',
    },
    editButton: {
      backgroundColor: '#1e90ff',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    saveButton: {
      backgroundColor: '#28a745',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    logoutButton: {
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    logoutText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
