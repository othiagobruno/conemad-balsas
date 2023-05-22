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
  apiKey: 'AIzaSyCkAtq6G-2wNNcyguA7TNH7MG9yu_pZuHM',
  appId: '1:1013324345184:android:cbe4dfcc23cb6789e8b805',
  messagingSenderId: '1013324345184',
  projectId: 'spalhe-app-prod',
  storageBucket: 'spalhe-app-prod.appspot.com',
  authDomain: 'spalhe-app-prod.firebaseapp.com',
})

const auth = getAuth(app)

export class FirebaseService {
  async signInWithCredential(credential: any) {
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
