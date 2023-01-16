import React from "react";
import { useData } from "../../Context/Context";
import "./Toast.css";

const Toast = ({ msg }) => {
  const { showtoast, dispatch } = useData();
  return (
    <>
      <div className="toast__container">
        <span>
          <p class="text-sm">
            {msg}{" "}
            <i
              class="fa fa-close close-toast-success"
              onClick={() =>
                dispatch({ type: "SET_SHOW_TOAST", payload: !showtoast })
              }
            ></i>
          </p>
        </span>
      </div>
    </>
  );
};

export { Toast };
