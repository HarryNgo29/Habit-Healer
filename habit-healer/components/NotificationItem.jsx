import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo installed or replace with another icon library

const NotificationItem = ({ notification }) => {
    const { friendName, habitName, type } = notification;
    const isCompleted = type === 'completed';

    return (
        <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>
                {`${friendName} ${isCompleted ? 'completed' : 'is late for'} ${habitName}`}
            </Text>
            <View style={styles.right}>
                {isCompleted && (
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Hi Five!</Text>
                    </TouchableOpacity>
                )}
                {!isCompleted && (
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name={'time-outline'} size={20} color="white" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    notificationItem: {
        backgroundColor: '#333',
        marginBottom: 10,
        height: 70,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    notificationText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
    },
    right: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        flex: 1,
    },
    button: {
        height: 40,
        width: 55,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'gray',
        marginLeft: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    // Adjust or add more styles as needed
});

export default NotificationItem;
