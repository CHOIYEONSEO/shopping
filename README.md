# Welcome to the Shopping Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

0. Crate `.env` file or set `EXPO_PUBLIC_PC_LOCAL_IP` variable in `.env`

   <br/>

   if you want to find `EXPO_PUBLIC_PC_LOCAL_IP`,

   in cmd

   ```bash
   ipconfig
   ```

   <br/>

   then, find IPv4 address (ex. `190.X.X.X`) and set its value to the `EXPO_PUBLIC_PC_LOCAL_IP` variable.

   ```bash
   #.env
   EXPO_PUBLIC_PC_LOCAL_IP=190.X.X.X
   ```

   > ⚠️ Do not enter `;` at the end

   <br/>

1. Install dependencies

   ```bash
   npm install
   ```

   <br/>

2. Start the app

   ```bash
   # default, for android studio
   npx expo start
   ```

   ```bash
   # for expo go
   npx expo start --go --tunnel
   ```

   <br/>

   after change `.env` or if you have to remove cache, using `-c` option

   ```bash
   npx expo start -c

   or

   npx expo start --go --tunnel -c
   ```

   <br/>

3. Start the json-server
   ```bash
   npm run mock
   ```
   <br/>

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Tech Stack

- <img src="https://img.shields.io/badge/expo-1C2024?style=for-the-badge&logo=expo&logoColor=white">

- React Navigation (Stack)

- <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">

- React Native Paper

## Main Feature

1. Home (product list)

- Product list view (API integration)
- Search (debounce)
- Category filter
- price sorting

<br/>

2. Product details

- Image gallery (slide)
- Option selection (e.g. color/size)
- Add to cart button
