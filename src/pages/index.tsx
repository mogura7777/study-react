import Head from "next/head";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1)
  const handlClick = (e) => {
    setCount(count => count + 1);
  }
  useEffect(() => {

    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>index</title>
      </Head>
      <Header></Header>
      <h1>{count}</h1>
      <button onClick={handlClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
