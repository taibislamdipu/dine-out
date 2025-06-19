const orders = [
  {
    id: 1,
    customerName: "Sumit Saha",
    chooseItems: [
      {
        id: 1,
        name: "Hamburger",
        price: 100,
      },
      {
        id: 2,
        name: "Pizza",
        price: 200,
      },
      {
        id: 3,
        name: "Chicken",
        price: 300,
      },
    ],
    items: 0,
    status: "PENDING",
  },
  {
    id: 2,
    customerName: "Akash Ahmed",
    chooseItems: [
      {
        id: 1,
        name: "Hamburger",
        price: 100,
      },
      {
        id: 2,
        name: "Pizza",
        price: 200,
      },
      {
        id: 3,
        name: "Chicken",
        price: 300,
      },
    ],
    items: 0,
    status: "DELIVERED",
  },
  {
    id: 3,
    customerName: "Saad Hasan",
    chooseItems: [],
    items: 0,
    status: "PENDING",
  },
];

export default orders;
