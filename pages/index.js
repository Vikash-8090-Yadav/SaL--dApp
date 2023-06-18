import Layout from "../Component/Layout";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

import { Web3Modal } from "@web3modal/react";

import { ethereumClient } from "./_app";

import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import useArcanaAuth from "./useArcanaAuth";

function MyApp({ Component, pageProps = {} }) {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [account, setAccount] = useState("");

  const projectId = "2437b6ee508a24481ec9cfa2ff6ddadf";

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

  const { pathname } = useRouter();

  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <div>
        <div>
          {loading ? (
            <div className="w-screen h-screen flex flex-col justify-center items-center">
              <ColorRing height={90} />
              <div className="font-semibold text-4xl tracking-widest px-5 text-center">
                WELCOME TO SAL DAPP
              </div>
            </div>
          ) : !loading && loggedIn ? (
            <div>
              {ready ? (
                <div>
                  <div className="big bg-indigo-800"></div>

                  <Navbar handleLogout={handleLogout} />
                  <Layout />

                  {pathname === "/custom" ? null : (
                    <Web3Modal
                      projectId={projectId}
                      ethereumClient={ethereumClient}
                    />
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            <div className="flex h-screen bg-blue-400">
              <div className="m-auto bg-slate-50 shadow-2xl drop-shadow-2xl rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className="max-lg:hidden relative overflow-hidden bg-gradient-to-b from-blue-500 to-gray-800 rounded-l-md">
                  <div className={styles.cartoonImg}></div>
                  <div className={styles.cloud_one}></div>
                  <div className={styles.cloud_two}></div>
                </div>

                {/* Right Side */}

                <div className="right flex flex-col shadow-xl drop-shadow-xl justify-evenly ">
                  <div className="text-center">
                    <section className="w-3/4 h-3/4 mx-auto flex flex-col gap-10 max-sm:w-11/12">
                      <div className="title">
                        <h1 className="text-gray-800 text-4xl font-bold py-4">
                          Sal dAPP
                        </h1>
                        <p className="w-3/4 mx-auto text-gray-500">
                          {" "}
                          --- Transparency in one click ---{" "}
                        </p>
                      </div>

                      {/* form */}
                      <form className="flex flex-col gap-5">
                        <div className="border rounded-xl">
                          <input
                            value={email}
                            type="email"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
                          />
                        </div>

                        {/* login buttons */}
                        <div className="input-button">
                          <button
                            onClick={() => loginWithLink(email)}
                            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-md py-3 text-gray-50 text-lg font-bold hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:outline outline-offset-[-1.5px] hover:outline-blue-500 hover:text-gray-700"
                          >
                            Login
                          </button>
                        </div>

                        <div className="input-button flex">
                          <button
                            onClick={() => login("google")}
                            type="button"
                            className="w-full py-3 flex justify-center gap-5"
                          >
                            <Image
                              src={"/assets/google.svg"}
                              width="37"
                              height="37"
                              alt="google-sign-in"
                            />
                            <Image
                              src={"/assets/github.svg"}
                              width="37"
                              height="37"
                              alt="github-sign-in"
                            />
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyApp;
