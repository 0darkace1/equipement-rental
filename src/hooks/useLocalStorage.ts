"use client";

const useLocalStorage = () => {
  const removeItem = async (key: string) => {
    await localStorage.removeItem(key);
  };

  const setItem = async (key: string, value: any) => {
    await localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = async (key: string) => {
    const value = await localStorage.getItem(key);

    return value ? JSON.parse(value) : null;
  };

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
