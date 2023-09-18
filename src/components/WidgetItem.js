// import  from "./icons/profile.png";


import Image from "next/image";
export default function WidgetItem({widgetData}) {


    return (
        <div className="w-64 bg-white p-3 mr-4 rounded-md shadow-md shadow-lime-200">
            <div className={`${widgetData.iconColor} w-fit p-2 rounded-full mt-1.5 `} ><Image src={widgetData.icon} /></div>
            <p className="text-black mt-1.5">{widgetData.name}</p>
            <div className="w-full flex justify-between">
                <span className="font-bold">{widgetData.amount}</span>
                <span className="profit  rounded-xl w-16 flex justify-center">{widgetData.profit}</span>
            </div>
        </div>
    )
}