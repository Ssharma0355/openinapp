
import Image from 'next/image';
import Link from "next/link";
import schedule from "./icons/schedule.svg";
import setting from "./icons/setting.svg";
import transactions from "./icons/transactions.svg";
import user from "./icons/user.svg";
import dashboard from "./icons/dashboard.svg";

export default function NavPanel() {

    const dashboardLink = [
        {
            label: 'dashboard',
            image: dashboard,
            url: '/dashboard'
        },
        {
            label: 'transactions',
            image: transactions,
            url: '/transactions'
        },
        {
            label: 'schedule',
            image: schedule,
            url: '/schedule'
        },
        {
            label: 'user',
            image: user,
            url: '/user'
        },
        {
            label: 'Setting',
            image: setting,
            url: '/setting'

        }
    ]
   

    return (
        <div className="dashboard-panel w-full p-5 m-5 rounded-xl">
            <div className=''>
                <h1 className=" font-bold text-white text-3xl flex">Board.</h1></div><div>
                <div className="py-8">
                    <ul className="">
                        {dashboardLink.map((link) => (
                            <li key={link.slug} className="mx-3 mb-3">
                                <Link href={`/${link.url}`} className='flex text-white'>
                                    <Image src={link.image} width={'50px'} />
                                    <span className='ml-3'>{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
            <footer className='bottom'>
                <ul>
                    <li className='mx-3 mb-3 flex text-white'>Help</li>
                    <li className='mx-3 mb-3 flex text-white'>Contact us</li>
                </ul>
            </footer>
        </div>
    )
}