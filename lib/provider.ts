// import { signInWithEmailAndPassword } from "firebase/auth";
// import { firebaseAuth } from "../lib/config";

// export const loginWithEmail = async (email: string, password: string) => {
//   try {
//     const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
//     const { email: displayEmail } = resp.user;
//     console.log(resp.user);
//     return {
//       ok: true,
//       email: displayEmail
//     }
//   } catch (error) {
//     return {
//       ok: false,
//       message: 'Email o contraseña incorrectos'
//     }
//   }
// }

// export const logout = async () => {
//   console.log("logout");
//   return await firebaseAuth.signOut();
// }