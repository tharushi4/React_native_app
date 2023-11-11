import React from 'react';
import { StyleSheet, View ,Text,FlatList,Image,ImageBackground} from 'react-native';
 
const indianDishes = [
{
  id: '1',
  name: 'Butter Chicken',
  description: 'A rich and creamy tomato-based curry with tender pieces of chicken.',
  image:require('../assets/Food_images/butter-chicken.jpg'),
},
{
  id: '2',
  name: 'Biryani',
  description: 'A rich and creamy tomato-based curry with tender pieces of chicken.', 
  image:require('../assets/Food_images/biriyani.jpg'),
},
{
  id: '3',
  name: 'Tandoori Chicken',
  description: 'Chicken marinated in yogurt and spices, cooked in a tandoor (clay oven).', 
  image:require('../assets/Food_images/thandoori.jpg'),
}, 
];

function IndianScreen() {
  return (
<View style={styles.container}>
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"}>
<View style={{borderColor:"green",borderWidth:5,borderRadius:10}}> 
<Image src={"https://th.bing.com/th/id/R.04970df9b6d8fbf6e83899abc36293c0?rik=ab8DVnAaoSc2hw&pid=ImgRaw&r=0"} style={styles.headerImage} />  

<Text style={styles.pageTitle}>Popular Indian Dishes</Text>
<Button 
          title="add" />

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
  height: 200,
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

export default IndianScreen;