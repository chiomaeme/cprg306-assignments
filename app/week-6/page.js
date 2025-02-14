import { ItemList } from "./item-list";

export default function Page() {
    return (
      <main className="flex flex-col items-center">
        <h1 className="text-3xl p-2"> Shopping List</h1>
        <ItemList/>
      </main>
    );
}