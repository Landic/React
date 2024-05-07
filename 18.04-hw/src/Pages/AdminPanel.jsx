import React, { useState } from "react";
import { useProducts } from "../Context/ProductContext";

export default function AdminPanel() {
    const [newProduct, setNewProduct] = useState({ title: "", price: "" });
    const { products, addProduct } = useProducts();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
        ...newProduct,
        [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newProduct.title || !newProduct.price) return;
        const id = products.length > 0 ? products[products.length - 1].id + 1 : 0;
        const newProductWithId = { ...newProduct, id };
        console.log("Добавлен новый продукт:", newProductWithId);
        addProduct(newProductWithId);
        setNewProduct({ title: "", price: "" });
    };
    return (
        <>
            <h1>Admin Panel</h1>
            <h2>Add new product</h2>
            <form className='form-admin' onSubmit={handleSubmit}>
                <input type="text" name="title" value={newProduct.title} onChange={handleInputChange} placeholder="Name product"/>
                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price"/>
                <button type="submit">Add</button>
            </form>
        </>
    );
}