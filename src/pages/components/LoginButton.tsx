import { useGoogleLogin, GoogleLogin } from '@react-oauth/google';

export default function LoginButton() {
    
const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError: error => console.log(error),
    ux_mode: "redirect",
    flow: "auth-code",
    redirect_uri: "http://localhost:3000/api/graphql"
})
    return (
        <button onClick={() => {login();
        console.log("login clicked");
        }}>Login with Google</button>
    );
}