import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from "prop-types";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(googleProvider)
    };

    const githubProvider = new GithubAuthProvider();

    const githubLogin = () => {
        return signInWithPopup(githubProvider)
    };

    const info =  {
        createUser,
        googleLogin,
        githubLogin,
    }

    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
};

AuthProvider.propTypes = {
    children: PropTypes.element
}

export default AuthProvider;