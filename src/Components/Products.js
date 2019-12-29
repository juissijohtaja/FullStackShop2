import React, { useState, useEffect } from 'react'
import fire from '../fire'

const Products = ({ show }) => {
  const [products, setProducts] = useState([])

  

  useEffect(() => {
    let productsRef = fire.database().ref('products').orderByKey().limitToLast(100)
    productsRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let product = { 
          name: snapshot.val().name, 
          description: snapshot.val().description,
          price: snapshot.val().price,
          category: snapshot.val().category,
          id: snapshot.key
        }
      console.log('product', product)
      setProducts(products => [...products, product])
    })
  }, [])

  if (!show) {
    return null
  }
  

  return (
    <div>
      <h2>Products</h2>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>
              Description
            </th>
            <th>
              Price
            </th>
            <th>
              Category
            </th>
          </tr>
          {products.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.description}</td>
              <td>{a.price}</td>
              <td>{a.category}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Products