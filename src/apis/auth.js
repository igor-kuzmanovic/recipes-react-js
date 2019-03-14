import axios from "axios";
import { SERVER_URL } from "../constants/server";

export default axios.create({
    baseURL: `${SERVER_URL}/api`,
    headers: { Accept: "application/json" }
});
