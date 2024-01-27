import NavBar from "../components/navbar/NavBar"
import SideBar from "../components/sideBar/SideBar"
import Analytics from "../components/Analytics"
import OrderSummary from "../components/orderSummary/OrderSummary"
import LatestOrders from "../components/latestOrders/LatestOrders"
import TopPlatforms from "../components/TopPlatforms"

const Dashboard = () => {
  return (
    <main className="flex md:ml-0 sm:ml-[3rem] ml-[2rem]">
        <nav>
            <SideBar/>
        </nav>
        <section className="w-full">
            <NavBar/>
           <div className="max-width  pb-8">
            <div className="flex l:h-[27rem] h-fit md:p-5 p-2 w-full l:flex-row flex-col">
              <Analytics/>
              <OrderSummary/>
            </div>
            <div className="flex h-fit md:px-5 px-4 l:py-0 py-3 w-full l:flex-row flex-col">
              <LatestOrders/>
              <TopPlatforms/>
            </div>
           </div>
        </section>
    </main>
  )
}

export default Dashboard