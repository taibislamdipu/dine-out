import { useState } from "react";
import Header from "./components/Header";
import OrderSummary from "./components/main/OrderSummary";
import OrderTable from "./components/main/OrderTable";
import OrderForm from "./components/sidebar/OrderForm";

function App() {
  const [orders, setOrders] = useState([]); // OR useState([]) if starting empty

  return (
    <>
      <Header />

      {/* Main Content  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <OrderForm setOrders={setOrders} orders={orders} />

        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
          <OrderSummary orders={orders} />
          <OrderTable orders={orders} setOrders={setOrders} />
        </div>
      </div>
    </>
  );
}

export default App;
