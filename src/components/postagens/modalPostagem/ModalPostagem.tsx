import React from "react";
import FormularioPostagem from "../formularioPostagem/FormularioPostagem";

import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

import "./ModalPostagem.css";

function ModalPostagem() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 bg-red-400 text-gray-200 hover:bg-gray-200 hover:text-red-400">
            Nova postagem
          </button>
        }
        modal
      >
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
