import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView ,ScrollView,Switch ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'







function Images({navigation,route}){
  const imageList=[{uri:require('../assets/icon.png'),key:'1'},{uri:require('../assets/icon.png'),key:'2'},{uri:require('../assets/icon.png'),key:'3'},{uri:require('../assets/icon.png'),key:'4'}];
  const [sel,setsel]=useState('1')
  const sel1=()=>setsel('1')
  const sel2=()=>setsel('2')
  const sel3=()=>setsel('3')
  const sel4=()=>setsel('4')
  
  return (
    <SafeAreaView style={{flex:1,marginLeft:20,marginRight:20}}>
      <View style={{flexDirection:'row',justifyContent:'space-between', backgroundColor:"red"}} >
      <Text  >
        Select Icon for the Challenge</Text>
      <Button icon="cancel" style={{marginRight:-20}} onPress={()=>navigation.navigate("Challenge")}></Button>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View>
        <TouchableOpacity onPress={sel1}>
         
          {sel==='1' ?  <Image style={{width:75,height:75,borderWidth:3,borderColor:"orange"}} source={require('../assets/icon1.png')}></Image> : <Image style={{width:75,height:75}} source={require('../assets/icon1.png')}></Image>}
        </TouchableOpacity>

      </View>
      <View>
        <TouchableOpacity  onPress={sel2}>
        {sel==='2' ?  <Image style={{width:75,height:75,borderWidth:3,borderColor:"orange"}} source={require('../assets/icon2.png')}></Image> : <Image style={{width:75,height:75}} source={require('../assets/icon2.png')}></Image>}

        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={sel3}>
        {sel==='3' ?  <Image style={{width:75,height:75,borderWidth:3,borderColor:"orange"}} source={require('../assets/icon3.png')}></Image> : <Image style={{width:75,height:75}} source={require('../assets/icon3.png')}></Image>}

        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity  onPress={sel4}>
        {sel==='4' ?  <Image style={{width:75,height:75,borderWidth:3,borderColor:"orange"}} source={require('../assets/icon4.png')}></Image> : <Image style={{width:75,height:75}} source={require('../assets/icon4.png')}></Image>}

        </TouchableOpacity>
      </View>
      </View>
      <View>
      <Button  mode="contained" onPress={()=>navigation.navigate({name:"Challenge",params:{ic:sel}})} >
      Update icon
        </Button>
      </View>

      
    </SafeAreaView>
  )

}

export default Images;
const exer =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
      marginLeft:15,
      marginRight:15
    },
    text:{
      marginTop:30
    },
    
    image:{
      
      height: 130,
      width: '85%',
      marginTop:10,
      alignSelf:'center',
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    
      
    
      
    },
    box:{
      flex:1, 
      height:'50%',
      width:"50%"
    },
    boxes:{
      height:'25%',
      width:'100%',
      backgroundColor:"red",
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:2,
    },
    cell:{
      flex:1,backgroundColor:"#fff"
    }
    });
    const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25
      },
      one:{
        flex:1,
        width:'100%',
        
       
      },
      two:{
        paddingTop:50,
     
      },
      field:{
    
      },
      text:{
        paddingTop:10,
        paddingBottom:10
      },
      cancel:{
       width:'100%',
       
    
      },
      cancelbutton:{
        alignItems:'flex-end',
        marginRight:-25
        
      },
      scroll:{
        width:'100%'
      },
      profile:{
     
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
        width:'100%'
      },
      profilepicture:{
        padding:5,
        marginRight:0
        
      },
      switch:{
        marginTop:10,
        marginBottom:10,
       
        flexDirection:"row",
        justifyContent:'space-between'
        
      },
      switchtext:{
        marginTop:5,
       
      }
      
    });