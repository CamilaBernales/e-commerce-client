import React from "react";
import BtnNew from "./BtnNew";
const ProductsList = () => {
  return (
    <div className="container bg-red-200">
      <div className="p-1">
        <table className="table-auto bg-red-200 min-w-full border-separate border border-red-500 ">
          <thead className="justify-between">
            <tr className="bg-red-400 text-white">
              <th className="border border-red-500">Prenda</th>
              <th className="border border-red-500">Precio</th>
              <th className="border border-red-500">Stock</th>
              <th className="border border-red-500">Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-red-500">zapatos</td>
              <td className="border border-red-500">858</td>
              <td className="border border-red-500">si</td>
              <td className="border border-red-500">
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td className="border border-red-500">zapatos</td>
              <td className="border border-red-500">858</td>
              <td className="border border-red-500">si</td>
              <td className="border border-red-500">
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td className="border border-red-500">zapatos</td>
              <td className="border border-red-500">858</td>
              <td className="border border-red-500">si</td>
              <td className="border border-red-500">
                <button>Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <BtnNew />
    </div>
  );
};

export default ProductsList;
