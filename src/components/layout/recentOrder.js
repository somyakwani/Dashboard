import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

const statusVariant = {
  Delivered: 'success',
  Cancelled: 'danger',
  Pending: 'warning',
};

const RecentOrders = () => {
  return (
    <div style={{ backgroundColor: '#222831', color: 'white', padding: '20px', borderRadius: '10px'}}>
      <h4>Recent Orders</h4>
      <Table  variant="dark">
        <thead >
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody >
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <Badge bg={statusVariant[order.status]}>{order.status}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecentOrders;