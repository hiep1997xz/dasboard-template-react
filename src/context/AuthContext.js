import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import auth from '../firebase'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  // register account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login account
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //login gg
  const loginGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  //login fb
  const loginFacebook = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const uns = onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth)
    })
    return () => {
      uns()
    }
  }, [])

  const logOut = () => {
    signOut(auth)
  }

  return (
    <AuthContext.Provider
      value={{ createUser, login, loginGoogle, loginFacebook, logOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
