import AsyncStorage from "@react-native-async-storage/async-storage";

const cache = new Map<string, unknown>();

const add = async <T>(key: string, data: T) => {
  cache.set(key, data);
  const json = JSON.stringify(data);
  AsyncStorage.setItem(key, json);
};

const read = async (key: string) => {
  const cached = cache.get(key);
  if (cached) return cached;

  const data = await AsyncStorage.getItem(key);
  if (!data) return null;

  return JSON.parse(data);
};

const remove = async (key: string) => {
  cache.delete(key);
  AsyncStorage.removeItem(key);
};

const storage = {
  remove,
  add,
  read,
};

export default storage;
