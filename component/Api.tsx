import React from 'react-native';
import {useQuery} from 'react-query';
import {View,Text,ScrollView,TouchableOpacity} from 'react-native';
import axios from 'axios';



function Api(){
    const {data}=useQuery(['activity'],async()=>{
        const res=await axios.get('https://fakestoreapi.com/products')  
        return res
    })
    return(
        <View>
            <ScrollView>
            <View>
                {
                    data?.data.map((item:any)=>{
                        return(
                            <View style={{borderWidth:2,borderColor:'grey',margin:20,borderRadius:10,padding:10}}>
                            
                                <Text style={{fontWeight:'bold',color:'black',fontSize:18}}>{item.title}</Text>
                                <Text style={{color:'brown',marginTop:5}}>{item.category}</Text>
                                <Text style={{marginTop:5,marginBottom:5}}>₹{item.price}</Text>
                                <Text style={{backgroundColor:'yellow',width:60,padding:5, borderRadius:10,color:'green'}}>{item.rating.rate} {item.rating.count}</Text>
                                <Text style={{marginTop:5}}>{item.description}</Text>
                                <View style={{flexDirection:'row', marginTop:10}}>
                                <TouchableOpacity style={{backgroundColor:'brown', borderRadius:7,width:150,margin:10,justifyContent:'center',alignItems:'center'}}><Text style={{color:'white'}}>Buy Now</Text></TouchableOpacity>
                                <TouchableOpacity style={{borderWidth:2,borderColor:'brown',padding:10, borderRadius:7,width:150,margin:10,justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontWeight:'bold'}}>Go to Cart</Text></TouchableOpacity>

                                    </View>
                                </View>
                        )

                    })
                }
            </View>
            </ScrollView>

        </View>
    )
}
export default Api;