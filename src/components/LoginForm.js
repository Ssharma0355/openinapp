"use client";

import Link from "next/link";
import Image from 'next/image';

import google from "./icons/google.svg";
import apple from "./icons/apple.svg";
import { signIn } from 'next-auth/react';

export default function LoginForm() {
    // const session = useSession();

    return (
        <div className="right_panel p-36">
            <form>
                <div className='signin'><h2>Sign In</h2></div>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Sign in your account
                </p>
                <div className="flex justify-between mt-5">
                    <div className="rounded-lg bg-white py-2 px-3">
                        <button onClick={() => signIn()} className="flex items-center m-0 bg-white">
                            <Image alt="google" src={google} width={'50px'} />
                            <span className="ml-3 text-black">Sign in with Google</span>
                        </button>
                    </div>
                    <div className="rounded-lg py-2 bg-white px-3">
                        <button onClick={() => signIn('credentials')} className="flex items-center m-0 bg-white">
                            <Image alt="apple" src={apple} width={'50px'} />
                            <span className="ml-3 text-black">Sign in with Google</span>
                        </button>
                    </div>
                </div>
                <form className="bg-white rounded-lg mt-5 p-8">
                    <label for="email" className="block" >Email address</label>
                    <input type="text" name="email" placeholder="johndoe@gmail.com" className="input-form" />
                    <label for="password" className="block">Password</label>
                    <input type="password" name="password" className="input-form" />
                    <Link className="forgetpassword" href={`/`}>Forgot password</Link>
                    <button className="h-11">Sign In</button>
                </form>
                <div className="account mt-2.5">
                    <span className="register">{`Don't have acccount?`}</span>
                    <Link className="register forgetpassword" href={`/`}> Register here</Link>
                </div>

            </form>

        </div>
    )
}
// import React, { useState } from 'react';

// export default function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Add your authentication logic here
//   };

//   return (
//     <div className="right_panel">
//       <form onSubmit={handleSubmit}>
//         <div className='signin'><h2>Sign In</h2></div>
//         <p className="mt-1 text-sm leading-6 text-gray-600">
//           Sign in your account
//         </p>

//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//             Email Address:
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Sign In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
