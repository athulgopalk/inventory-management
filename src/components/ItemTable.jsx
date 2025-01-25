import { useEffect, useState } from "react";
import {
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const ItemTable = () => {
  const [items, setItems] = useState([]);
 const navigate = useNavigate();
 const EditDetails =(id) =>{
  navigate("/item/edit/"+id);
 }
  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err.message));
  }, []);
  

  return (
    <div className="p-0 m-0">
      <header className="h-20 bg-gray-800 flex justify-items-start p-5">
        <h1 className="text-3xl text-white">
          Dynamic Inventory Management Table
        </h1>
      </header>
      <main className="w-full h-[100vh] m-10 pr-20">
        <Link
          to="/item/create"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  px-5 py-2.5 text-center me-2"
        >
          Add New Item +
        </Link>
        <div className="overflow-auto mt-5">
          <table className="table-auto border-collapse text-sm w-full">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-2 px-4 text-left font-semibold">ID</th>
                <th className="py-2 px-4 text-left font-semibold">Item Name</th>
                <th className="py-2 px-4 text-left font-semibold">Category</th>
                <th className="py-2 px-4 text-left font-semibold">Quantity</th>
                <th className="py-2 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">{item.id}</td>
                  <td className="py-2 px-4">{item.itemname}</td>
                  <td className="py-2 px-4">{item.category}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                       onClick={()=>{EditDetails(item.id)}}
                        className="flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        <MdOutlineModeEditOutline />
                        <span>Edit</span>
                      </button>
                      <button
                        
                        className="flex items-center px-4 py-2 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                      >
                        <MdOutlineDeleteOutline />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ItemTable;
