"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import google from "./icons/google.svg";
import apple from "./icons/apple.svg";
import { signIn } from 'next-auth/react';

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onGoogleSignIn() {
       await signIn('google', {
            callbackUrl: '/'
        })
    }
    async function onSignInCred(e) {
        e.preventDefault()
        if(!email || !password) alert('Email and Password is required for login.')
        await signIn('credentials', {
            email, password, redirect: true, callbackUrl: '/'
        })
    }
    return (
        <div className="right_panel p-36">
            <div>
                <div className='signin'><h2>Sign In</h2></div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Sign in your account
                </p>
                <div className="flex justify-between mt-5">
                    <div className="rounded-lg bg-white py-2 px-3">
                        <button onClick={() => onGoogleSignIn()} className="flex items-center m-0 bg-white">
                            <Image alt="google" src={google} width={'50px'} />
                            <span className="ml-3 text-black">Sign in with Google</span>
                        </button>
                    </div>
                    <div className="rounded-lg py-2 bg-white px-3">
                        <button onClick={() => onGoogleSignIn()} className="flex items-center m-0 bg-white">
                            <Image alt="apple" src={apple} width={'50px'} />
                            <span className="ml-3 text-black">Sign in with Apple</span>
                        </button>
                    </div>
                </div>
                <form className="bg-white rounded-lg mt-5 p-8">
                    <label htmlFor="email" className="block" >Email address</label>
                    <input type="text" name="email" value={email} placeholder="johndoe@gmail.com" className="input-form" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" name="password" value={password} className="input-form" onChange={(e) => setPassword(e.target.value)} />
                    <Link className="forgetpassword" href={`/`}>Forgot password</Link>
                    <button className="h-11" onClick={(e) => onSignInCred(e)}>Sign In</button>
                </form>
                <div className="account mt-2.5">
                    <span className="register">{`Don't have acccount?`}</span>
                    <Link className="register forgetpassword" href={`/`}> Register here</Link>
                </div>
            </div>
        </div>
    )
}