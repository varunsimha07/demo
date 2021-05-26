import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View ,SafeAreaView ,ScrollView,Switch ,Image,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { Card, ListItem, Icon } from 'react-native-elements'



function Exercise({navigation,route})
{ 

  const [exs,setexs]=useState([false,false,false,false,false,false,false,false])
  const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {}); 

  const changecolor1= ()=>{ setexs([!exs[0],exs[1],exs[2],exs[3],exs[4],exs[5],exs[6],exs[7]])}
  const changecolor2= ()=>{ setexs([exs[0],!exs[1],exs[2],exs[3],exs[4],exs[5],exs[6],exs[7]])}
  const changecolor3= ()=>{ setexs([exs[0],exs[1],!exs[2],exs[3],exs[4],exs[5],exs[6],exs[7]])}
  const changecolor4= ()=>{ setexs([exs[0],exs[1],exs[2],!exs[3],exs[4],exs[5],exs[6],exs[7]])}
  const changecolor5= ()=>{ setexs([exs[0],exs[1],exs[2],exs[3],!exs[4],exs[5],exs[6],exs[7]])}
  const changecolor6= ()=>{ setexs([exs[0],exs[1],exs[2],exs[3],exs[4],!exs[5],exs[6],exs[7]])}
  const changecolor7= ()=>{ setexs([exs[0],exs[1],exs[2],exs[3],exs[4],exs[5],!exs[6],exs[7]])}
  const changecolor8= ()=>{ setexs([exs[0],exs[1],exs[2],exs[3],exs[4],exs[5],exs[6],!exs[7]])}
  
const move = ()=>{ if (countOccurrences(exs).false!==8){navigation.navigate({name:'Challenge',params :{post: exs},merge:true})} else{alert("please choose a exerxise")} }
  
  return(
    
    
      
      <SafeAreaView style={exer.container} >

        <View style={exer.text}>
          <Text style={{fontSize:20,marginBottom:10}}>Select Exercise(s)</Text>
          <Text style={{marginBottom:10}} >You can choose a maximum of 3</Text>
        </View>
        <ScrollView >

        <View style={exer.boxes} >

          <View style={{flex:1,backgroundColor:'#fff'}}>
              <TouchableOpacity onPress={changecolor1}>

                <View > 
                    <Image style={exer.image} source={require('../assets/pushups.jpg')} />
                </View>

              </TouchableOpacity>
              {exs[0] ? 
              <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:15,marginLeft:8}}>Jumping Jacks</Text>

             </View>
              
              :
              <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
                 <Text style={{fontSize:15,marginLeft:8}}>Jumping Jacks</Text>

                </View>}
               
          </View>
          <View style={{flex:1,backgroundColor:"#fff"}}>
                            <TouchableOpacity onPress={changecolor2}>

                  <View > 
                      <Image style={exer.image} source={require('../assets/pushups.jpg')} />
                  </View>

                  </TouchableOpacity>
                  {exs[1] ? 
                  <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:15,marginLeft:8}}>Squats</Text>

                  </View>

                  :
                  <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:15,marginLeft:8}}>Squats</Text>

                  </View>}
              </View>

        </View>
        


      {/* second row  */}

      <View style={exer.boxes} >

<View style={exer.cell}>
    <TouchableOpacity onPress={changecolor3}>

      <View > 
          <Image style={exer.image} source={require('../assets/pushups.jpg')} />
      </View>

    </TouchableOpacity>
    {exs[2] ? 
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
    <Text style={{fontSize:16,marginLeft:8}}>Push Ups</Text>

   </View>
    
    :
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
       <Text style={{fontSize:16,marginLeft:8}}>Push Ups</Text>

      </View>}
     
</View>
<View style={exer.cell}>
                  <TouchableOpacity onPress={changecolor4}>

        <View > 
            <Image style={exer.image} source={require('../assets/pushups.jpg')} />
        </View>

        </TouchableOpacity>
        {exs[3] ? 
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Pull Ups</Text>

        </View>

        :
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Pull Ups</Text>

        </View>}
    </View>

</View>



{/* third row */}

<View style={exer.boxes} >

<View style={exer.cell}>
    <TouchableOpacity onPress={changecolor5}>

      <View > 
          <Image style={exer.image} source={require('../assets/pushups.jpg')} />
      </View>

    </TouchableOpacity>
    {exs[4] ? 
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
    <Text style={{fontSize:16,marginLeft:8}}>Stomach Crunches</Text>

   </View>
    
    :
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
       <Text style={{fontSize:16,marginLeft:8}}>Stomach Crunches</Text>

      </View>}
     
</View>
<View style={exer.cell}>
                  <TouchableOpacity onPress={changecolor6}>

        <View > 
            <Image style={exer.image} source={require('../assets/pushups.jpg')} />
        </View>

        </TouchableOpacity>
        {exs[5] ? 
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Headstand</Text>

        </View>

        :
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Headstand</Text>

        </View>}
    </View>

</View>



{/* fourth row */}
<View style={exer.boxes} >

<View style={exer.cell}>
    <TouchableOpacity onPress={changecolor7}>

      <View > 
          <Image style={exer.image} source={require('../assets/pushups.jpg')} />
      </View>

    </TouchableOpacity>
    {exs[6] ? 
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
    <Text style={{fontSize:16,marginLeft:8}}>Shoulder Stand</Text>

   </View>
    
    :
    <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
       <Text style={{fontSize:16,marginLeft:8}}>Shoulder Stand</Text>

      </View>}
     
</View>
<View style={exer.cell}>
                  <TouchableOpacity onPress={changecolor8}>

        <View > 
            <Image style={exer.image} source={require('../assets/pushups.jpg')} />
        </View>

        </TouchableOpacity>
        {exs[7] ? 
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"orange",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Sun Salutation</Text>

        </View>

        :
        <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,backgroundColor:"#fff",alignSelf:'center',width:'85%',height:30,justifyContent:'center',alignItems:'flex-start'}}>
        <Text style={{fontSize:16,marginLeft:8}}>Sun Salutation</Text>

        </View>}
    </View>

</View>
</ScrollView>

        <View>
          <Button icon="camera" mode="contained"  onPress={move
            
            
          }
             >submit</Button>
        </View>

       
        
        

      </SafeAreaView>
    
  )
  }
export default Exercise

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