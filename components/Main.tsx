import styles from "../styles/Home.module.css";
import { Headline } from "../components/Headline";
import { Links } from "./Links";

export function Main(props: { page: string }) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Links />
    </main>
  );
}
