import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LeaderBoard from "../components/LeaderBoard";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Afriguild</title>
        <meta name="description" content="Top players on Afriguild this week" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />  
        <LeaderBoard/>
      </main>
    </div>
  );
};

export default Home;
