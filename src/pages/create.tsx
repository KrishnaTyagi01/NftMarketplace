import type { NextPage } from "next";
import CreationPage from "../modules/CreationPage";
import { useRouter } from "next/router";

const Create: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }
  return <CreationPage />;
};

export default Create;
