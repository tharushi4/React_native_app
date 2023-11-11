import React from 'react';
import { View, Text,Button,StyleSheet,TouchableOpacity,Image,ImageBackground, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation,route }) {
  const { userName } = route.params;
  
return (
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"} style={styles.mainview}>
  
 <View>
  
<View>
<Text style={{fontWeight:"bold", fontSize:25}}> Welcome, '{userName}' !</Text>

 </View>
<View style={styles.maintabs1}> 
        <TouchableOpacity onPress={() => navigation.navigate('Indian Section')} style={styles.container}>
        <Image src = {"https://th.bing.com/th/id/R.04970df9b6d8fbf6e83899abc36293c0?rik=ab8DVnAaoSc2hw&pid=ImgRaw&r=0"} style={styles.image} />
        <Text style={styles.title}>INDIAN FOODS</Text>
     </TouchableOpacity>          
</View>
 
<View style={styles.maintabs1}>      
     <TouchableOpacity onPress={() => navigation.navigate('Chinese Section')} style={styles.container}>
        <Image src={"https://th.bing.com/th/id/R.02917fae216efac32405df02100bce70?rik=WK7jMIFXJNzyVA&pid=ImgRaw&r=0"} style={styles.image} />
        <Text style={styles.title}>CHINESE FOOD</Text>
     </TouchableOpacity>
</View> 
  
<View style={styles.maintabs1}>      
     <TouchableOpacity onPress={() => navigation.navigate('Italian Section')} style={styles.container}>
        <Image src={"https://th.bing.com/th/id/R.f54151e64a0634920de394b02d977025?rik=iUjPShv3uu2qMQ&pid=ImgRaw&r=0"} style={styles.image} />
        <Text style={styles.title}>ITALIAN FOOD</Text>
     </TouchableOpacity>   
</View>
 
<Button 
          title="Make your own Ingreadiant list"
          onPress={() => navigation.navigate('Details')}/>

<Text></Text>
<View style={{backgroundColor:"#051C3F"}}> 
<Text style={styles.footer}> <Icon name="envelope" size={15} color="#FFFFFF"/>    tnethmini5445@gmail.com</Text>
 <Text style={styles.footer}> <Icon name="phone" size={15} color="#FFFFFF"/>    0761209661</Text>
<Text style={styles.footer}> <Icon name="linkedin" size={15} color="#FFFFFF"/>    tharushi-nethmini</Text>
</View>
    
</View>
</ImageBackground>   
);};

  const styles = StyleSheet.create({         
maintabs1:{
    flex:1,
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingBottom:'45%',
    paddingTop:23,
}, 
container: {
   backgroundColor:"gray",
    width:'90%',
    aspectRatio:2, 
    borderWidth: 2,
    borderColor: '#051C3F',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  }, 
  image: {
    width: "100%",  
    height: 110,
    resizeMode: 'cover',
  },
title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
},
footer:{
  fontSize:12,
  textAlign:"left",
  color:"#FFFFFF",
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

export default HomeScreen;