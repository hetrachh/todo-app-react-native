import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./GoalItem";

function GoalList(props) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={props.data}
        alwaysBounceHorizontal={false}
        renderItem={(itemData) => {
          let data = {
            id: itemData.item.id,
            goalText: itemData.item.text,
          };
          return <GoalItem data={data} onDeleteItem={props.onDeleteItem} />;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
});

export default GoalList;
