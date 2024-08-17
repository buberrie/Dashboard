import category from "../components/sideBar/assets/category.svg";
import brokenTrend from "../components/sideBar/assets/broken-trend-up.svg";
import profileUser from "../components/sideBar/assets/profile-user.svg";
import brokenBox from "../components/sideBar/assets/broken-box.svg";
import discountShape from "../components/sideBar/assets/discount-shape.svg";
import infoCircle from "../components/sideBar/assets/info-circle.svg";
import arrowRight from "../components/sideBar/assets/arrow-right.svg";
import settings from "../components/sideBar/assets/settings.svg";
import logout from "../components/sideBar/assets/logout.svg";
import boxTick from "../components/orderSummary/assets/box-tick.svg";
import rotate from "../components/orderSummary/assets/3d-rotate.svg";
import bulkCoin from "../components/orderSummary/assets/bulk-coin.svg";
import greenChart from "../components/orderSummary/assets/green-chart.svg";
import redChart from "../components/orderSummary/assets/red-chart.svg";
import cart from "../components/orderSummary/assets/cart.svg";
import trendUp from "../components/orderSummary/assets/trend-up.svg";
import trendDown from "../components/orderSummary/assets/trend-down.svg";
import userImg1 from "../components/latestOrders/assets/order-img1.jpeg";
import userImg2 from "../components/latestOrders/assets/order-img2.jpeg";
import userImg3 from "../components/latestOrders/assets/order-img3.jpeg";
import userImg4 from "../components/latestOrders/assets/order-img4.jpeg";
import userImg5 from "../components/latestOrders/assets/order-img5.jpeg";

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
];

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
];

// price range for each duration
export const salesTrends = [
    {
      id: "monthly",
      values: ["50,000", "40,000", "30,000", "20,000", "10,000", "0"],
    },
    {
      id: "weekly",
      values: ["12,500", "10,000", "7,500", "5,000", "2,500", "0"],
    },
    {
      id: "daily",
      values: ["2,500", "2,000", "1,500", "1,000", "500", "0"],
    },
    {
      id: "hourly",
      values: ["500", "400", "300", "200", "100", "0"],
    },
  ];

