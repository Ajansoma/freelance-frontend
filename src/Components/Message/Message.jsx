import { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { httpGetData, httpSendData } from '../../lib/request';
import LoadingSpinner from '../../UI/LoadingSpinner';
import { user } from '../../lib/currentUsers';
import noAvatar from '../../assets/noavatar.jpeg';

const Message = () => {
  const currentUser = user();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [updateMessage, setUpdateMessage] = useState(null);
  const [desc, setDescription] = useState('');
  const ref = useRef();

  const descriptionHandler = function (e) {
    setDescription(e.target.value);
  };

  const sendMessageHandler = async function (e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await httpSendData(`messages`, {
        conversationId: id,
        description: desc,
      });
      setUpdateMessage(res);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
    setDescription('');
  };

  useEffect(() => {
    const fetchMessage = async function () {
      setIsLoading(true);
      try {
        const res = await httpGetData(`messages/${id}`);
        setMessage(res);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    fetchMessage();
  }, [updateMessage]);

  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }, [message]);

  if (!message) {
    return <div className="text-center">{LoadingSpinner(12, 12)}</div>;
  }

  const ownerStyle = `flex items-center flex-row-reverse gap-4`;
  const otherStyle = `flex items-center gap-4`;
  return (
    <div className="ml-12 mr-12 w-[18rem]  pt-10 md:ml-24 md:mr-24 lg:ml-48 lg:mr-48 sm:w-[28rem] md:w-[45rem] lg:w-[55rem]">
      <div className="text-grey-200 uppercase pb-3 text-sm">
        <Link to="/messages"> Messages &#8827;</Link>
      </div>
      <div className="max-h-96 text-sm overflow-scroll flex flex-col gap-4 lg:text-base">
        {message.map((m) => {
          return (
            <div
              className={currentUser._id === m.userId ? ownerStyle : otherStyle}
              key={m._id}
            >
              <img
                src={currentUser.profilePicture || noAvatar}
                className="w-6 h-6 rounded-full md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
              <span className="max-w-xs p-2  text-primary-200 rounded-b-xl rounded-tl-xl bg-primary-100 lg:max-w-sm lg:p-4">
                {m.description}
              </span>
            </div>
          );
        })}
        <div ref={ref} />
      </div>
      <form
        className="flex pt-10 gap-6 items-center"
        onSubmit={sendMessageHandler}
      >
        <textarea
          onChange={descriptionHandler}
          value={desc}
          className="w-10/12 h-16 rounded border border-gray-200 focus:border-primary-100 outline-none placeholder:pl-2"
          placeholder="write a message"
        />
        {error && <span className="mb-3 text-sm text-red-500">{error}</span>}
        <button
          type="submit"
          className="bg-primary-100 text-primary-200 h-8 w-16 rounded hover:bg-primary-300 duration-75"
        >
          {!isLoading && <div className="text-sm lg:text-base">Send</div>}
          {isLoading && LoadingSpinner(4, 4)}
        </button>
      </form>
    </div>
  );
};

export default Message;
