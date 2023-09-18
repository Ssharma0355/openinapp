import Link from "next/link";
import Image from 'next/image';
import twitter from "./icons/twitter.svg";
import linkedin from "./icons/linkedin.svg";
import github from "./icons/github.svg";
import discord from "./icons/discord.svg";

export default function LeftPanel() {

    const socialMediaLinks = [
        {
            slug: 'github',
            image: github,
            url: '/github'
        },
        {
            slug: 'twitter',
            image: twitter,
            url: '/twitter'
        },
        {
            slug: 'linkedin',
            image: linkedin,
            url: '/linkedin'
        },
        {
            slug: 'discord',
            image: discord,
            url: '/discord'
        }]
    return (
        <div className="left_panel">
            <div className='logo'><h2>LOGO</h2></div>
            <div className='flex justify-center items-center left_body'><h1 className="text-[72px] font-bold text-white">Board.</h1></div>
            <div className="flex justify-center py-8">
                <ul className="flex">
                    {socialMediaLinks.map((link) => (
                        <li key={link.slug} className="mx-3">
                            <Link href={`/${link.url}`}>
                                <Image alt={link.image} src={link.image} width={'50px'} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}