import React, { useState } from 'react';
import { Modal, Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        // <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel" color="red" onPress={props.onCancel} />
                </View>
                <View style={styles.button}>
                    <Button title="Add" onPress={addGoalHandler} />
                </View>
            </View>
        </View>
        // </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;