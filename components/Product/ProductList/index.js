import React, { Fragment } from 'react'
import Producto from ".."




const productos = [
  {
    id: 1,
    titulo: "Hamburguesa Angus",
    precio: 1300,
    image: 'https://www.clarin.com/img/2021/06/17/LC25eDtCT_1200x630__1.jpg',
  },

  {
    id: 2,
    titulo: "Hamburguesa 2",
    precio: 1200,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZohhnUbeOmWaQzjzUt9UnOKc5PW6vnzHq4A&usqp=CAU',
  },
  {
    id: 3,
    titulo: "Hamburguesa 3",
    precio: 1500,
    image: 'https://okdiario.com/img/2021/12/09/hamburguesas-caseras-rellenas-de-queso-cheddar.jpg',

  },
];
function Productos() {
  return (



    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {
          productos.map(producto => (
            <div className='col-md-4' key={producto.id}>
              <Producto titulo={producto.titulo} imageSource={producto.image} precio={producto.precio}></Producto>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Productos