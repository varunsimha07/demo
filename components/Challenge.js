import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView ,ScrollView,Switch ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import Dates from './Dates';

import DateRangePicker from "react-native-daterange-picker";



const [prompt,setprompt]=useState(false)
function Challenge({navigation,route}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);if(isEnabled===true){alert("you have choosed to make this challenge public")};
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const selectedExs=route.params?.post
    const selectedicon= route.params ?.ic
    const icons=[require('../assets/icon1.png'),require('../assets/icon2.png'),require('../assets/icon3.png'),require('../assets/icon4.png')]
    let i =parseInt(selectedicon)
    const [ChallengeName, setChallengeName ] = React.useState('');
    const [dos, setdos ] = React.useState('');
    const [rewards, setrewards ] = React.useState('');
    const [exercises,setexercises]=React.useState('')
    let ans="";
    let selarr=[];
    const temp=["jumping jacks","squats","pushups","pullups","stomach crunches","head stand","shoulder stand","sun salutation"]
    if (route.params){
    console.log(typeof route.params.post)}
  
      if (route.params && route.params.post){
        let i;
        let arr=route.params.post
        for(i=0;i<arr.length;i++)
        {
          if(arr[i]===true){
            selarr.push(temp[i])
            ans=ans+temp[i]
            console.log(i)
          }
        }
      };
    
  
  
    return (
      <View style={styles.container}>
  
  
        <View style={styles.cancel}>
          <Button style={styles.cancelbutton} icon="cancel" />
        </View>
        
        <View style={styles.profile}>
          <Text >Challenge</Text>
          <View  style={styles.icon}>
          <TouchableOpacity onPress={()=>navigation.navigate("Images")}>
              
          {selectedicon ? <Avatar.Image  size={50} source={icons[i-1]} /> : <Avatar.Image  size={50} source={require('../assets/icon.png')} />}
          </TouchableOpacity>
  
          </View>
          
        </View>
  
  
        <ScrollView style={styles.scroll}>
  
          
  
        <View style={styles.one}>
          <Text style={styles.text}>Challenge Name</Text>
          <TextInput   style={styles.field} value={ChallengeName} onChangeText={setChallengeName} />
  
          <Text style={styles.text}>Select Date Range</Text>
        <TextInput right={<TextInput.Icon name="camera" onPress={<Dates setStartDate = { setStartDate} setEndDate={setEndDate}/>} />} style={styles.field} Type="outlined" />
          
  
          <Text style={styles.text}>Select Exercise</Text>
          
          {selarr.length>0 ?
          selarr.map((item)=>(
          <View style={{backgroundColor:'blue'}}>
          <Text style={{backgroundColor:'red',alignItems:'stretch'}}>{item}</Text>
          </ View>
          
          
          )
          
          )
          
          :
          <TextInput value={ans} right={<TextInput.Icon name="camera" onPress={()=>navigation.navigate("Exercise")}   />} style={styles.field} Type="outlined" />
          }
        </View>
  
          <View style={styles.two}>
          <Text style={styles.text}>Do's and Dont's(optional)</Text>
          <TextInput  numberOfLines={5} style={styles.field} value={dos} onChangeText={setdos} />
          <Text style={styles.text}>Rewards(optional)</Text>
          <TextInput  placeholder="blah" numberOfLines={5} style={styles.field}  value={rewards} onChangeText={setrewards}/>
  
          <View style={styles.switch}>
            <Text style={styles.switchtext}>
              Public Challenge
            </Text>
                <Switch 
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                  />
          </View>
  
          
        </View>
        
        <View>
        <Button  mode="contained" onPress={()=>(ChallengeName!=="" && selectedExs!=null) ? navigation.navigate({name:"Endscreen",params:{cname:ChallengeName,do:dos,rewards:rewards,merge:true,exes:selectedExs,icon:selectedicon}}) : alert("please fill the details")
      } >
        Create Challenge
          </Button>
        </View>
  
        </ScrollView>
  
  
        
  
  
      </View>
    );
  }

export default Challenge
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