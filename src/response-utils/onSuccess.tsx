import { AxiosResponse } from 'axios';
import { toast, Flip, ToastOptions } from 'react-toastify';
import IResult from '../interfaces/IResult';

function onSuccess<TRecord extends Record<string, unknown>>(
  callback?: (response: AxiosResponse<IResult<TRecord>>) => void,
  options?: ToastOptions
): (response: AxiosResponse<IResult<TRecord>, unknown>) => void {
  return response => {
    if (callback) callback(response);
    toast(response.data.message, {
      type: 'success',
      autoClose: 2000,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      transition: Flip,
      ...options,
    });
  };
}

export default onSuccess;
