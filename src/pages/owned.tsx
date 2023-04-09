import OwnedPage from "modules/OwnedPage";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Owned: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Data is loading</h1>;
  }
  return <OwnedPage />;
};

export default Owned;
