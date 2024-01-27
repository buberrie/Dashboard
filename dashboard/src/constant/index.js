import category from '../components/sideBar/assets/category.svg'
import brokenTrend from '../components/sideBar/assets/broken-trend-up.svg'
import profileUser from '../components/sideBar/assets/profile-user.svg'
import brokenBox from '../components/sideBar/assets/broken-box.svg'
import discountShape from '../components/sideBar/assets/discount-shape.svg'
import infoCircle from '../components/sideBar/assets/info-circle.svg'
import arrowRight from '../components/sideBar/assets/arrow-right.svg'
import settings from '../components/sideBar/assets/settings.svg'
import logout from '../components/sideBar/assets/logout.svg'
import boxTick from '../components/orderSummary/assets/box-tick.svg'
import rotate from '../components/orderSummary/assets/3d-rotate.svg'
import bulkCoin from '../components/orderSummary/assets/bulk-coin.svg'
import greenChart from '../components/orderSummary/assets/green-chart.svg'
import redChart from '../components/orderSummary/assets/red-chart.svg'
import cart from '../components/orderSummary/assets/cart.svg'
import trendUp from '../components/orderSummary/assets/trend-up.svg'
import trendDown from '../components/orderSummary/assets/trend-down.svg'
import userImg1 from '../components/latestOrders/assets/order-img1.jpeg'
import userImg2 from '../components/latestOrders/assets/order-img2.jpeg'
import userImg3 from '../components/latestOrders/assets/order-img3.jpeg'
import userImg4 from '../components/latestOrders/assets/order-img4.jpeg'
import userImg5 from '../components/latestOrders/assets/order-img5.jpeg'

export const sidebarIcons = [
    {
        title: "Categories",
        imgUrl: category,
        alt: "category",
    },
    {
        title: "Trends",
        imgUrl: brokenTrend,
        alt: "trends",
    },
    {
        title: "User",
        imgUrl: profileUser,
        alt: "user",
    },
    {
        title: "Gift Hunts",
        imgUrl: brokenBox,
        alt: "gift Hunts",
    },
    {
        title: "Discounts",
        imgUrl: discountShape,
        alt: "Discount offers",
    },
    {
        title: "Recent Info",
        imgUrl: infoCircle,
        alt: "recent info",
    },
]

export const sidebarSecIcons = [
    {
        title: "",
        imgUrl: arrowRight,
        alt: "expand",
    },
    {
        title: "Settings",
        imgUrl: settings,
        alt: "settings",
    },
    {
        title: "Logout",
        imgUrl: logout,
        alt: "logout",
    },
]

export const salesMonthTrends = [
    {
        id: "Jan",
        value: "4.25",
        price: "$7,000"
    },
    {
        id: "Feb",
        value: "7.5",
        price: "$20,100"
        
    },
    {
        id: "Mar",
        value: "2.5",
        price: "$5,000"
    },
    {
        id: "Apr",
        value: "10.05",
        price: "$30,100"
    },
    {
        id: "May",
        value: "5.06",
        price: "$10,050"
    },
    {
        id: "Jun",
        value: "13.5",
        price: "$45,000"
    },
    {
        id: "Jul",
        value: "5.06",
        price: "$10,050"
    },
    {
        id: "Aug",
        value: "8.19",
        price: "$20,300"
    },
    {
        id: "Sep",
        value: "11.375",
        price: "$30,600"
    },
    {
        id: "Oct",
        value: "3.185",
        price: "$5,300"
    },
    {
        id: "Nov",
        value: "10.68",
        price: "$30,300"
    },
    {
        id: "Dec",
        value: "9.44",
        price: "$20,800"
    },
]

export const salesValueTrends = [
    {
        id: "50,000",
    },
    {
        id: "40,000",
    },
    {
        id: "30,000",
    },
    {
        id: "20,000",
    },
    {
        id: "10,000",
    },
    {
        id: "5,000",
    },
    {
        id: "0",
    },
]

export const orderSums = [
    {
        title: "Total Order",
        value: 350,
        percentage: 25.5,
        imgUrl: boxTick,
        chartUrl: greenChart,
        trendUrl: trendUp,
        bgColor: "#34CAA51F",
        textColor: "#34CAA5",
        Symbol: ""
    },
    {
        title: "Total Refund",
        value: 270,
        percentage: 23.0,
        imgUrl: rotate,
        chartUrl: redChart,
        trendUrl: trendDown,
        bgColor: "#ED544E1F",
        textColor: "#ED544E",
        Symbol: ""
    },
    {
        title: "Average Sales",
        value: 1567,
        percentage: 23.5,
        imgUrl: cart,
        chartUrl: redChart,
        trendUrl: trendDown,
        bgColor: "#ED544E1F",
        textColor: "#ED544E",
        Symbol: ""
    },
    {
        title: "Total Income",
        value: 350.000,
        percentage: 30.5,
        imgUrl: bulkCoin,
        chartUrl: greenChart,
        trendUrl: trendUp,
        bgColor: "#34CAA51F",
        textColor: "#34CAA5",
        Symbol: "$"
    },
]

export const orders = [
    {
        name: "Marcus Bergson",
        imgUrl: userImg1,
        imgAlt: "a man in green polo",
        date: "Nov 15, 2023",
        amount: "$80,000",
        delay: "1:05",
        status: "Paid",
        textColor: "#34CAA5",
    },
    {
        name: "Jaydon Vaccaro",
        imgUrl: userImg2,
        imgAlt: "a lady in yellow top",
        date: "Nov 15, 2023",
        amount: "$150,000",
        delay: "30:05",
        status: "Refund",
        textColor: "#ED544E",
    },
    {
        name: "Corey Schleifer",
        imgUrl: userImg3,
        imgAlt: "a lady wearing afro hair",
        date: "Nov 14, 2023",
        amount: "$87,000",
        delay: "02:05",
        status: "Paid",
        textColor: "#34CAA5",
    },
    {
        name: "Cooper Press",
        imgUrl: userImg4,
        imgAlt: "a lady in white shirt",
        date: "Nov 14, 2023",
        amount: "$100,000",
        delay: "10:05",
        status: "Refund",
        textColor: "#ED544E",
    },
    {
        name: "Phillip Lubin",
        imgUrl: userImg5,
        imgAlt: "a smiling man",
        date: "Nov 13, 2023",
        amount: "$78,000",
        delay: "00:45",
        status: "Paid",
        textColor: "#34CAA5",
    },
]

export const topPlatforms = [
    {
        title: "Book Bazaar",
        width: "53",
        amount: "$2,500,000",
        status: "Paid",
        percentage: 15,
        bgColor: "#6160DC",
    },
    {
        title: "Artisan Aisle",
        width: "40",
        amount: "$1,800,000",
        percentage: 10,
        bgColor: "#54C5EB",
    },
    {
        title: "Toy Troop",
        width: "20",
        amount: "$1,200,000",
        percentage: 8,
        bgColor: "#FFB74A",
    },
    {
        title: "XStore",
        width: "19",
        amount: "$1,100,000",
        percentage: 7,
        bgColor: "#FF4A55",
    },
]