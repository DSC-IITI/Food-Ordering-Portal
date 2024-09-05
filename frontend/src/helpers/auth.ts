const API_BACKEND = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_BACKEND}/api/v1`;

import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { apiCall } from "./api";

export interface LoginPostData {
  username: string;
  password: string;
}

export interface UserDetailsFC {
    pk: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  }

export async function login(data: LoginPostData) {
    const res = await apiCall("/oauth/token", {method: "POST", body: {...data, grant_type: "password", client_secret: "prince1234", client_id: "Zai6FR4SCfzCQTNOEnNcBaRF0qNCkezrPoOSolff"}, isAuth: false});
    console.log(res);
    setCookie("accessToken", res.access_token);
    setCookie("refreshToken", res.refresh_token);
    return res;
}

export async function getUserDetails() {
    return apiCall("/auth/user", {method: "GET"});
}
