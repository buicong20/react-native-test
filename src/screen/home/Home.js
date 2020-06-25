import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import ItemSwipe from './ItemSwipe';
import Carousel from 'react-native-snap-carousel';
import {getInfo, fetch} from 'core/modules/app';
import {addFavourite} from 'modules/favourite';
const data = [{id: 0}, {id: 1}, {id: 2}];
const {width, height} = Dimensions.get('screen');
const Home = ({getInfo, info, addFavourite, fetch}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    fetch();
  }, []);
  const _renderItem = ({item, index}) => {
    return <ItemSwipe index={item.id} />;
  };
  const checkSwiped = (i) => {
    switch (slideIndex) {
      case 0:
        if (i === 2) addFavourite(info[slideIndex]);
        break;
      case 1:
        if (i === 0) addFavourite(info[slideIndex]);
        break;
      default:
        if (i === 1) addFavourite(info[slideIndex]);
        break;
    }
  };
  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.viewHeader} />
      <View style={{height: height * 0.5}}>
        <Carousel
          layout={'tinder'}
          data={data}
          renderItem={_renderItem}
          sliderWidth={width}
          itemWidth={width - 20}
          loop={true}
          contentContainerCustomStyle={{height: height * 0.5}}
          onSnapToItem={(i) => {
            checkSwiped(i);
            getInfo(slideIndex);
            setSlideIndex(i);
          }}
          loopClonesPerSide={10}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 20,
  },
  viewHeader: {
    height: 100,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
  },
});
const mapStateToProps = (state) => ({
  info: state.app?.list,
  favourite: state.favourite?.list,
});
const mapDispatchToProps = (dispatch) => ({
  getInfo: (data) => dispatch(getInfo(data)),
  addFavourite: (data) => dispatch(addFavourite(data)),
  getFavourite: () => dispatch(getFavourite()),
  fetch: () => dispatch(fetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
