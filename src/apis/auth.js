import axios from "axios";
import { SERVER_URL } from "../constants/server";

export default axios.create({
    baseURL: `${SERVER_URL}`,
    headers: { Accept: "application/json" }
});
