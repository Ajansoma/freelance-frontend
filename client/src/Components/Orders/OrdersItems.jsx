import { useNavigate } from 'react-router-dom';
import { httpGetData, httpSendData } from '../../lib/request';
import { user } from '../../lib/currentUsers';

const OrdersItems = (props) => {
  const { order } = props;
  const currentUser = user();
  const navigate = useNavigate();

  const handleContact = async function () {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await httpGetData(`conversations/single/${id}`);
      navigate(`/message/${res.id}`);
    } catch (err) {
      if (err.message === 'Not Found') {
        const res = await httpSendData(`conversations`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${res.id}`);
      }
    }
  };
  return (
    <div className="text-xs border-b pt-2 pb-2 cursor-pointer hover:bg-grey-100 duration-75 xs:text-sm md:text-sm lg:text-base">
      <div className="grid grid-cols-4 pb-2 items-center">
        <img
          className="h-6 w-6 rounded-full sm:h-8 md:w-8 lg:h-12 lg:w-12"
          src={order.image}
        />
        <span>{order.title}</span>
        <span>${order.price}</span>
        <span
          className="text-base xs:text-lg md:text-xl bg-primary-200 h-7 w-9 rounded text-primary-100 flex justify-center items-center"
          onClick={handleContact}
        >
          <ion-icon name="mail-outline"></ion-icon>
        </span>
      </div>
    </div>
  );
};

export default OrdersItems;
