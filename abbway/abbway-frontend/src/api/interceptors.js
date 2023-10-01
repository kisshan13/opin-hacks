function responseSuccess(response) {
  return {
    success: true,
    data: response?.data,
    message: response?.data?.message,
    status: response?.status,
  };
}

function responseError(errorResponse) {
  return {
    success: false,
    status: errorResponse?.response?.status,
    message: errorResponse?.response?.data?.message,
    data: errorResponse?.response?.data,
  };
}

const interceptors = {
  response: {
    success: responseSuccess,
    error: responseError,
  },
};

export default interceptors;
