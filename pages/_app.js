import React, { useEffect } from "react";
import App from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../Component/Navbar";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
} from "wagmi/chains";

if (!"2437b6ee508a24481ec9cfa2ff6ddadf") {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

const projectId = "2437b6ee508a24481ec9cfa2ff6ddadf";

// 2. Configure wagmi client
const chains = [
  polygonMumbai,
  goerli,
  arbitrum,
  avalanche,
  bsc,
  fantom,
  optimism,
  polygon,
];
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains);

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WagmiConfig>
  );
};

export default MyApp;