//   detials of each duration date and price
export const salesTrendsValue = [
  {
    id: "hourly",
    values: [
      { id: "12:00 AM", height: "2.2", price: "$75" },
      { id: "1:00 AM", height: "4.59", price: "$160" },
      { id: "2:00 AM", height: "2.25", price: "$80" },
      { id: "3:00 AM", height: "3.3", price: "$120" },
      { id: "4:00 AM", height: "3.7", price: "$135" },
      { id: "5:00 AM", height: "4.52", price: "$155" },
      { id: "6:00 AM", height: "5.4", price: "$190" },
      { id: "7:00 AM", height: "6.25", price: "$220" },
      { id: "8:00 AM", height: "8.59", price: "$305" },
      { id: "9:00 AM", height: "9.8", price: "$345" },
      { id: "10:00 AM", height: "12.8", price: "$450" },
      { id: "11:00 AM", height: "11", price: "$380" },
      { id: "12:00 PM", height: "10.2", price: "$360" },
      { id: "1:00 PM", height: "9.8", price: "$350" },
      { id: "2:00 PM", height: "8.3", price: "$290" },
      { id: "3:00 PM", height: "7.5", price: "$265" },
      { id: "4:00 PM", height: "6.4", price: "$225" },
      { id: "5:00 PM", height: "8.0", price: "$280" },
      { id: "6:00 PM", height: "3.52", price: "$120" },
      { id: "7:00 PM", height: "9.6", price: "$340" },
      { id: "8:00 PM", height: "8.3", price: "$290" },
      { id: "9:00 PM", height: "10.2", price: "$360" },
      { id: "10:00 PM", height: "5.25", price: "$180" },
      { id: "11:00 PM", height: "7.5", price: "$265" },
    ],
  },
  {
    id: "daily",
    values: [
      { id: "1st Dec", height: "2.2", price: "$375" },
      { id: "2nd Dec", height: "5.25", price: "$900" },
      { id: "3rd Dec", height: "9.57", price: "$1,435" },
      { id: "4th Dec", height: "4.59", price: "$800" },
      { id: "5th Dec", height: "1.5", price: "$250" },
      { id: "6th Dec", height: "8.3", price: "$1,490" },
      { id: "7th Dec", height: "2.2", price: "$375" },
      { id: "8th Dec", height: "9.09", price: "$1,610" },
      { id: "9th Dec", height: "5.58", price: "$1,000" },
      { id: "10th Dec", height: "10.23", price: "$1,800" },
      { id: "11th Dec", height: "11.04", price: "$1,950" },
      { id: "12th Dec", height: "9.57", price: "$1,435" },
      { id: "13th Dec", height: "4.59", price: "$800" },
      { id: "14th Dec", height: "9.8", price: "$1,750" },
      { id: "15th Dec", height: "2.2", price: "$375" },
      { id: "16th Dec", height: "11.27", price: "$2,000" },
      { id: "17th Dec", height: "6.1", price: "$1,050" },
      { id: "18th Dec", height: "9.8", price: "$1,750" },
      { id: "19th Dec", height: "8.5", price: "$1,500" },
      { id: "20th Dec", height: "5.58", price: "$1,000" },
      { id: "21st Dec", height: "6.97", price: "$980" },
      { id: "22nd Dec", height: "3.52", price: "$620" },
      { id: "23rd Dec", height: "5.9", price: "$1,050" },
      { id: "24th Dec", height: "1.65", price: "$260" },
      { id: "25th Dec", height: "4.59", price: "$800" },
      { id: "26th Dec", height: "4.1", price: "$740" },
      { id: "27th Dec", height: "9.57", price: "$1,435" },
      { id: "28th Dec", height: "3.52", price: "$620" },
      { id: "29th Dec", height: "8.3", price: "$1,490" },
      { id: "30th Dec", height: "6.97", price: "$980" },
    ],
  },
  {
    id: "weekly",
    values: [
        { id: "1st Jul", height: "2.2", price: "$1,875" },
        { id: "8th Jul", height: "6.1", price: "$5,510" },
        { id: "15th Jul", height: "4.59", price: "$3,650" },
        { id: "22nd Jul", height: "9.57", price: "$8,600" },
        { id: "29th Jul",height: "5.6", price: "$5,000" },
        { id: "5th Aug", height: "6.1", price: "$5,510" },
        { id: "12th Aug", height: "8.3", price: "$7,450" },
        { id: "19th Aug", height: "7.1", price: "$6,250" },
        { id: "26th Aug", height: "9.09", price: "$8,000" },
        { id: "2nd Sep", height: "5.58", price: "$5,000" },
        { id: "9th Sep", height: "8.23", price: "$7,420" },
        { id: "16th Sep", height: "11", price: "$9,875" },
        { id: "23rd Sep", height: "9.57", price: "$8,600" },
        { id: "30th Sep", height: "4.59", price: "$3,800" },
        { id: "7th Oct", height: "9.8", price: "$8,730" },
        { id: "14th Oct", height: "2.2", price: "$1,875" },
        { id: "21th Oct", height: "7.1", price: "$6,250" },
        { id: "28th Oct", height: "6.1", price: "$5,510" },
        { id: "4th Nov", height: "9.8", price: "$8,730" },
        { id: "11th Nov", height: "8.23", price: "$7,420" },
        { id: "18th Nov", height: "5.58", price: "$5,000" },
        { id: "25th Nov", height: "6.97", price: "$6,240" },
        { id: "2nd Dec", height: "3.52", price: "$3,125" },
        { id: "9th Dec", height: "5.9", price: "$5,210" },
        { id: "16th Dec", height: "1.65", price: "$1,260" },
        { id: "23rd Dec", height: "4.59", price: "$3,800" },
        { id: "30th Dec", height: "4.1", price: "$3,700" },
      ],
  },
  {
    id: "monthly",
    values: [
      { id: "Jan", height: "2.2", price: "$7,000" },
      { id: "Feb", height: "5.9", price: "$21,050" },
      { id: "Mar", height: "1.45", price: "$5,000" },
      { id: "Apr", height: "8.9", price: "$31,100" },
      { id: "May", height: "3", price: "$10,550" },
      { id: "Jun", height: "12.5", price: "$45,000" },
      { id: "Jul", height: "3", price: "$10,550" },
      { id: "Aug", height: "6.5", price: "$23,100" },
      { id: "Sep", height: "10.3", price: "$36,000" },
      { id: "Oct", height: "8.92", price: "$31,300" },
      { id: "Nov", height: "1.65", price: "$5,500" },
      { id: "Dec", height: "8", price: "$28,000" },
    ],
  },
];

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
    Symbol: "",
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
    Symbol: "",
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
    Symbol: "",
  },
  {
    title: "Total Income",
    value: 350.0,
    percentage: 30.5,
    imgUrl: bulkCoin,
    chartUrl: greenChart,
    trendUrl: trendUp,
    bgColor: "#34CAA51F",
    textColor: "#34CAA5",
    Symbol: "$",
  },
];

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
];

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
];
