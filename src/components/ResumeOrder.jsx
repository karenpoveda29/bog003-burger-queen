import React from "react";
import '../styles/resumeOrder.css';

export const ResumeOrder = () => {
    return (
        <div>
            <h2 className="resume-title">Resumen del pedido</h2>

            <hr />
            <h3 className="total">Total: 70.000 </h3>
            <button className="btn-cancel">Cancelar pedido</button>
            <button className="btn-sendKitchen" type="submit">Enviar a cocina</button>
           
        </div>
    )
}