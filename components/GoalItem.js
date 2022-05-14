import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  const { id, goalText } = props.data;
  return (
    <View key={id} style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{goalText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
