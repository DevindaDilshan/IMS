import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, deleteItem } from '/services/api';
import {Link} from 'react-router-dom';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '', price: '', category: '' });

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const { data } = await fetchItems();
    setItems(data);
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    await createItem(newItem);
    setNewItem({ name: '', quantity: '', price: '', category: '' });
    fetchInventory();
  };

  const handleDelete = async (id) => {
    await deleteItem(id);
    fetchInventory();
  };

  return (
    <div className="container mt-5">
      <h2>Inventory</h2>
      <Link to="/dashboard" className="btn btn-success">
        Go to dashboard
      </Link>
      <form onSubmit={handleAddItem} className="mb-3">
        <input
          type="text"
          placeholder="Name"
          className="form-control"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="form-control"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="form-control"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          className="form-control"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
