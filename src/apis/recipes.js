import axios from "axios";
import { serverURL } from "../constants/server";

const authorization = localStorage.getItem("token")
    ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
    : null;

export default axios.create({
    baseURL: `${serverURL}/api`,
    headers: { Accept: "application/json", ...authorization }
});
