import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  FlatList 
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); //courseGoals state is initially set to an  empty array of key(int) and value(string)
  const [isAddMode, setIsAddMode] = useState(false);  //isAddMode state is initially set to a false boolean value

  //addGoalHandler creates a key/value pair object with the value being the goalTitle string and appends it to the courseGoals state array
  const addGoalHandler = goalTitle => {
    //Upadte courseGoals state array by appending newest key value pair to it
    setCourseGoals(courseGoals => [
      ...courseGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);  //Toggle off setIsAddMode state
  }

  //removeGoalHandler removes a goal key/value pair based on a key value matching a passed in goalId
  const removeGoalHandler = goalId => {
    //Update courseGoals state by removing goal with key matching goalId
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  //cancelAddGoalHandler toggles setIsAddMode to false
  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  //What will be rendered
  return (
    //Screen parent view
    <View style={styles.screen}>
      {/* Pressing Add New Goal Button toggles on setIsAddMode state */}
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      {/* Component visible based on isAddMoode state, triggers addGoalHandler and cancelAddGoalHandler */}
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelAddGoalHandler}
      />
      {/*<ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
        </ScrollView>*/}
      {/* Renders scrollable list of GoalItem components, showing their value prop */}
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/>}    
      />  
    </View>
  );
}

//Style sheet
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
