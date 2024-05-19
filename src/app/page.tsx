'use client'

import { useAuth } from "@/context/auth";
import styles from "./page.module.css";

export default function Home() {
  const {user, login, logout} = useAuth()
  return (
    <main className={styles.main}>
      <h1>Context Api</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button 
        onClick={() => login({name: 'Cledson', email: 'teste'})}
      >Login</button>
      <button 
        onClick={logout}
      >Logout</button>
    </main>
  );
}
