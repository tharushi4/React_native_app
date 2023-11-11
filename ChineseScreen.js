import React from 'react';
import { StyleSheet, View ,Text,FlatList,Image,ImageBackground} from 'react-native';
 
const indianDishes = [
{
  id: '1',
  name: 'Sushi',
  description: 'Sushi is a Japanese dish that has become popular worldwide for its unique and delicious flavors.',
  image:require('../assets/Food_images/sushi.jpg'),
},
{
  id: '2',
  name: 'Dumplings',
  description: 'Dumplings consist of dough wrapped around a filling, which can be savory or sweet. ', 
  image:require('../assets/Food_images/dumplings.jpg'),
},

{
  id: '3',
  name: 'Chow Mein',
  description: 'Chow Mein is a popular Chinese stir-fried noodle dish that has gained popularity worldwide.',
  image:require('../assets/Food_images/chow_mein.jpg'),
   
},
];
function ChineseScreen() {
  return (
<View style={styles.container}>
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"}>

<View style={{borderColor:"green",borderWidth:5,borderRadius:10}}>     
<Image src={"https://th.bing.com/th/id/R.02917fae216efac32405df02100bce70?rik=WK7jMIFXJNzyVA&pid=ImgRaw&r=0"} style={styles.headerImage} />
<Text style={styles.pageTitle}>Popular Chinese Dishes</Text>
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
export default ChineseScreen;