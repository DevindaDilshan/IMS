import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, deleteItem } from '/services/api';
import {Link} from 'react-router-dom';

const Categories = () => {
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
      <h2>Categories</h2>
      <form onSubmit={handleAddItem} className="mb-3">
        
        <input
          type="text"
          placeholder="Category"
          className="form-control"
          value={newItem.category}
          onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
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

export default Categories;
