import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Output from './components/Output';
import Search from './components/Search';
import { API, KEY, LIMITS } from './config';

export default function App() {
  const [val, setVal] = useState('')
  const [giphys, setGiphys] = useState([])

  const searchGiphyByName = async ()=>{
    let url = API+val+KEY+LIMITS
    const req = await fetch(url)
    const res = await req.json()
    console.log(res)
    setGiphys(res.data)
    setVal('')
  }
  return (
    <View style={styles.container}>
    <Search
      search={searchGiphyByName}
      val={val}
      setVal={setVal}
    />
    <Output
      data={giphys}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#b0c4de`,
    alignItems: 'center',
    justifyContent: 'center',
  },
});