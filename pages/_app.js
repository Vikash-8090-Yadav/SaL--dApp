
// import Layout from "../Component/Layout"
// import '../styles/globals.css'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Logout from "../Component/logout"
// import NavR from "../Component/navR"
// import { TailSpin } from "react-loader-spinner";

// import bb1 from "../images/bb1.jpg";
// import bb3 from "../images/bb3.png";
// import googlelogo from "../images/google-logo.png";
// import githublogo from "../images/github-logo.png";
// import twitterlogo from "../images/twitter-logo.png";
// import discordlogo from "../images/discord-logo.png";


// // function MyApp({ Component,  pageProps = {}}) {
// //   return <>
// //   <Layout>

// //   <Component {...pageProps} />
// //   </Layout>
// //   </>
// // }
// // export default MyApp

// import React, { useState, useEffect } from 'react';
// import { ColorRing } from 'react-loader-spinner';


// import useArcanaAuth from './useArcanaAuth';

// function MyApp({Component,  pageProps = {}}) {
//   const [loading, setLoading] = useState(true);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [email, setEmail] = useState('');
//   const [account, setAccount] = useState('');

//   const {
//     initializeAuth,
//     isLoggedIn,
//     getAccounts,
//     login,
//     loginWithLink,
//     logout,
//     initialized,
//   } = useArcanaAuth();

//   const initialize = async () => {
//     await initializeAuth();
//   };

//   const handleLogout = async () => {
//     setLoggedIn(false);
//     await logout();
//   };

//   useEffect(() => {
//     initialize();
//   }, []);

//   useEffect(() => {
//     const loadDetails = async () => {
//       if (initialized) {
//         const isLogged = await isLoggedIn();
//         if (isLogged) {
//           setLoggedIn(true);
//           const acc = await getAccounts();
//           setAccount(acc[0]);
//           setLoading(false);
//         } else {
//           setLoading(false);
//         }
//       }
//     };
//     loadDetails();
//   }, [initialized]);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   return (
//     <div>

//       <div>
//         {loading ? (
//           <div className={styles.Spinner}>
//             <ColorRing height={90}/>
//             <div className={styles.heading}>WELCOME TO SAL DAPP ...</div>
//             </div>
//         ) : !loading && loggedIn ? (
//           <div>
//           <div  className='big bg-gradient-to-r from-indigo-800'>
//           <button  onClick={handleLogout}>
//             LOGOUT <Logout/>
//           </button>
//           </div>
//             <Layout>

//               <Component {...pageProps} />

//               </Layout>

//           </div>
//         ) : (
//           <div>
//           <div className={styles.na}><Image className={styles.g1} src ={bb1} width ={1860} height = {490} alt ="hero-image"/></div>
//     <div className={styles.login}>
//     <div className={styles.Left}>
//     <div>
//     <h1>
//     Make your
//     <br></br>
//     dApps secure<br></br>
//     from the <br></br>
//     ground up !
//     </h1>
//     </div>
//     <div className={styles.bb3}><Image className={styles.g1} src ={bb3} width ={275} height = {350} alt ="hero-image"
//    /></div>
//     </div>
//     <div  className={styles.Right}>
//     <h1 className={styles.h1} >Welcome to Sal-dApp</h1>
//     <p>Lets get started</p>
//     <div className={styles.h5}>
//     Continue With :
//     </div>
//     <div className={styles.cntner}>
//     <button className={styles.b} onClick={() => login('google')} >
//     <div className={styles.img}><Image className={styles.g1} src ={googlelogo} width ={39} height = {50} alt ="hero-image"
//    />
//    <div className={styles.g}> GOOGLE</div>
//    </div>
//     </button><button onClick={() => login('google')} className={styles.b}>
//     <div className={styles.img}><Image className={styles.g2} src ={githublogo} width ={39} height = {50} alt ="hero-image"
//    />
//    <div className={styles.g}> Github</div>
//    </div>
//     </button>
//     </div>
//     <div className={styles.cntner}>
//     <button className={styles.b}>
//     <div className={styles.img}><Image className={styles.g1} src ={twitterlogo} width ={39} height = {50} alt ="hero-image"
//    />
//    <div className={styles.g}> Twitter</div>
//    </div>
//     </button><button className={styles.b}>
//     <div className={styles.img}><Image className={styles.g} src ={discordlogo} width ={39} height = {50} alt ="hero-image"
//    />
//    <div className={styles.g}> Discord</div>
//    </div>
//     </button>
//     </div>
//     </div>
//     </div>
//     <div className ={styles.footer}>
//     <div className ={styles.footerl} >
//     <div className ={styles.T}>
//     Terms of use
//     </div>
//     <div className ={styles.T}>
//     Privacy Ploicy
//     </div>
//     <div className ={styles.T}>
//     Docs
//     </div>
//     </div>
//     <div className ={styles.footerm}>
//     <div>Powered by SALL-dApp</div>
//     </div>
//     <div className ={styles.footerr} >
//     <div>
//     <div className ={styles.fr}>
//     <Image className={styles.r} src ={twitterlogo} width ={39} height = {50} alt ="hero-image"
//    /></div>
//     </div>
//     <div>
//     <div className ={styles.fr}>
//    </div>
//    <Image className={styles.r}  src ={googlelogo} width ={39} height = {50} alt ="hero-image"
//    /></div>
//     <div>
//     <div className ={styles.fr}>
//     <Image className={styles.r}  src ={githublogo} width ={39} height = {50} alt ="hero-image"
//    />
//    </div>
//     </div>
//     </div>

