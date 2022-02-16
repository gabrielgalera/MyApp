import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

//Custom made GoalInput component with passed in props
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState(''); //enteredGoal state is initially set to an empty string

    //goalInputHandler uses a passed in enteredText string and sets enteredGoal state to that string
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    //addGoalHandler sends onAddGoal with enteredGoal back to props and sets enteredGoal state to an empty string
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    //What will be rendered
    return(
        //Modal will be visible based on whether visible prop is true, rendered with slide
        <Modal visible={props.visible} animationType="slide">
            {/*  View component contains inputContainer and buttonContainer */}
            <View style={styles.inputContainer}>
                {/* TextInput calls inputGoalHandler when text changes and displays enteredGoal state */}
                <TextInput 
                    placeholder='Course Goals' 
                    style={styles.input} 
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                {/* buttonContainer has cancel and add buttons */}
                <View style={styles.buttonContainer}>
                    {/* cancel button uses onCancel prop when pressed */}
                    <View style={styles.Button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                    </View>
                    {/* add button calls addGoalHandler when pressed */}
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

//Style sheet
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;