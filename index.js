import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('reactnativecrossdeploy', () => App);

Platform.OS === 'web' &&
  AppRegistry.runApplication("reactnativecrossdeploy", {
    rootTag: document.getElementById("root")
  });
