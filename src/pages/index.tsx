import HomePage from "modules/HomePage";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }
  return <HomePage />;
};

export default Home;
