import Environment from "../../Config";

const baseUrl = Environment.REACT_APP_API_URL + "/api";

const URLS = {
  LogIn: `${baseUrl}/log-in/`,
  SignUp: `${baseUrl}/sign-up/`,
};

export default URLS;
