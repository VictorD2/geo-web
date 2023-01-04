export const API2 = 'https://whale-app-9vew4.ondigitalocean.app';
// export const API = 'http://localhost:4004';
export const API = 'https://geoapp-86zdb.ondigitalocean.app';
// export const API2 = 'http://192.168.1.56:4000';

export const toastConfig = (message: string, type: 'warning' | 'error' | 'success') => {
  return {
    render: message,
    type,
    isLoading: false,
    autoClose: 2000,
    closeButton: true,
    draggable: true,
  };
};
