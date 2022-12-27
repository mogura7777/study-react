import Head from "next/head";
import { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {

  useEffect(() => {
    console.log('TTTTTTTTTTTTTTTTTTT');
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
      <Main page="index" />
      <Footer />
    </div>
  );
}
