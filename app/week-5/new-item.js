"use client";
import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const increment = (event) => {
        event.preventDefault();
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = (event) => {
        event.preventDefault();
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const handleNameChange = (event) => {
        if (event.target.value.length > 15){
            return;
        }
        setName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            name: name,
            quantity: quantity,
            category: category,
        }
        
        console.log(item);
        alert(`Item added: ${name}\nQuantity: ${quantity} \nCategory: ${category} `);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-600 flex flex-col w-1/4 m-auto mt-10 p-5 rounded-xl">
            <label> Name: </label>
            <input
                className="rounded-xl p-1 m-1 text-black"
                required 
                type="text" 
                value={name} 
                onChange={handleNameChange}
            />

            <label>Current quantity: {quantity}</label>
            <div className="flex row">
                <button 
                    className="text-3xl hover:text-blue-500 bg-[#424949] rounded-xl pl-3 pr-3 m-auto mr-2" 
                    onClick={decrement}>-
                </button>
                <button 
                    className="text-3xl hover:text-blue-500 bg-[#424949] rounded-xl pl-3 pr-3 m-auto" 
                    onClick={increment}>+
                </button>
            </div>
            <label> Category:</label>
            <select
                className="rounded-xl p-1 m-1 text-black"
                value={category}
                onChange={(event) => handleCategoryChange(event.target.value)}
            >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Meat">Meat</option>
                <option value="Bakery">Bakery</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            <button type="submit">Done</button>
        </form>
    );
}