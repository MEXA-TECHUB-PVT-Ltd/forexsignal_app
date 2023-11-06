import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { orange } from '../assets/Colors';

const SuggestionBox = ({ data, query, onSuggestionSelect }) => {
  // Filter data based on the query and get up to 5 matching items
  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ marginHorizontal: wp(8), marginTop: hp(3) }}>
      <FlatList
        data={filteredData.slice(0, 5)} // Show up to 5 matching items
        style={{ flexGrow: 1, borderWidth: 1, borderColor: orange, borderRadius: wp(3) }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSuggestionSelect(item)}
            style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}
          >
            <Text>
              {highlightMatchingText(item, query)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const highlightMatchingText = (text, query) => {
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <Text key={index} style={{ color: 'black', fontWeight: 'bold' }}>
        {part}
      </Text>
    ) : (
      <Text key={index}>{part}</Text>
    )
  );
};

export default SuggestionBox;
