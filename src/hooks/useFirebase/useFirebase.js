import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";
import initializeFirebase from '../../Pages/Login/Firebase/firebase.init';



// initialize firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, userName, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                saveUser(email, userName, 'POST');
                const destination = location?.state?.form || '/';
                history.replace(destination);
                setAuthError('');

                const newUser = { email, displayName: userName }
                setUser(newUser);

                updateProfile(auth.currentUser, {
                    displayName: userName,
                }).then(() => {

                }).catch((error) => {


                })
                    .catch((error) => {
                        setAuthError(error.message);
                        console.log(error);
                    })

            })
            .finally(() => setIsLoading(false));
    };


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const destination = location?.state?.form || '/';
                history.replace(destination);

                setAuthError('');
                saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));


    }


    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        fetch('https://lit-plains-82210.herokuapp.com/users', {
            //sending data thats why POST
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        //show the data in UI
    }


    return {
        user,
        isLoading,
        authError,
        setUser,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;