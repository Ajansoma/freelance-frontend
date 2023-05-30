import { Link } from 'react-router-dom';
import moment from 'moment';

const MessagesItems = (props) => {
  const { conversation, currentUser } = props;

  return (
    <Link to={`/message/${conversation.id}`}>
      <div className="grid grid-cols-4 items-center text-grey-200 sm:gap-4 pt-6 pb-6 text-base border-b">
        <span className="text-xs">
          {currentUser.isSeller ? conversation.buyerId : conversation.sellerId}
        </span>
        <span className="w-[38rem]">
          {conversation?.lastMessage?.slice(0, 10)}...
        </span>
        <span>{moment(conversation.updatedAt).fromNow()}</span>
        {(currentUser.isSeller && !conversation.readBySeller) ||
          (!currentUser.isSeller && !conversation.readByBuyer && (
            <button className="bg-primary-100 p-4 rounded">Mark as Read</button>
          ))}
      </div>
    </Link>
  );
};

export default MessagesItems;
