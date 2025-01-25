# React + Vite

Inventory Management
Inventory Management is a web application that allows users to manage inventory items effectively. The frontend is built using Vite, and the backend uses json-server for data storage and API functionalities.

Users can perform CRUD (Create, Read, Update, Delete) operations, filter data, and search items by category.

Features
Add Items: Create new inventory items with unique IDs.
Edit Items: Update details of existing items.
Delete Items: Remove items from the inventory.
Filter Items: Filter inventory based on specific criteria.
Search by Category: Quickly find items by category.
Responsive Design: Optimized for various devices.
Tech Stack
Frontend:
Vite (React)
Tailwind CSS
React Icons
Backend:
json-server
Installation
Prerequisites:
Node.js installed on your system.
Clone the Repository:

git clone https://github.com/your-username/inventory-management.git
cd inventory-management
Install Dependencies:

# Install frontend dependencies
npm install
Running the Project

Start the Backend (json-server):
Open a terminal and navigate to the project directory.
Run the following command:

npx json-server --watch db.json --port 8000


This will start the json-server and serve the data from db.json at http://localhost:8000.

Start the Frontend:
Open another terminal in the project directory.
Run:

npm run dev
Open your browser and go to http://localhost:5173.
Project Structure

inventory-management/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application file
│   ├── main.jsx        # Entry point
├── db.json             # Backend data file (json-server)
├── package.json        # Project configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project README
Usage
Add a New Item:

Navigate to the "Add New Item" form.
Fill in the details like ID, Item Name, Category, and Quantity.
Submit the form to add the item to the inventory.
Edit an Item:

Click the "Edit" button for the item you want to modify.
Update the details and save the changes.
Delete an Item:

Click the "Delete" button for an item to remove it from the inventory.
Filter Items:

Use the filter button to filter items based on specific conditions.
Search by Category:

Use the search bar to quickly find items by their category.
Scripts
Start the Frontend:

npm run dev


Start the Backend (json-server):

npx json-server --watch db.json --port 8000


Future Enhancements
---------------------------------------
Implement user authentication.
Add detailed analytics for inventory statistics.
Integrate real database like MongoDB or Firebase.
Export inventory data as CSV/Excel.
License
This project is licensed under the MIT License.

Contributors
Your Name – Athul Gopal K
