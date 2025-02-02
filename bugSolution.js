This solution uses MMKV, a high-performance key-value storage engine, as a replacement for AsyncStorage in Expo Go.  It addresses the incompatibility issue by providing a reliable storage mechanism that works across different Expo environments.

```javascript
import * as MMKVStorage from 'react-native-mmkv-storage';

// Initialize MMKVStorage
const mmkv = new MMKVStorage.Loader().initialize();

// Example usage:
async function storeData(key, value) {
  try {
    await mmkv.setStringAsync(key, value);
  } catch (e) {
    console.error('Failed to store data:', e);
  }
}

async function loadData(key) {
  try {
    return await mmkv.getStringAsync(key);
  } catch (e) {
    console.error('Failed to load data:', e);
  }
}

// ... rest of your code
```

Remember to install the MMKV package: `expo install react-native-mmkv-storage` 