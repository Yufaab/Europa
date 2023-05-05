import React, { useContext, useEffect, useState } from 'react';
import MyOrderStructure from '../components/MyOrderStructure';
import YufaabContext from '../context/YufaabContext';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { yufaabInstance } = useContext(YufaabContext);

  useEffect(() => {
    const getAllOrders = async () => {
      const res = await yufaabInstance.getAllOrders();
      console.log(res);
      setOrders(res.data.data.orders);
    };
    getAllOrders();
  }, []);
  return (
    <div>
      <h2 className="mt-[100px] ml-[20px] lg:ml-[40px] text-[22px] text-[#0098FF] mb-[30px]">
        Your Orders
      </h2>
      {orders.map((ongoingOrder) => (
        <MyOrderStructure ongoingOrder={ongoingOrder} />
      ))}
    </div>
  );
};

export default MyOrders;
