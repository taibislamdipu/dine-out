import { useState } from "react";
import items from "../../data/items";

export default function OrderForm({ setOrders }) {
  const [customerName, setCustomerName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const isItemSelected = (item) =>
    selectedItems.some((selected) => selected.id === item.id);

  const handleToggleItem = (item) => {
    setSelectedItems((prev) =>
      isItemSelected(item)
        ? prev.filter((selected) => selected.id !== item.id)
        : [...prev, item]
    );
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    if (!customerName.trim()) {
      alert("Please enter customer name.");
      return;
    }

    if (selectedItems.length === 0) {
      alert("Please select at least one item.");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customerName,
      chooseItems: [...selectedItems],
      items: selectedItems.length,
      amount: totalPrice,
      status: "PENDING",
    };

    // ✅ Add order to parent state
    setOrders((prevOrders) => [...prevOrders, newOrder]);

    // 🔁 Reset form
    setCustomerName("");
    setSelectedItems([]);

    console.log("Order placed:", newOrder);
  };

  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* Customer Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {/* Choose Items */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {items.map((item) => {
            const selected = isItemSelected(item);
            return (
              <div
                key={item.id}
                className={`bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300 ${
                  selected ? "border border-green-500" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">BDT {item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleToggleItem(item)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    selected
                      ? "bg-red-700 hover:bg-red-600"
                      : "bg-gray-800 hover:bg-primary"
                  }`}
                >
                  {selected ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
}
