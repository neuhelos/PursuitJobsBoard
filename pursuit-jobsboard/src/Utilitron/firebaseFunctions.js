import firebase from 'firebase'

export const signOut = () => {
    return firebase.auth().signOut()
}

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email,password)
}

export const signUp = (email,password) => {
    return firebase.auth().createUserWithEmailAndPassword(email,password)
}

export const getFirebaseIdToken = () => firebase.auth().currentUser.getIdToken(false)

