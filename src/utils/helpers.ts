/* eslint-disable no-unused-vars */
export const getErrorResponse = (error: any): string => {
  let errorMessage: string = error.message;
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.message) errorMessage = error.response.data.message;
    }
  }
  return errorMessage;
};

