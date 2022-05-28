import apiInstance from "../apiInstance";

const getStages = () => {
  return apiInstance
    .get(`/api/stage`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const addStage = (stage) => {
  return apiInstance
    .post(`/api/stage`, stage)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const getOneStage = (stageID) => {
  return apiInstance
    .get(`/api/stage/${stageID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const updateStage = (stage, stageID) => {
  return apiInstance
    .put(`/api/stage/${stageID}`, stage)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const deleteStage = (sstageID) => {
  return apiInstance
    .delete(`/api/stage/${sstageID}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

const stageRequest = {
  getStages,
  addStage,
  getOneStage,
  updateStage,
  deleteStage,
};
export default stageRequest;
