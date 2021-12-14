import React from 'react'
import { SingleOrder } from '../../components/chef/SingleOrder'

export function PendingCooking() {
    return (
        <div>
            <h1>Pedidos pendientes por preparar</h1>
            <SingleOrder />
        </div>
    )
}
