
import Layout from "../Component/Layout"
import '../styles/globals.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../Component/Navbar"
import LogoutButton from "../Component/LogoutButton"
import NavR from "../Component/navR"
import { TailSpin } from "react-loader-spinner";
import bb1 from "../images/bb1.png";
import bb3 from "../images/bb3.png";
import googlelogo from "../images/google-logo.png";
import githublogo from "../images/github-logo.png";
import twitterlogo from "../images/twitter-logo.png";
import discordlogo from "../images/discord-logo.png";
import { useRouter } from 'next/router' 
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { goerli } from 'wagmi'
import { arbitrum, avalanche, bsc, fantom, mainnet, optimism, polygon, polygonMumbai } from 'wagmi/chains'
import Footer from "../Component/footer"
import { useEffect, useState } from 'react'


// Start un-comment  to run application  without login page 


// if (!"2437b6ee508a24481ec9cfa2ff6ddadf") {
//   throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
// }

// const projectId = "2437b6ee508a24481ec9cfa2ff6ddadf"

// // 2. Configure wagmi client
// const chains = [polygonMumbai,goerli,arbitrum, avalanche, bsc, fantom,optimism, polygon]
// const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors: modalConnectors({ appName: 'web3Modal', chains }),
//   provider
// })

// // 3. Configure modal ethereum client
// export const ethereumClient = new EthereumClient(wagmiClient, chains)

// function MyApp({ Component,  pageProps = {}}) {
    
//   const { pathname } = useRouter()
//   const [ready, setReady] = useState(false)
//   useEffect(() => {
//     setReady(true)
//   }, [])
//   return <>

//   {ready ? (
//       <WagmiConfig client={wagmiClient}>

//   <Layout>
  
//     <Component {...pageProps} />
 
//   </Layout>
//   </WagmiConfig>
//       ) : null}
//       {pathname === '/custom' ? null : (
//         <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
//       )}


//   </>
// }
// export default MyApp




{/*  Below is  with the login page */}

{/**/}

import Head from 'next/head'
import Link from 'next/link'

import { ColorRing } from 'react-loader-spinner';


import useArcanaAuth from './useArcanaAuth';

if (!"2437b6ee508a24481ec9cfa2ff6ddadf") {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable')
}

const projectId = "2437b6ee508a24481ec9cfa2ff6ddadf"

// 2. Configure wagmi client
const chains = [polygonMumbai,goerli,arbitrum, avalanche, bsc, fantom,optimism, polygon]
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Modal', chains }),
  provider
})

// 3. Configure modal ethereum client
export const ethereumClient = new EthereumClient(wagmiClient, chains)


function MyApp({ Component, pageProps = {} }) {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  const {
    initializeAuth,
    loggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth();

  const initialize = async () => {
    await initializeAuth();
  };

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        if (loggedIn) {
          const acc = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized, loggedIn]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const { pathname } = useRouter()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])

  return (
    <div>
      <div>
        {loading ? (
          <div className={styles.Spinner}>
            <ColorRing height={90}/>
            <div className={styles.heading}>WELCOME TO SAL DAPP ...</div>
          </div>
          ) : !loading && loggedIn ? (
            <div>
            {
                ready ? (
                    <div>
                        <div className='big bg-gradient-to-r from-indigo-800'>  
                        </div>
                        <WagmiConfig client={wagmiClient}>
                        <Navbar className='big bg-gradient-to-r from-indigo-800' handleLogout={handleLogout} />
                            <Layout>

                                <Component {...pageProps} />
                            </Layout>
                            
                        </WagmiConfig>
                        {pathname === '/custom' ? null : (
                            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
                        )}
                    </div>
                ) : null
            }
        </div>
          )
          : (

            <div className="flex h-screen bg-blue-400">
            <div className="m-auto bg-slate-50  shadow-2xl drop-shadow-2xl  rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className={styles.imgStyle}>
                    <div className={styles.cartoonImg}></div>
                    <div className={styles.cloud_one}></div>
                    <div className={styles.cloud_two}></div>
                </div>
                <div className="right flex flex-col shadow-xl drop-shadow-xl justify-evenly ">
                    <div className="text-center ">
              
        
        <section className='w-3/4 h-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Sal dAPP</h1>
                <p className='w-3/4 mx-auto text-gray-400'> - - TRansparency in  one click - - </p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    value = {email}
                    type="email"
                    placeholder='Email'
                    onChange={handleEmailChange}
                    className={styles.input_text}
                    />
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button  onClick={() => loginWithLink(email)}  className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button  onClick={() => login('google')} type='button' className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button  onClick={() => login('gtihub')} type='button' className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>

            </form>

            {/* bottom */}
            
        </section>

                    </div>
                </div>
            </div>
  
        </div>
            
        )}
      </div>
    </div>
  );
}

export default MyApp;

