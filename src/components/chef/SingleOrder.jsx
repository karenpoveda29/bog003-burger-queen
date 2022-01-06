import React from "react";
import { getOrders } from "../../firebaseFunctions";

export const SingleOrder = () => {
  getOrders((snapshot) => {
    snapshot.docs
      .forEach((doc) => {
        console.log(doc);
      })
    //   .then((res) => {
    //     console.log(res);
    //   });
  });

  return (
    <div>
      <h3>Esta es una order</h3>
    </div>
  );
};
