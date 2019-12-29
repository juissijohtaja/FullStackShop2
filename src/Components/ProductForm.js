import React, { useState } from 'react'
import fire from '../fire'

const ProductForm = (props) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  if (!props.show) {
    return null
  }

  //let booksRef = fire.database().ref('books').orderByKey().limitToLast(100)

  const AddProduct = (e) => {
    e.preventDefault(); // <- prevent form submit from reloading the page

    if (name && description && price) {
      const newProduct = { name, description, price, category }
      console.log('newProduct', newProduct)
      /* Send the message to Firebase */
      fire.database().ref('products').push( newProduct )

      //clear the input
      setName('')
      setDescription('')
      setPrice('')
      setCategory('')

    } else {
      alert("Error: name, description or price missing")
    }
  }

  return (
    <div>
      <h2>Add product</h2>
      <form onSubmit={AddProduct}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          description
          <input
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>
        <div>
          price
          <input
            type='number'
            value={price}
            onChange={({ target }) => setPrice(Number(target.value))}
          />
        </div>
        <div>
          category
          <input
            value={category}
            onChange={({ target }) => setCategory(target.value)}
          />
        </div>
        <button type='submit'>Create product</button>
      </form>
    </div>
  )
}

export default ProductForm