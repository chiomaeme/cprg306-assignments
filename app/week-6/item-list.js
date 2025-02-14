"use client";

import { useState } from "react";
import { Item } from "./item";
import items from "./items.json";

export function ItemList(){
    const [sortBy, setSortBy] = useState("name");

    const sorting = (a, b) => {
        if (sortBy === "name"){
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category"){
            return a.category.localeCompare(b.category);
        } else if (sortBy === "group"){
            
            return;
        }
    }

    return (
        <section className="flex flex-col items-center">
            <h1> Sort By: </h1>
            <div className="flex-row">
            <button 
                className={`m-2 rounded-2xl p-7 ${sortBy === "name" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={(event) => setSortBy("name")}
                >
                Name
            </button>
            <button 
                className={`m-2 rounded-2xl p-7 ${sortBy === "category" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={(event) => setSortBy("category")}
                >
                Category
            </button>
            <button 
                className={`m-2 rounded-2xl p-7 ${sortBy === "group" ? "bg-blue-500" : "bg-gray-500"}`}
                onClick={(event) => setSortBy("group")}
                >
                Group By Category
            </button>
            </div>
            <ul>
                {items.sort(sorting).map((item) => (
                    <li key={item.id}>
                        <Item name={item.name} quantity={item.quantity} category={item.category} />
                    </li>
                ))}
            </ul>
        </section>
    );
}