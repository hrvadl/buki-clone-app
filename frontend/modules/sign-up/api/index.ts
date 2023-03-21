import Environment from "@/Config";
import apiRequest from "@/lib/fetch";
import defaultValues from "../mocks/form-default";

export type SignUpProps = typeof defaultValues & {
  role: 0 | 1;
};

const SIGN_UP_URLS = {
  SignUp: `${Environment.REACT_APP_API_URL}/api/user/auth/sign-up/`,
};

export async function signUp(props: SignUpProps) {
  return apiRequest.post(SIGN_UP_URLS.SignUp, {
    body: JSON.stringify(props),
  });
}
