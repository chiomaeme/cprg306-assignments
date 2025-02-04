"use client";
import { useState } from "react";

export function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return (
      <div className="m-auto p-4 rounded-lg shadow-lg text-center flex flex-col">
        <p>Current quantity: {quantity}</p>
        <p > 
            <button 
                className="text-3xl hover:text-blue-500 bg-[#424949] rounded-xl pl-3 pr-3 m-auto mr-2" 
                onClick={decrement}>-
            </button>
            <button 
                className="text-3xl hover:text-blue-500 bg-[#424949] rounded-xl pl-3 pr-3 m-auto" 
                onClick={increment}>+
            </button>
        </p>
      </div>  
    );
}