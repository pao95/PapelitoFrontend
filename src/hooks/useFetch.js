// import { useDispatch } from "react-redux";

// import {
//   hideLinear,
//   hideSpinner,
//   showLinear,
//   showSpinner,
// } from "@/redux/loadFeedback/loadFeedbackSlice";

import useAxiosPrivate from "./useAxiosPrivate";

const useFetchAndLoad = () => {
  // const dispatch = useDispatch();

  const axiosPrivate = useAxiosPrivate();

  const callEndpoint = async (params, funcSuccess, spinner = true) => {
    const { method, url, body } = params;
    if (spinner) {
      // dispatch(showSpinner());
    }
    // dispatch(showLinear());
    try {
      const result = await axiosPrivate({
        method,
        url,
        data: body,
      });
      if (result.status !== 200) {
        throw Error(`${result.data.message} ${result.data.title}`);
      }

      if (result.data.status === false) {
        throw Error(result.data.message);
      }

      return funcSuccess({ status: true, data: result.data });
    } catch (err) {
      /* TODO: Logear errores? */
      console.log(err);
      return funcSuccess({
        status: false,
        message: `${err.message}: ${err?.response?.data?.message}`,
      });
    } finally {
      // dispatch(hideSpinner());
      // dispatch(hideLinear());
    }
  };

  return { callEndpoint };
};

export default useFetchAndLoad;
