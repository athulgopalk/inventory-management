import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemTable from "./components/ItemTable";
import CreateItem from "./components/CreateItem";
import EditItem from "./components/EditItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemTable />} />
        <Route path="/item/create" element={<CreateItem />} />
        <Route path="/item/edit/:itemid" element={<EditItem />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
