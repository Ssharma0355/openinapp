
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
            label: 'Dashboard',
            image: dashboard,
            url: '/dashboard'
        },
        {
            label: 'Transactions',
            image: transactions,
            url: '/transactions'
        },
        {
            label: 'Schedule',
            image: schedule,
            url: '/schedule'
        },
        {
            label: 'User',
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
                            <li key={link.label} className="mx-3 mb-3">
                                <Link href={`/${link.url}`} className='flex text-white'>
                                    <Image alt="link.image" src={link.image} width={'50px'} />
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