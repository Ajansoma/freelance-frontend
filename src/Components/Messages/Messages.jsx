import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MessagesItems from './MessagesItems';
import { user } from '../../lib/currentUsers';
import { httpGetData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Messages = () => {
  const currentUser = user();
  const [conversations, setConversations] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchConversations = async function () {
      try {
        const res = await httpGetData(`conversations`);
        console.log(res);
        setConversations(res);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchConversations();
  }, []);
  console.log(conversations);

  return (
    <div className="ml-12 mr-12 mt-4 overflow-scroll max-w-[30rem] md:max-w-[40rem] md:ml-24 md:mr-24 lg:ml-48 lg:mr-48 lg:max-w-[80rem]">
      <div className="flex justify-between items-center pt-6 pb-4">
        <div className="font-semibold text-2xl">Messages</div>
      </div>
      <div className="grid grid-cols-4 font-semibold pb-2 text-xs bg-grey-100 p-4 rounded-t md:text-base">
        <span className="w-32">
          {currentUser?.isSeller ? 'Buyer' : 'Seller'}
        </span>
        <span className="w-[38rem]">Last Message</span>
        <span>Date</span>
        <span>Action</span>
      </div>
      <div className="bg-grey-300 p-4 rounded-b max-h-96 overflow-scroll">
        {conversations.map((conversation) => (
          <MessagesItems
            key={conversation.id}
            conversation={conversation}
            currentUser={currentUser}
          />
        ))}
        {error && error}
      </div>
    </div>
  );
};

export default Messages;
