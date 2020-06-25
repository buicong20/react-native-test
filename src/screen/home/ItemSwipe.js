import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {calendar, lock, person, phone, map} from 'assets';
const dataSelect = [
  {name: 'My name is', icon: person},
  {name: 'My day of birth is', icon: calendar},
  {name: 'My address is', icon: map},
  {name: 'My phone is', icon: phone},
  {name: 'My id is', icon: lock},
];
const ItemSwipe = ({info, index}) => {
  const [selected, setSelected] = React.useState(0);
  useEffect(() => {
    setSelected(0);
  }, [info]);
  const _renderContent = (title, content) => {
    return (
      <View style={styles.viewChild}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textContent}>{content}</Text>
      </View>
    );
  };
  const _resultContent = () => {
    if (info)
      switch (selected) {
        case 0:
          return `${info.name.first} ${info.name.last}`;
        case 1:
          const date = new Date(info.dob * 1000);
          return `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`;
        case 2:
          return info.location.street;
        case 3:
          return info.phone;
        case 4:
          return info.registered;
      }
    return '';
  };
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContent}>
        <View style={styles.viewAvatar}>
          <Image
            source={{uri: info?.picture}}
            style={{width: 160, height: 160, borderRadius: 160 / 2}}
          />
        </View>
        {_renderContent(dataSelect[selected].name, _resultContent())}
        <View style={{alignSelf: 'center', flexDirection: 'row'}}>
          {dataSelect.map((item, i) => (
            <TouchableOpacity
              style={{margin: 10}}
              key={item.name}
              onPress={() => setSelected(i)}>
              <View
                style={[
                  styles.viewTriangle,
                  {borderBottomColor: selected !== i ? 'white' : 'yellowgreen'},
                ]}
              />
              <View
                style={{
                  width: 40,
                  height: 2.5,
                  backgroundColor: selected !== i ? 'white' : 'yellowgreen',
                  marginBottom: 5,
                }}
              />
              <Image
                source={item.icon}
                style={{
                  width: 40,
                  height: 35,
                  tintColor: selected !== i ? '#ccc' : 'yellowgreen',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  viewAvatar: {
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: -170 * 0.7,
  },
  viewContent: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 140,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
    marginBottom: 5,
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  viewTriangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    alignSelf: 'center',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ccc',
    padding: 5,
  },
  textContent: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  viewChild: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginTop: 45,
  },
});

const mapStateToProps = (state, props) => ({
  info: state.app?.list[props.index],
});

export default connect(mapStateToProps, {})(ItemSwipe);
