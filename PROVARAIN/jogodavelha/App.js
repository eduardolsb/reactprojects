import * as React from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { Card } from 'react-native-paper';

export default function App() {

  const [marker, setMarker] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X");
  const [title, setTitle] = useState("Rain - 'X' start the game");
  const [keywinner, setKeywinner] = useState(false);  

  const click = (id) => () => {
    const _marker = marker;
    
    if(_marker[id] != "" || keywinner == true){
      return;
    }
    
    _marker[id] = player;

    setMarker(_marker);

    winner();
  }

  function winner() {

    titleTheNextPlayer();
    
    const _line1 = [marker[0], marker[1], marker[2]];
    const _line2 = [marker[3], marker[4], marker[5]];
    const _line3 = [marker[6], marker[7], marker[8]];
    const _col1 = [marker[0], marker[3], marker[6]];
    const _col2 = [marker[1], marker[4], marker[7]];
    const _col3 = [marker[2], marker[5], marker[8]];
    const _diag1 = [marker[0], marker[4], marker[8]];
    const _diag2 = [marker[2], marker[4], marker[6]];

    if(_line1.filter(a=> a.includes("X")).length == 3 || 
       _line1.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }  
    if(_line2.filter(a=> a.includes("X")).length == 3 || 
       _line2.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }
    if((_line3.filter(a=> a.includes("X"))).length == 3 ||
       (_line3.filter(a=> a.includes("O"))).length == 3){
      writeTitle();
      return;
    }
    if(_col1.filter(a=> a.includes("X")).length == 3 ||
       _col1.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }  
    if(_col2.filter(a=> a.includes("X")).length == 3 ||
       _col2.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }
    if(_col3.filter(a=> a.includes("X")).length == 3 ||
       _col3.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }
    if(_diag1.filter(a=> a.includes("X")).length == 3 ||
       _diag1.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }
    if(_diag2.filter(a=> a.includes("X")).length == 3 ||
       _diag2.filter(a=> a.includes("O")).length == 3){
      writeTitle();
      return;
    }

    if(marker.filter(a=> a === "").length == 0){
      setTitle(`Do not have winners`);  
    }

    setPlayer((player == "X") ? "O" : "X");
  }

  function titleTheNextPlayer(){  
    var _p = player;
    const _value = (_p == "X") ? "O" : "X";
    setTitle(`${_value} is the next`); 
  }

  function writeTitle() {
    setTitle(`${player} is the **WINNER**`);
    setKeywinner(true);
    return true;
  }

  function restart() {
    setMarker(["","","","","","","","",""]);
    setTitle("Rain - 'X' start the game");
    setPlayer("X");
    setKeywinner(false);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{title}</Text>
      <View style={styles.lines}>
        <TouchableOpacity style={styles.area} onPress={click(0)}>
          <Text style={styles.markers}>{marker[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(1)}>
          <Text style={styles.markers}>{marker[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(2)}>
          <Text style={styles.markers}>{marker[2]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lines}>
        <TouchableOpacity style={styles.area} onPress={click(3)}>
          <Text style={styles.markers}>{marker[3]}</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(4)}>
          <Text style={styles.markers}>{marker[4]}</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(5)}>
          <Text style={styles.markers}>{marker[5]}</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.lines}>
        <TouchableOpacity style={styles.area} onPress={click(6)}>
          <Text style={styles.markers}>{marker[6]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(7)}>
          <Text style={styles.markers}>{marker[7]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.area} onPress={click(8)}>
          <Text style={styles.markers}>{marker[8]}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.marginbutton}>
        <Button style={styles.button} onPress={restart} title="RESTART"></Button>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: 150,
  },
  marginbutton: {
    marginTop: 30,
  },
  markers: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 2,
  },
  lines: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  area: {
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
