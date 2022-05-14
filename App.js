import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [model, setModel] = useState(false);

  function addGoalhandler() {
    setModel(true);
  }

  function endGoalHandler() {
    setModel(false);
  }

  function onDeleteItem(id) {
    setGoals((goals) => {
      return goals.filter((goal) => goal.id != id);
    });
  }

  function addGoal(goalText) {
    setGoals((currenGoal) => [
      ...currenGoal,
      { text: goalText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={addGoalhandler} />
        {model && (
          <GoalInput
            onAddGoal={addGoal}
            visible={model}
            onCancel={endGoalHandler}
          />
        )}
        <GoalList data={goals} onDeleteItem={onDeleteItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },
});
