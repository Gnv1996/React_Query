import React from "react";
import { QueryClientProvider,QueryClient } from "react-query";
import {View,Text} from 'react-native';
import Api from './component/Api'


function App():JSX.Element{
  const client=new QueryClient()
  return(
    <QueryClientProvider client={client}>
    <View>
      <Text style={{textAlign:'center',alignItems:'center',marginTop:30,color:'black',fontSize:25,fontWeight:'bold'}}>Welcome in React Query</Text>
    <Api/>
    </View>
    </QueryClientProvider>

  )
}
export default App;