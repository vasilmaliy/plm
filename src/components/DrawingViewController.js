import React,  { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CoordinateVM from "./CoordinateVM";
import DonutChart from "./DonutChart";
import SwitchSelector from "react-native-switch-selector";
import Chart from "./Chart";

const options = [
  { label: "Графік", value: "schedule" },
  { label: "Діаграма", value: "chart" },
];

const DrawingViewController = (props) => {

  const [graph, setGraph] = useState(<Chart/>);

  return (
    <View style={styles.generalContainer}>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={(value) => value == 'schedule' ? setGraph(<Chart/>) : setGraph(<DonutChart/>)}
      />
      {graph}
    </View>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  personalInformation: {
    textAlign: "center",
  },
});

export default DrawingViewController;
