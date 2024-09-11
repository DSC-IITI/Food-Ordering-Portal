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

export interface RegisterPostData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export async function register(data: RegisterPostData) {
  const response = await fetch(`${BASE_URL}/auth/registration/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
}

export async function login(data: LoginPostData) {
  // Construct the URL-encoded body string
  const bodyParams = new URLSearchParams({
    grant_type: 'password',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
    username: data.username,
    password: data.password,
  });

  console.log(bodyParams.toString());

  try {
    const response = await fetch('http://localhost:8000/api/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyParams.toString(), // Convert to URL-encoded string
    });

    const res = await response.json();
    console.log(res);

    if (response.ok) {
      setCookie('accessToken', res.access_token);
      setCookie('refreshToken', res.refresh_token);
    }

    return response.ok;
  } catch (error) {
    console.error('Error during login:', error);
    return false;
  }
}

export async function logout() {
  deleteCookie('accessToken');
  deleteCookie('refreshToken');
  window.location.reload()
}

export async function getUserDetails() {
    return apiCall("/auth/user", {method: "GET"});
}

export async function isLoggedIn () {
  const user = await apiCall("/auth/user", {method: "GET"})
  return user;
}
