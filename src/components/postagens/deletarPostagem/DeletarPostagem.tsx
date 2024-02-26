import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscar, deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";


function DeletarPostagem() {
  const [postagem, setPostagem] = useState<Postagem>({} as Postagem);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/postagens");
  }

  async function deletarPostagem() {
    try {
      await deletar(`/postagens/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Postagem apagada com sucesso");
    } catch (error) {
      alert("Erro ao apagar a Postagem");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar postagem</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a postagem a seguir?
      </p>

      <div className="border bg-gray-100 flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-red-400 text-gray-200 font-bold text-2xl">
          Postagem
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{postagem.titulo}</p>
          <p>{postagem.texto}</p>
        </div>
        <div className="flex">
          <button
            className="bg-gray-100 text-red-400 hover:bg-gray-200 hover:text-gray-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-gray-600 bg-red-300 hover:bg-red-400 hover:text-white flex items-center justify-center"
            onClick={deletarPostagem}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarPostagem;
