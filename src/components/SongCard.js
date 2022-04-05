import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SongCard = ({ ...props }) => {

  const { id, title, artist, album, year, isSoldOut, imageUrl } = props.item


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text>{props.item.artist}</Text>
            <Text >{props.item.album}</Text>
            <Text style={styles.year}>{year}</Text>
          </View>

          {props.item.isSoldOut == true ? (   //veya direk {props.item.isSoldOut && <view gfdhdh </view )}diyerek direk doğruysa bunu göster diyebiliriz.
            <View style={styles.soldout_container}>
              <Text style={styles.soldout_title}>KAYITLI</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};
export default SongCard;

const styles = StyleSheet.create({
  container: {
    //paddingVertical:0,
    padding: 10,
    flexDirection: "row",
  },
  image: {
    //paddingVertical:50,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    paddingVertical: 10,
    justifyContent: "center",
    flex: 1,
    padding: 10,
    margin: 10,
    ///backgroundColor:'orange',
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  info_container: {
    //backgroundColor:'purple',
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',

  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: "gray",
    fontWeight: "bold",
   
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'green',
    padding: 2,
    borderRadius: 5,


  },
  soldout_title: {
    color: 'green',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',

  },
  
  
  
});
