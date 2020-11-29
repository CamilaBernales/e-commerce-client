import React from "react";

const ProductsList = () => {
  return (
    <div>
      <table className="table-auto bg-pink-300">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dirección</th>
            <th>Telefóno</th>
            <th>Pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
            <td>
              <button>ver pedido</button>
            </td>
          </tr>
          <tr className="bg-emerald-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
            <td>
              <button>ver pedido</button>
            </td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
            <td>
              <button>ver pedido</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
