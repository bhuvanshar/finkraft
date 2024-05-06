import { React, useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgChartsReact } from "ag-charts-react";

export default function Cart() {
  const [chartOptions, setChartOptions] = useState({
    height: 1000,
    data:[
    { make: "Tesla", model: "Model Y", price: 64950 },
    { make: "Ford", model: "F-Series", price: 53850 },
    { make: "Toyota", model: "Corolla", price: 99600 },
    ],
    series: [
        {
            type: "bar",
            xKey: "make",
            yKey: "price"
        },
        {
            type: "line",
            xKey: "make",
            yKey: "price"
        }
    ]
});

  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 53850, electric: false },
    { make: "Toyota", model: "Corolla", price: 99600, electric: false },
  ]);

  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    {
      field: "price",
      valueFormatter: (p) => "€" + p.value.toLocaleString(),
      cellClassRules: {
        "green-cell": (p) => p.value > 60000,
        "red-row": (p) => p.value <= 60000,
      },
    },
    { field: "electric" },
  ]);

  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
        <AgChartsReact options={chartOptions}/>
      </div>
    </>
  );
}
