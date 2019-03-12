import axios from "axios";
import { serverURL } from "../constants/server";

export default axios.create({
    baseURL: `${serverURL}`,
    headers: { Accept: "application/json" }
});