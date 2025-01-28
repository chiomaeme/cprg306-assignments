export function Item({name, quantity, category}) {
    return (
        <ol className="bg-[#474242] p-4 m-4 rounded-3xl">
            <li>Name: {name}</li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ol>
    );
}