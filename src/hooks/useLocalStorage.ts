import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`localStorage'dan ${key} okunamadı:`, error);
    }
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    if (!isClient) return;
    
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`localStorage'a ${key} yazılamadı:`, error);
    }
  };

  return [storedValue, setValue];
};
