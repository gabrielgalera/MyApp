import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Custom made GoalItem component with passed in props
const GoalItem = props => {
    //What will be rendered
    return(
        //Component changes opacity on press and sends onDelete with id back to props
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
              <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

//Style sheet
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;