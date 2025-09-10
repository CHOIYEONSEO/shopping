import axios from "axios";
import { Platform } from "react-native";

const IOS_LOCALHOST = "";
const ANDROID_LOCALHOST = "10.0.2.2";

function getBaseURL() {
  // if (Platform.OS === "ios") {
  //   return `http://${IOS_LOCALHOST}:4000`;
  // }

  if (Platform.OS === "android") {
    return `http://${ANDROID_LOCALHOST}:4000`;
  }

  return "http://localhost:4000";
}

export const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  }
})