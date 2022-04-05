import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './SearchBarstyle';
const SearchBar = props => {
  return (
    <View>
      <TextInput 

        placeholder="Ara..."
        onChangeText={props.onSearch}
      />
    </View>
  );

};
export default SearchBar;