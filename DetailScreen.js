import React ,{useState} from 'react';
import { Text,StyleSheet, View,TextInput,Button,FlatList,ImageBackground} from 'react-native';
 
const DetailScreen = () => {
const [task, setTask] = useState('');
const [tasks, setTasks] = useState([]);

const handleAddTask = () => {
  if (task.trim()) {
    setTasks([...tasks, task]);
    setTask('');
  }
};

const handleDeleteTask = (index) => {
  const updatedTasks = [...tasks];
  updatedTasks.splice(index, 1);
  setTasks(updatedTasks);
};

return (
<View style={styles.container}>
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"} style={styles.mainview}>
  
    <Text style={styles.title}>Making My ingradiant List</Text>
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a Ingreadiant"
        value={task}
        onChangeText={(text) => setTask(text)}
        style={styles.input}
      />
      <Button title="Add Item" onPress={handleAddTask} />
    </View>
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <View style={styles.task}>
          <Text>{item}</Text>
          <Button title="Delete Item" onPress={() => handleDeleteTask(index)} />
        </View>
      )}
      
    />

  </ImageBackground>
  </View>
  
);
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
mainview:{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    resizeMode: 'cover',
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign:"center",
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#1F0333',
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },  
});
export default DetailScreen;
