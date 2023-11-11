import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet, TouchableOpacity,Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


function LoginScreen() {
  const [userName, setUserName] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home', { userName });
  }; 

  return (
    
    <View style={styles.mainview}>
<ImageBackground  src={"https://th.bing.com/th/id/R.0151f2ff7ad1f835b594bcfa637f6fe0?rik=QfcWrx%2f5OUNoww&pid=ImgRaw&r=0"} style={styles.mainview}> 
      <Text style={styles.loginText} >Login</Text>

      <Image src={"https://th.bing.com/th/id/OIP.A5v_URLD-yjo-8L8qsue1wHaE8?pid=ImgDet&rs=1"} 
      style={{height:98,width:"100%",borderColor:"#051C3F",borderWidth:3,borderRadius:10}}/>

      <Text style={styles.inputText}>  <Icon name="user" size={20} />  User Name</Text>
      <TextInput style={styles.placeholderstyle}
        placeholder="Enter Username"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />

      <Text style={styles.inputText}>  <Icon name="envelope" size={20}/>  Email Address</Text>
      <TextInput style={styles.placeholderstyle}
        placeholder=" Enter Email"
        onChangeText={(text) => setEmail(text)}
        value={email} 
      />

      <Text style={styles.inputText}>  <Icon name="lock" size={20} />  Password</Text>
      <TextInput  style={styles.placeholderstyle}
        placeholder=" Enter Password" 
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
 <Text></Text>     
<Button title="Login" onPress={handleLogin} style={styles.loginButton} />
<Text></Text>

<Text></Text>

<View style={styles.imageStyles}>
     <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image src={"https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"} style={styles.image}/>
        <Text></Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image src={"https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"} style={styles.image}/>
        <Text></Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image src={"https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png"} style={styles.image}/>
        <Text></Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.touchableOpacityStyle}>
        <Image src={"https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png"} style={styles.image}/>
        <Text></Text>
     </TouchableOpacity>
</View>
     
<Text style={{marginTop:20,fontSize:15}}>Not an Account,</Text>
<Text></Text>
<Button title="SignUp" onPress={() => navigation.navigate('Signup')} style={styles.loginButton} />     
</ImageBackground>  
</View>
  );
}
const styles=StyleSheet.create ({
mainview:{
backgroundColor: 'rgba(0, 0, 0, 0.2)',
flex: 1,
resizeMode: 'cover',
}, 
loginText:{
fontSize:40,
color:'#051C3F',
fontWeight:"bold",
textAlign:"center",
paddingBottom:10,
},
inputText:{
    paddingBottom:5,
    paddingTop:25,
    paddingLeft:20,
},
loginButton:{
    backgroundColor:"#051C3F",
    paddingBottom:10,
},
placeholderstyle:{
marginLeft:10,
paddingLeft:20,
borderColor:"#051C3F",
borderWidth:2,
height:35,
width:"95%",
},
touchableOpacityStyle:{
  backgroundColor:"white",
    width:'20%',
    aspectRatio:1, 
    borderWidth: 2,
    borderColor: '#051C3F',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
},
imageStyles:{
flexDirection:'row',
marginTop:5,
marginLeft:15,
marginRight:15,
justifyContent:'space-around', 
},
image: {
  marginTop:15,
  width: 50,  
  height: 50,
  resizeMode: 'cover',
},
});

export default LoginScreen;