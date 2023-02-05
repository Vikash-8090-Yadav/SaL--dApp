
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from 'react';
import Layout from "../Component/Layout"
import { useRouter } from 'next/router';
export default function Login(){
 const router = useRouter();

  const handleClick = () => {
    router.push('/register');
  };
    const [show, setShow] = useState(false)

    return (
        <>
         <Head>
            <title>Login</title>
        </Head>

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
            <form className='flex flex-col gap-5'>
                <div className={styles.input_group}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
                <div className={styles.input_group}>
                    <input 
                    type="password"
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {/* login buttons */}
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' className={styles.button_custom}>
                        Sign In with Github <Image src={'/assets/github.svg'} width={25} height={25}></Image>
                    </button>
                </div>
            </form>

           
            <p className='text-center text-gray-400 '>
                don't have an account yet? <button className='text-blue-700'  onClick={handleClick}>Go to Register</button>
            </p>
        </section>

                    </div>
                </div>
            </div>
  
        </div>
        </>
)}