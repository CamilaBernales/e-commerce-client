import React from "react";
import Swal from "sweetalert2";
import { modalTable } from "./ModalDetail";
const ProductsList = () => {
  const openModalFn = () => {
    const modal = Swal.fire({
      html: modalTable,
      showCloseButton: true,
      focusConfirm: false,
      showConfirmButton: false
    });
    return modal;
  };

  return (
    <div className="p-1">
      <table className="table-auto bg-red-200 min-w-full border-separate border border-red-500 ">
        <thead className="justify-between">
          <tr className="bg-red-400 text-white">
            <th className="border border-red-500">Nombre</th>
            <th className="border border-red-500">Dirección</th>
            <th className="border border-red-500">Telefóno</th>
            <th className="border border-red-500">Pedido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-500">Intro to CSS</td>
            <td className="border border-red-500">
              Adam min-w-full min-w-full{" "}
            </td>
            <td className="border border-red-500">858</td>
            <td className="border border-red-500">
              <button>ver pedido</button>
            </td>
          </tr>
          <tr>
            <td className="border border-red-500">A Long and</td>
            <td className="border border-red-500">Adam</td>
            <td className="border border-red-500">112</td>
            <td className="border border-red-500">
              <button>ver pedido</button>
            </td>
          </tr>
          <tr>
            <td className="border border-red-500">Intro to JavaScript</td>
            <td className="border border-red-500">Chris</td>
            <td className="border border-red-500">1,280</td>
            <td className="border border-red-500">
              <button onClick={openModalFn}>ver pedido</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