//     </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MyApp;






import Layout from "../Component/Layout"
import '../styles/globals.css'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logout from "../Component/logout"
import NavR from "../Component/navR"
import { TailSpin } from "react-loader-spinner";

import bb1 from "../images/bb1.png";
import bb3 from "../images/bb3.png";
import googlelogo from "../images/google-logo.png";
import githublogo from "../images/github-logo.png";
import twitterlogo from "../images/twitter-logo.png";
import discordlogo from "../images/discord-logo.png";


// function MyApp({ Component,  pageProps = {}}) {
//   return <>
//   <Layout>
//   <Component {...pageProps} />
//   </Layout>
//   </>
// }
// export default MyApp

import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';


import useArcanaAuth from './useArcanaAuth';

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
            <div className='big bg-gradient-to-r from-indigo-800'>
              <button  onClick={handleLogout}>
                LOGOUT <Logout/>
              </button>
            </div>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
          ) : (
          <div>
            <div className={styles.na}><Image className={styles.g1} src ={bb1} width ={1860} height = {490} alt ="hero-image"/></div>
            <div className={styles.login}>
              <div className={styles.left}>
                <div>
                  <h1>Make your dApps secure from the ground up!</h1>
                </div>
                <div className={styles.bb3}>
                  <Image className={styles.g1} src ={bb3} width ={275} height = {350} alt ="hero-image"/>
                </div>
              </div>

              <div className={styles.right}>
                <h1 className={styles.h1} >Welcome to Sal-dApp</h1>
                {/* <p>Lets get started</p> */}
                <div className={styles.h5}>Continue With :</div>
                <div className={styles.center}>
                  <button className={styles.b} onClick={() => login('google')} >
                    <div className={styles.img}>
                      <Image className={styles.g1} src ={googlelogo} width ={39} height = {50} alt ="hero-image"/>
                      <div className={styles.g}> GOOGLE</div>
                    </div>
                  </button>
                  <button onClick={() => login('google')} className={styles.b}>
                    <div className={styles.img}>
                      <Image className={styles.g2} src ={githublogo} width ={39} height = {50} alt ="hero-image"/>
                      <div className={styles.g}> Github</div>
                    </div>
                  </button>
                </div>
                <div className={styles.center}>
                  <button className={styles.b}>
                    <div className={styles.img}>
                      <Image className={styles.g1} src ={twitterlogo} width ={39} height = {50} alt ="hero-image"/>
                      <div className={styles.g}> Twitter</div>
                    </div>
                  </button>
                  <button className={styles.b}>
                    <div className={styles.img}>
                      <Image className={styles.g} src ={discordlogo} width ={39} height = {50} alt ="hero-image"/>
                      <div className={styles.g}> Discord</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className ={styles.footer}>
              <div className ={styles.footerl} >
                <div className ={styles.T}>Terms of use</div>
                <div className ={styles.T}>Privacy Policy</div>
                <div className ={styles.T}>Docs</div>
              </div>

              <div className ={styles.footerr} >
                <div>
                  <div className ={styles.fr}>
                    <Image src ={twitterlogo} width ={39} height = {50} alt ="hero-image"/>
                  </div>
                </div>

                <div>
                  <div className ={styles.fr}>
                    <Image src ={googlelogo} width ={39} height = {50} alt ="hero-image"/>
                  </div>
                </div>
              
                <div>
                  <div className ={styles.fr}>
                    <Image src ={githublogo} width ={39} height = {50} alt ="hero-image"/>
                  </div>
                </div>
              </div>
            </div>
            
            <div className ={styles.copy}>
                <div>Powered by SALL-dApp</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyApp;

