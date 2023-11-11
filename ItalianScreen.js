import React from 'react';
import { StyleSheet, View ,Text,FlatList,Image,ImageBackground} from 'react-native';
 
const indianDishes = [
{
  id: '1',
  name: 'Pizza',
  description: ' It consists of a round, flatbread crust topped with a variety of ingredients, including tomato sauce, cheese, and various toppings.',
  image:require('../assets/Food_images/pizza.jpg'),
},
{
  id: '2',
  name: 'Risotto',
  description: 'It is made using a specific type of rice called Arborio or Carnaroli rice, which is known for its high starch content.', 
  image:require('../assets/Food_images/risotto.jpg'),
},

{
  id: '3',
  name: 'Pasta',
  description: 'It is made from a mixture of wheat flour and water (and sometimes eggs), which is kneaded into dough, rolled out, and cut into various shapes',
  image:require('../assets/Food_images/pasta.jpg'), 
},
];
function ItalianScreen() {
  return (
<View style={styles.container}>
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"}>
<View style={{borderColor:"green",borderWidth:5,borderRadius:10}}>
    <Image src= {"https://th.bing.com/th/id/R.f54151e64a0634920de394b02d977025?rik=iUjPShv3uu2qMQ&pid=ImgRaw&r=0"} style={styles.headerImage} />

    <Text style={styles.pageTitle}>Popular Italian Dishes</Text>
    <Text>Scrolll for more:</Text>
</View>    
    <FlatList
      data={indianDishes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.dishContainer}>
          <Image source={item.image} style={styles.dishImage} />
          <Text style={styles.dishName}>{item.name}</Text>
          <Text style={styles.dishDescription}>{item.description}</Text>
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
    backgroundColor: 'white',
    padding: 16,
  },
  headerImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dishContainer: {
    marginBottom: 16,
  },
  dishImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  dishDescription: {
    fontSize: 16,
    color: 'gray',
  },  
});
export default ItalianScreen;