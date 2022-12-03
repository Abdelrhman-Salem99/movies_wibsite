import React, { useState } from "react";
import axios from "axios";

// import { useSelector } from "react-redux";
import { Alert, Snackbar } from "@mui/material";
import { BASEURL } from "../data/apis";

export default ({ url, method, successMessage = "تم" }) => {
  // const token = useSelector((state) => state.userInfo.value.token);

  const [data, setData] = useState({});
  const [pending, setPending] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const [failMessage, setFailMessage] = useState("");

  const request = ({
    customUrl,
    customBaseUrl,
    customMethod,
    customHeaders = {},
    aditions,
    params,
    body,
    onSuccess,
    onFail,
  } = {}) => {
    const headers = {};
    // token && (headers.Authorization = `Token ${token}`);
    setPending(true);
    return axios({
      method: customMethod ? customMethod : method,
      baseURL: customBaseUrl ? customBaseUrl : BASEURL,
      url:
        (customUrl ? customUrl : url) +
        (aditions ? aditions.join("/") + "/" : ""),
      params,
      data: body,
      headers: { ...headers, ...customHeaders },
    })
      .then((res) => {
        onSuccess(res);
        setPending(false);
        setOpenSuccess(true);
        return res;
      })
      .catch((err) => {
        setPending(false);
        onFail(err);
        setOpenFail(true);
        setFailMessage(err.response.data.error);
        throw err;
      });
  };

  return [
    request,
    {
      data,
      isPending: pending,
      successAlert: (
        <Snackbar
          open={openSuccess}
          autoHideDuration={2000}
          onClose={() => setOpenSuccess(false)}
        >
          <Alert
            onClose={() => setOpenSuccess(false)}
            severity="success"
            sx={{ fontSize: "1.5rem" }}
          >
            {successMessage}
          </Alert>
        </Snackbar>
      ),
      failAlert: (
        <Snackbar
          open={openFail}
          autoHideDuration={2000}
          onClose={() => setOpenFail(false)}
        >
          <Alert
            sx={{
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClose={() => setOpenFail(false)}
            severity="error"
          >
            {failMessage}
          </Alert>
        </Snackbar>
      ),
    },
  ];
};
