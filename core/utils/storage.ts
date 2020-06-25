import AsyncStorage from '@react-native-community/async-storage';

const FAVOURITE_KEY = 'FAVOURITE_KEY';

export async function merge(key: string, data: any): Promise<void> {
  return await AsyncStorage.mergeItem(key, JSON.stringify(data));
}
export async function set(key: string, data: any): Promise<any> {
  return await AsyncStorage.setItem(key, JSON.stringify(data));
}
export async function get(key: string): Promise<any> {
  return JSON.parse(await AsyncStorage.getItem(key));
}

export async function getFavouriteStore() {
  return await get(FAVOURITE_KEY);
}

export async function setFavouriteStore(user) {
  await set(FAVOURITE_KEY, user);
}

