import homeLogo from "../../assets/23186780_6737397.svg";
import ListaPostagens from "../../components/postagens/listaPostagem/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className="container grid grid-cols-2 text-red-400">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl text-gray-600">
              Desperte a sua imaginação e faça uma viagem cósmica com suas
              ideias e opiniões!
            </p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="rounded bg-red-400 text-gray-200 hover:bg-gray-200 hover:text-red-400 py-2 px-4">
                Ver postagens
              </button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className="w-2/3" />
          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
