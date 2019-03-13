import axios from "axios";
import { SERVER_URL } from "../constants/server";

const axiosClient = () => {
    const defaultOptions = {
        baseURL: `${SERVER_URL}/api`,
        headers: {
            Accept: "application/json"
        }
    };

    const client = axios.create(defaultOptions);

    client.interceptors.request.use(
        function(config) {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            } else if (config.headers.Authorization) {
                delete config.headers.Authorization;
            }
            return config;
        },
        function(error) {
            return Promise.reject(error);
        }
    );

    return client;
};

export default axiosClient();
