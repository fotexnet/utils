import { toast, Flip, ToastOptions } from 'react-toastify';

function onFailure<TError extends { message: string }>(
  callback?: (error: TError) => void,
  options?: ToastOptions
): (error: TError) => void {
  return error => {
    if (callback) callback(error);
    toast(error.message || 'Ismeretlen hiba történt!', {
      type: 'error',
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      transition: Flip,
      ...options,
    });
  };
}

export default onFailure;
