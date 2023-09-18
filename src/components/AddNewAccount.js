"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import add from "./icons/add.svg"
import phone from "./icons/phone.svg"


export default function AddNewAccount() {
    useEffect(() => {
        const init = async () => {
            const { Modal, Ripple, initTE } = await import("tw-elements");
            initTE({ Modal, Ripple });
        }
        init();
    }, []);

    const [currentTab, onTabChange] = useState('basic');
    const [profile, setProfile] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    function reset() {
        let payload = {
            name, email, phone, instagram, youtube
        };
        setProfile({ ...payload });
        onTabChange('basic');
        setEmail(''); setName(''); setPhone(''); setInstagram(''), setYoutube('');

        console.log(profile)
    };

    return (
        <div className="bg-white rounded-lg mt-6 w-1/2 rounded-md shadow-md">
            <button
                type="button"
                className={`${profile.name ? 'hidden' : 'block'} w-full h-full`}
                data-te-toggle="modal"
                data-te-target="#exampleModalCenter"
                data-te-ripple-init
                data-te-ripple-color="light">
                <div className="flex justify-center">
                    <Image alt="add" src={add} key="add" width={50} />
                </div>
            </button>
            <div className={`${profile.name ? 'block' : 'hidden'} w-full h-full p-6`}>
                <h5 className="text-2xl">{profile.name}</h5>
                <div className="flex mt-28">
                    <div className="w-1/2 text-sm flex items-center">
                        <div className="bg-lime-100 p-2 rounded-full">
                            <Image alt="phone" src={require('./icons/phone.svg')} key="phone" width={17} height={17} />
                        </div>
                        <span className="ml-3 underline">{profile.phone}</span>
                    </div>
                    <div className="w-1/2 text-sm flex items-center">
                        <div className="bg-red-100 p-2 rounded-full">
                            <Image alt="insta" src={require('./icons/insta.svg')} key="insta" width={17} height={17} />
                        </div>
                        <span className="ml-3 underline">{profile.instagram}</span>
                    </div>
                </div>
                <div className="flex mt-6">
                    <div className="w-1/2 text-sm flex items-center">
                        <div className="bg-violet-100 p-2 rounded-full">
                            <Image alt="mail" src={require('./icons/mail.svg')} key="mail" width={17} height={17} />
                        </div>
                        <span className="ml-3 underline">{profile.email}</span>
                    </div>
                    <div className="w-1/2 text-sm flex items-center">
                        <div className="bg-red-100 p-2 rounded-full">
                            <Image alt="youtube" src={require('./icons/youtube.svg')} key="youtube" width={17} height={17} />
                        </div>
                        <span className="ml-3 underline">{profile.youtube}</span>
                    </div>
                </div>
            </div>
            {/* Modal content */}
            <div
                data-te-modal-init
                class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModalCenter"
                tabindex="-1"
                aria-labelledby="exampleModalCenterTitle"
                aria-modal="true"
                role="dialog">
                <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-full translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                    <div
                        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-clip-padding text-current shadow-lg outline-none">
                        <div className="bg-white rounded-md">
                            <div className='flex justify-between w-full px-6 py-4 border-t-0 border-b border-gray-300'>
                                <h3 className="text-2xl text-black">Add New Profile</h3>
                                <button
                                    type="button"
                                    class="w-fit rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                                    data-te-modal-dismiss
                                    aria-label="Close">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-6 w-6">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className="flex justify-between p-6">
                                    <button className={`border-b-4 py-2 mr-4 bg-white ${currentTab === 'basic' ? 'border-blue-700' : 'border-gray-700 '}`} onClick={() => onTabChange('basic')}>Basic</button>
                                    <button className={`border-b-4 py-2 mr-4 bg-white ${currentTab === 'social' ? 'border-blue-700' : 'border-gray-700'}`} onClick={() => onTabChange('social')}>Contact</button>
                                </div>
                                <form className="rounded-lg px-6">
                                    <div className={currentTab === 'basic' ? 'block' : 'hidden'}>
                                        <label for="email" className="block" >Enter Name*</label>
                                        <input placeholder="Eg. John Doe" className="input-form" value={name} onChange={(e) => setName(e.target.value)} />
                                        <label for="email" className="block" >Enter Email*</label>
                                        <input name="email" placeholder="johndoe@gmail.com" className="input-form" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label className="block">Enter Phone* </label>
                                        <input name="number" className="input-form" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className={currentTab === 'social' ? 'block' : 'hidden'}>
                                        <label for="email" className="block" >Intagram*</label>
                                        <input placeholder="Eg. John Doe" className="input-form" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                                        <label for="password" className="block">Youtube* </label>
                                        <input name="number" className="input-form" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                                    </div>
                                </form>
                                <div className="float-right mr-6 mb-3 text-white rounded-lg">
                                    <button className={`${currentTab === 'basic' ? 'block' : 'hidden'} bg-blue-700 px-3 py-2`} onClick={() => onTabChange('social')}>Next</button>
                                    <div className="flex">
                                        <button className={`${currentTab === 'social' ? 'block' : 'hidden'} text-black border border-black px-3 py-2`} onClick={() => onTabChange('basic')}>Back</button>
                                        <button className={`${currentTab === 'social' ? 'block' : 'hidden'} ml-3 bg-blue-700 px-3 py-2`} data-te-modal-dismiss onClick={reset}>Done</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}