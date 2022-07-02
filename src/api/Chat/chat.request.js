import apiInstance from "../apiInstance";

const getChats = async (groupId) => {
  try {
    const response = await apiInstance.get(`/api/chat?group_id=${groupId}`);
    return response;
  } catch {
    return null;
  }
};

const sendMessage = async (chat) => {
  try {
    const response = await apiInstance.post("/api/chat", chat);
    return response;
  } catch {
    return null;
  }
};

const chatRequest = {
  getChats,
  sendMessage,
};

export default chatRequest;
