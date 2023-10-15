import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./config";

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
}