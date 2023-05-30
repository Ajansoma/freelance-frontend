import OrdersItems from './OrdersItems';
import { useEffect, useState } from 'react';
import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Orders = () => {
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const fetchOrders = async function () {
      const res = await httpGetData(`orders`);
      setOrders(res);
    };
    fetchOrders();
  }, []);

  if (!orders)
    return <div className="text-center">{LoadingSpinner(12, 12)}</div>;
  console.log(orders);

  return (
    <div className="ml-12 mr-12 mt-4 overflow-scroll max-w-[30rem] md:max-w-[40rem] md:ml-24 md:mr-24 lg:ml-48 lg:mr-48 lg:max-w-[80rem]">
      <div className="font-semibold text-xs pt-6 pb-4 md:text-2xl">Orders</div>
      <div className="grid grid-cols-4 font-semibold text-lg bg-grey-100 p-4 rounded-t">
        <span>Image</span>
        <span>Title</span>
        <span>Price</span>
        <span>Contact</span>
      </div>
      <div className="bg-grey-300 p-4 rounded-b max-h-96 overflow-scroll">
        {orders.map((order) => (
          <OrdersItems order={order} key={order._id} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
