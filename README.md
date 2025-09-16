# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

0. Crate .env file or set `EXPO_PUBLIC_PC_LOCAL_IP` variable in .env

   <br/>

   if you want to find `EXPO_PUBLIC_PC_LOCAL_IP`,

   in cmd

   ```bash
   ipconfig
   ```

   <br/>

   then, find IPv4 address (ex. 190.X.X.X) and set its value to the `EXPO_PUBLIC_PC_LOCAL_IP` variable.

   ```bash
   #.env
   EXPO_PUBLIC_PC_LOCAL_IP=190.X.X.X
   ```

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

   after change .env or if you have to remove cache, using `-c` option

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

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
