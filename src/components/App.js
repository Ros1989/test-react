import React from "react";
import Products from "./Products";
import Section from './Section';
import BookList from './BookList';
import favouriteBooks from '../books.json'

console.log(favouriteBooks);


export default function App() {
  return (
    <>
 <BookList books= {favouriteBooks} />
    
          <h1>Best selling products</h1>
          <Section>
              <Products
                //   imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=340"
        name="Tacos With Lime"
          price={10.99}
          quantity={30}
              />
</Section>

          

          {/* <section>
              <h2>Welcome!</h2>
              <Products imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=340"
        name="Tacos With Lime"
        price="10.99"
              />
          </section> */}
          
          <Section title='Recommended'>
              <Products
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=340"
      name="Fries and Burger"
          price={30.49}
          quantity={100}
              />
          </Section>
               
    </>
        
      
  )
}
