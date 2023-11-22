import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AddToCart from './AddToCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
  <AddToCart min="1" max="10" price="$549" imgUrl="https://i1.adis.ws/i/forzieri/bn860120-001-1xx-t?$nlpv$" item="Common Projects Bball High" desc="white"/>
  <AddToCart min="1" max="10" price="$870" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVAdHI5crpb9J-GLwqSjVm9W3YkfXTP9G9w_lABsk2VmqL22DuE3LveR_c4OkBBTs2pw&usqp=CAU" item="Maison Margiela Future Sneakers" desc="white"/>
  <AddToCart min="1" max="10" price="$349" imgUrl="https://5.imimg.com/data5/EM/YV/MY-945992/brown-color-scarf-500x500.png" item="Our legacy Brushed Scarf" desc="Brown"/>
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();