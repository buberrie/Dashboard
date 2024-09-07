import NavBar from "../components/navbar/NavBar"
import SideBar from "../components/sideBar/SideBar"
import Analytics from "../components/Analytics"
import OrderSummary from "../components/orderSummary/OrderSummary"
import LatestOrders from "../components/latestOrders/LatestOrders"
import TopPlatforms from "../components/TopPlatforms"

const Dashboard = () => {
  return (
    <main className=" flex md:justify-center justify-between max-width">
        <nav>
            <SideBar/>
        </nav>
        <section className="w-full content-container">
            <NavBar/>
           <div className=" pb-8">
            <div className="flex lg:h-[28rem] h-fit sm:p-5 px-2 py-3 w-full lg:flex-row flex-col">
              <Analytics/>
              <OrderSummary/>
            </div>
            <div className="relative flex h-fit md:px-5 px-2 lg:py-0 py-3 w-full lg:flex-row flex-col">
              <LatestOrders/>
              <TopPlatforms/>
            </div>
           </div>
        </section>
    </main>
  )
}

export default Dashboard