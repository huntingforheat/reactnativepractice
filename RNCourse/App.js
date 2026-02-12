import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (inputGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: inputGoalText, id: Math.random().toString() },
    ]);

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="목표 추가"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* ScrollView 컴포넌트는 밑에 자식 컴포넌트를 모두 로드 하기 떄문에 내용 길이가 정해져 있는 상황 말고는 잘 사용하지 않음 */}
          {/* <ScrollView alwaysBounceHorizontal>
          {courseGoals.map((goal) => (
            // IOS에서 버튼이 둥글게 안나오는 문제가 있어서 <Text/> 태그를 <View/> 로 감쌌음
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          {/* 데이터 갯수가 여러개인데 스크롤이 필요할떈 FlatList 컴포넌트를 사용하여 data 옵션으로 데이터를 넘긴다 */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});

// import React from "react";
// import { Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={{
//         padding: 50,
//         flexDirection: 'row',
//         width: '80%',
//         height: 300,
//         justifyContent: 'space-around',
//         alignItems: 'stretch'
//       }}>
//       <View
//         style={{
//           backgroundColor: 'red',
//           // 자식에서 flex: 1을 주면 부모에서 설정한 넓이의 최대치로 변경이 가능
//           // 여기 설정한 숫자에 따라 사용 가능한 공간을 배분
//           flex: 2,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>1</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>2</Text>
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <Text>3</Text>
//       </View>
//     </View>
//   )
// }
