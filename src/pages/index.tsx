import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [count, setCount] = useState(1)
  const handlClick = useCallback(() => {
    if (count < 10) {
      setCount(e => e + 1);
    }
  }, [count]);


  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";
    return () => {
      // アンマウント時
      document.body.style.backgroundColor = "";
    }
    // []の中の変更時に実行される
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
