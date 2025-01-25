import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const EditItem = () => {
  const [id, setId] = useState("");
  const [itemname, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const itemdata = { id, itemname, category, quantity };

    try {
      const response = await fetch("http://localhost:8000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemdata),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert("Item Added succesfully", await response.json());
      navigate("/");
    } catch (error) {
      console.error("Failed to save item:", error.message);
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-gray-100 z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <Link
          to="/"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <MdClose size={24} />
        </Link>
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Add New Item
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              type="number"
              id="id"
              required
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {id.length === 0 && validation && (
              <span className=" text-xs text-red-400">
                Please enter the id in digits
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="itemname"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemname"
              required
              name="itemname"
              value={itemname}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {itemname.length === 0 && validation && (
              <span className=" text-xs text-red-400">
                Please enter the itemname
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Books">Books</option>
              <option value="Furniture">Furniture</option>
            </select>
            {category.length === 0 && validation && (
              <span className=" text-xs text-red-400">
                Please select the category
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              required
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {quantity.length === 0 && validation && (
              <span className=" text-xs text-red-400">
                Please enter the quantity
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onMouseDown={() => setValidation(true)}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditItem
