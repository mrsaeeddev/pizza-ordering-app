import React, {useEffect, useState} from 'react';

function CancelOrder() {
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders`, requestOptions)
        .then(response => response.json())
        .then(data => setOrders(data))
    },
 []);

 const onClickCancel = (Order_ID) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };

    fetch(`https://order-pizza-api.herokuapp.com/api/orders/${Order_ID}`, requestOptions)
    .then(response => {
        if (response.status == 200) {
            alert('Cancelled successfully')
        }
        window.location.reload();
    })
 }

  return (
    <>
    <div>{orders.map((v,i) => {
      return <div key={i}>
                <div>{v.Crust}</div>
                <div>{v.Flavor}</div>
                <div>{v.Size}</div>
                <button onClick={() => onClickCancel(v.Order_ID)}>Cancel Order</button>
                <br />
                <br />
             </div>})}
    </div>
    </>
  );
}


export default CancelOrder;
