import React, { Component } from 'react';
import OrderCard from '../OrderCard';
import { InfoConsumer } from '../context';
import {news} from "../../data";
import {Link} from "react-router-dom";
import { Button } from 'antd';

class Order extends Component {
  // const addData = () => {
  //   axios.post('http://localhost:5000/pizza/get', {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // };
  render() {
    return <div>
      {/*<Button type="primary">Primary</Button>*/}
      <button type="button" >Click Me!</button>
      {news.map(item => {
        console.log(item)
        return <OrderCard key={item.id} item={item} />
      })}
    </div>
  //   return (
  //
  //
  //
  //     // <InfoConsumer>
  // //       <div>
  // //       <button>
  // //          Add
  // //
  // //       </button>
  // // </div>
  // //       {value => {
  // //         return value.news.map(item => {
  // //           return <OrderCard key={item.id} item={item} />;
  // //         });
  // //       }}
  //     {/*</InfoConsumer>*/}
  //   );
  }
}

export default Order;
