import DashboardHeader from "./DashboardHeader"
import DashboardGraph from "./DashboardGraph"
import Topproducts from "./Topproducts"
import Widget from "./WidgetItem"
import revenue from "./icons/revenue.svg"
import totaltranscations from "./icons/totaltransactions.svg"
import likes from "./icons/likes.svg"
import tusers from "./icons/tusers.svg"
import AddNewAccount from "./AddNewAccount"


export default function Dashboard() {
    const widgetData = [
        {
            id: 'widget1',
            icon: revenue,
            iconColor: 'bg-lime-400',
            iconpm: "",
            name: 'Total Revenues',
            amount: '$2,129,430',
            profit: '+2.5%'
        },
        {
            id: 'widget2',
            icon: totaltranscations,
            iconColor: 'bg-orange-300',
            name: 'Total Transaction',
            amount: '1,520',
            profit: '+1.7%'
        },
        {
            id: 'widget3',
            iconColor: 'bg-orange-200',
            icon: likes,
            name: 'Total Likes',
            amount: '9,721',
            profit: '+1.4%'
        },
        {
            id: 'widget4',
            icon: tusers,
            iconColor: 'bg-indigo-500',
            name: 'Total Users',
            amount: '9,721',
            profit: '+4.2%'
        },
    ]
    return (
        <div className="p-5 w-full">
            <DashboardHeader />
            <div className="flex">
                {
                    widgetData.map((widget) => (
                        <Widget key={widget.id} widgetData={widget} />
                    )
                    )
                }

            </div>
            < DashboardGraph />
            <div className="flex">
                <Topproducts />
                <AddNewAccount />
            </div>

        </div>


    )
}