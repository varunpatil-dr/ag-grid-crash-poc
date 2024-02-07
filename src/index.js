import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "@ag-grid-community/react"; // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css"; // Core CSS
import "@ag-grid-community/styles/ag-theme-alpine.css"; // Theme

import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridExample = () => {
  const rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  const colDefs = [
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ];

  const [rowClass, setRowClass] = useState("");

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ width: "1000px", height: "1000px" }}
    >
      <button onClick={() => setRowClass("xyz")}>Click to crash</button>
      <AgGridReact rowData={rowData} columnDefs={colDefs} rowClass={rowClass} />
    </div>
  );
};


const root = createRoot(document.getElementById("root"));
root.render(<GridExample />);
