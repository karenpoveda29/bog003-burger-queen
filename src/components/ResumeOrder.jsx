import React from "react";
import '../styles/resumeOrder.css';

export const ResumeOrder = () => {
    return (
        <div className="resume-order">
            <h2 className="resume-title">Resumen del pedido</h2>

            <hr />
            <h3 className="total">Total: 70.000 </h3>
          <div className= "btn-waiter">
            <button className="btn-cancel">Cancelar pedido</button>
            <button className="btn-sendKitchen" type="submit">Enviar a cocina</button>
          </div>
        </div>
    )
}