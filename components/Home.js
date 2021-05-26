import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView ,ScrollView,Switch ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'


function Home({navigation,route}) {
    return (
      <SafeAreaView>
        <View style={{backgroundColor:"red"}}>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Challenge')}>
        Press me
        </Button>
        {route.params ? <Text>{route.params.cname}</Text> : <Text>error</Text>}
        {route.params ? console.log(route.params) : console.log("not found")}
        </View>
      </SafeAreaView>
  
    )
  }

export default Home

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