import React, {useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';

const MainScreen = () => {
  const {navigate} = useNavigation();

  const handleEventListener = useCallback(
    event => {
      navigate('Home', {screen: event});
    },
    [navigate],
  );

  useEffect(() => {
    const listener = EventRegister.addEventListener(
      'NativeOutsideModule',
      handleEventListener,
    );

    return () => EventRegister.removeEventListener(listener);
  }, [handleEventListener]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Clipboard')}>
          <Text>Modulo de teste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Home')}>
          <Text>Modulo de Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#31639c',
  },
  container: {
    flex: 1,
    backgroundColor: '#31639c',
  },
  button: {
    backgroundColor: 'white',
    height: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default MainScreen;
