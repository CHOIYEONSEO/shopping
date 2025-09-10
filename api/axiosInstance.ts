import axios from "axios";
import { Platform } from "react-native";

const ANDROID_LOCALHOST = "10.0.2.2";

export const axiosInstance = axios.create({
  baseURL: Platform.OS === "android" ? `http://${ANDROID_LOCALHOST}:4000` : "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  }
})