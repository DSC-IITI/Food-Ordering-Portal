const API_BACKEND = process.env.NEXT_PUBLIC_API_URL;
const BASE_URL = `${API_BACKEND}/api/v1`;

function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export interface LoginPostData {
  username: string;
  email: string;
  password: string;
}

export interface RegisterPostData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface LoginApiResponse {
  key: string;
}

export async function login(data: LoginPostData) {
  const csrftoken = getCookie("csrftoken")!;
  const response = await fetch(`${BASE_URL}/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrftoken,
    },
    body: JSON.stringify(data),
  });
  const res: LoginApiResponse = await response.json();
  return response.ok;
}

export async function logout() {
  var csrftoken = getCookie("csrftoken");
  if (!csrftoken) {
    csrftoken = "";
  }
  const res = await fetch(`${BASE_URL}/auth/logout/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": csrftoken,
    },
    credentials: "include",
  });
  if (res.ok) {
    localStorage.setItem("token", "");
  }
  return res.ok;
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
