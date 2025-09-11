import axios from "axios";
import { Platform } from "react-native";

const ANDROID_LOCALHOST = "10.0.2.2";

function getBaseURL() {
  const pcLocalIp = process.env.EXPO_PUBLIC_PC_LOCAL_IP;

  if (Platform.OS === "ios") {
    return `http://${pcLocalIp}:4000`;
  }

  if (Platform.OS === "android") {
    return __DEV__ ? `http://${ANDROID_LOCALHOST}:4000` : `http://${pcLocalIp}:4000`;
  }

  return "http://localhost:4000";
}

export const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  }
})