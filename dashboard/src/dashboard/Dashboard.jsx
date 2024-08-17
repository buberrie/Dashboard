import NavBar from "../components/navbar/NavBar"
import SideBar from "../components/sideBar/SideBar"
import Analytics from "../components/Analytics"
import OrderSummary from "../components/orderSummary/OrderSummary"
import LatestOrders from "../components/latestOrders/LatestOrders"
import TopPlatforms from "../components/TopPlatforms"

const Dashboard = () => {
  return (
    <main className="flex md:justify-center border justify-between max-width">
        <nav>
            <SideBar/>
        </nav>
        <section style={{width : "calc(100% - var(--sidebar-width))"}}>
            <NavBar/>
           <div className=" pb-8">
            <div className="flex l:h-[27rem] h-fit sm:p-5 px-2 py-3 w-full l:flex-row flex-col">
              <Analytics/>
              <OrderSummary/>
            </div>
            <div className="relative flex h-fit md:px-5 px-2 l:py-0 py-3 w-full l:flex-row flex-col">
              <LatestOrders/>
              <TopPlatforms/>
            </div>
           </div>
        </section>
    </main>
  )
}

export default Dashboard