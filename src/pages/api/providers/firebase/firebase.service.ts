/* eslint-disable @typescript-eslint/no-explicit-any */
import { initializeApp } from 'firebase/app'
import {
  OAuthCredential,
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  AuthCredential,
} from 'firebase/auth'

const app = initializeApp({
  apiKey: 'AIzaSyDXyNz_StQMyTM-r1kyu69rZnFKfdUHTSI',
  appId: '1:823964210942:web:f7512b586affbf3f7577af',
  messagingSenderId: '823964210942',
  projectId: 'despezzas',
  authDomain: 'despezzas.firebaseapp.com',
  storageBucket: 'despezzas.appspot.com',
  measurementId: 'G-FQHQK3HGYQ',
})

const auth = getAuth(app)

export interface LoginCredentials {
  providerId: string
  idToken: string
  accessToken: string
}

export class FirebaseService {
  async signInWithCredential(credential: LoginCredentials) {
    let provider: AuthCredential

    if (credential.providerId === 'google.com') {
      provider = GoogleAuthProvider.credential(
        credential.idToken,
        credential.accessToken
      )
    }

    if (credential.providerId === 'apple.com') {
      provider = OAuthCredential.fromJSON(credential)
    }

    const result = await signInWithCredential(auth, provider)

    const user = result?.user?.displayName
      ? result.user
      : (result as any)?.['_tokenResponse']

    return {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      auth_provider: credential.providerId,
      auth_provider_uid: result.user.uid,
    }
  }
}
