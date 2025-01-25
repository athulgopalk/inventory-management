import { useEffect, useState } from "react";
import {
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const navigate = useNavigate();

  const EditDetails = (id) => {
    navigate("/item/edit/" + id);
  };

  const RemoveDetails = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        const response = await fetch(`http://localhost:8000/items/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert("Item deleted successfully");
        window.location.reload();
      } catch (error) {
        console.error("Failed to delete item:", error.message);
        alert("Failed to delete item: " + error.message);
      }
    }
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
    if (category) {
      setFilteredItems(
        items.filter((item) =>
          item.category.toLowerCase().includes(category.toLowerCase())
        )
      );
    } else {
      setFilteredItems(items);
    }
  };

  const handleSort = () => {
    const sorted = [...filteredItems].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.quantity - b.quantity;
      } else {
        return b.quantity - a.quantity;
      }
    });
    setFilteredItems(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  useEffect(() => {
    fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="p-0 m-0 w-full overflow-hidden">
      <header className="h-20 bg-gray-800 flex justify-items-start p-5 w-full">
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-white">
          Dynamic Inventory Management Table
        </h1>
      </header>
      <main className="flex flex-col items-start p-5 w-full min-h-screen">
        <Link
          to="/item/create"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm  px-5 py-2.5 text-center me-2"
        >
          Add New Item +
        </Link>
        <div className="mt-5 flex  gap-10">
          <input
            type="text"
            placeholder="Filter by Category"
            value={filterCategory}
            onChange={(e) => handleFilter(e.target.value)}
            className="p-1 h-10  border rounded-lg text-sm"
          />
          <button
            onClick={handleSort}
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sort by Quantity ({sortOrder === "asc" ? "Asc" : "Desc"})
          </button>
        </div>
        <div className="mt-2  overflow-scroll sm:overflow-scroll md:overflow-scroll lg:overflow-hidden w-full py ">
          <table className="table-auto border-collapse min-w-full p-4">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-2 px-4 text-left font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  ID
                </th>
                <th className="py-2 px-4 text-left font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  Item Name
                </th>
                <th className="py-2 px-4 text-left font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  Category
                </th>
                <th className="py-2 px-4 text-left font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  Quantity
                </th>
                <th className="py-2 px-4 text-left font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr
                  key={index}
                  className={`border-t hover:bg-gray-50 ${
                    item.quantity < 10 ? "bg-red-100" : ""
                  }`}
                >
                  <td className="py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.id}
                  </td>
                  <td className="py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.itemname}
                  </td>
                  <td className="py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.category}
                  </td>
                  <td className="py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    {item.quantity}
                  </td>
                  <td className="py-2 px-4 text-xs sm:text-sm md:text-base lg:text-lg">
                    <div className="flex flex-col sm:flex-row lg:flex-row justify-start space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-2">
                      <button
                        onClick={() => {
                          EditDetails(item.id);
                        }}
                        className="flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                      >
                        <MdOutlineModeEditOutline className="mr-0.5" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => {
                          RemoveDetails(item.id);
                        }}
                        className="flex items-center px-4 py-2 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                      >
                        <MdOutlineDeleteOutline className="mr-0.5" />
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
