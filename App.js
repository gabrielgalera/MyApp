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
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals => [
      ...courseGoals, 
      {key: Math.random().toString(), value: goalTitle}
    ]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}/>
      {/*<ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
        </ScrollView>*/}
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value}/>}    
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
