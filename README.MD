# React-Native-CrossDeploy

“Learn once, write anywhere.”

This project is a curation of resources and example app to demonstrate the flexibility of the React Native Ecosystem.


This project allows a shared codebase to be deployed to the following platforms:

| Platform              | Tested | Via                  | Command                                           | Notes/Links  |
| --------------------- | ------ | -------------------- | ------------------------------------------------- | ------------ |
| Android               | NO     | react-native         | `react-native run-android`                        |
| Android TV            | NO     | react-native         | `react-native run-android`                          |https://facebook.github.io/react-native/docs/building-for-apple-tv.html
| iOS                   | YES    | react-native         | `react-native run-ios`                            |
| tvOS                  | NO     | react-native         | `react-native run-ios--simulator="Apple TV 1080p"`  |https://facebook.github.io/react-native/docs/building-for-apple-tv.html
| Web                   | YES    | react-native-web     | `react-scripts start`                             | Depending on your project structure you may need to modify an internal node_module config file (see fixrs.js and the start:web script in this project's package.json)
| Windows 10            | YES    | react-native-windows | `react-native run-windows`                        |
| Windows Phone         | NO     | react-native-windows | `react-native run-windows`                        |
| Xbox One              | NO     | react-native-windows | (see notes)                                       | Solution must be run from Visual Studio targeting a Remote Machine (x64) which is an Xbox One with Developer Mode enabled.  https://docs.microsoft.com/en-us/windows/uwp/xbox-apps/getting-started
| Windows 8.1 and below | YES    | react-native-windows | `react-native run-wpf`                            |

# Install Commands
Some platforms might need additional effort to generate the necessary project files. These have already been done for you for this repo. Here are some notes on how you can generate these files from scratch in your existing react-native project.
## Windows UWP (Windows 10, Windows Phone, Xbox One)
```
npm install --save-dev rnpm-plugin-windows
react-native windows
```
## Windows WPF (Windows 8.1, any .NET 4.6)
```
npm install --save-dev rnpm-plugin-windows
react-native wpf
```
## React Native Web
```
yarn add react react-dom react-scripts react-art react-native-web
yarn add --dev babel-plugin-react-native-web babel-preset-react-native@4.0.0
```
