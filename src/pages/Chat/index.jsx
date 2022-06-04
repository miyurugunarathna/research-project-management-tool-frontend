import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "../../components/Header/index.jsx";
import { Sidebar } from "../../components/Sidebar/index.jsx";
import { getchatStore, sendMessageStore } from "../../store/Chat/index.js";

const initialState = [
  {
    _id: "",
    message: "",
    user: {
      _id: "",
      firstName: "",
    },
    group_id: "",
    createdAt: "",
    updatedAt: "",
  },
];

export const Chat = () => {
  const state = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [chats, setChats] = useState(initialState);
  const [input, setInput] = useState("");

  const user = {
    user: "62644fb2ee8fe09bc0d84e06",
    group: "6291fc838937e1f0eab2625b",
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const message = {
      message: input,
      user: user.user,
      group_id: user.group,
    };
    const res = await dispatch(sendMessageStore(message));
    if (res.payload.status === 200) {
      setInput("");
    }
  };

  useEffect(() => {
    dispatch(getchatStore(user.group));
  }, []);

  useEffect(() => {
    if (state.chats) {
      setChats(state.chats);
    }
  }, [state]);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full relative">
        <Header />
        <div className="p-6 h-full flex flex-col overflow-hidden scroll-smooth">
          <div className="divider">Messages</div>
          <div className="flex flex-col gap-6 grow mb-24 overflow-y-scroll scrollbar-hide">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`flex flex-col justify-items-end gap-3 ${
                  chat.user._id === user.user ? "items-end" : ""
                }`}>
                <div className="flex flex-row gap-2 items-center">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-6 h-6">
                      <span className="text-xs">
                        {chat.user.firstName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs">{chat.user.firstName}</span>
                </div>
                <div
                  className={`py-2 px-3 ${
                    chat.user._id === user.user ? "bg-blue-600" : "bg-rose-500"
                  } rounded-md max-w-md text-white w-fit`}>
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={sendMessage}
            className="absolute bottom-0 left-0 right-0 bg-slate-900 flex gap-3 p-6">
            <input
              type="text"
              name="message"
              value={input}
              onChange={handleChange}
              placeholder="Enter your message"
              className="input w-full"
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
