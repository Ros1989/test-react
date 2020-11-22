import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );
// const linkJSX = <a href="htpps://reacjs.org/" target = "_blank" rel = "noreferrer noopener"></a>

// console.log(linkJSX);

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });
// const name = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10.99$');
// const button = React.createElement('button', { type: 'button' }, 'Add to cart');

// const product = React.createElement('div', {
//   children: [image, name, price, button],
// });


//--------------------------------------------------
// const imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

// const price = 10.99;

// const productInJXS = (
//   <div>
//     <img src={imgUrl}
//       alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// console.log(product);



//------------------------------------------
//ЭТО КОМПОНЕНТ



ReactDOM.render(<App/>, document.querySelector('#root'))
// ReactDOM.render(<Products/>, document.querySelector('#root'))

// ReactDOM.render(productInJXS, document.querySelector('#root'))

//--------------------------------------
// const x = (
//   <>
//      <p>qwe</p>
//     <span>qweqwe</span>
//  </>
// )
//---------------------------------------------