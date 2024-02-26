import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagemProps {
  post: Postagem;
}

function CardPostagem({ post }: CardPostagemProps) {
  return (
    <div className="border-gray-200 bg-gray-100 border flex flex-col rounded overflow-hidden justify-between">
      <div>
        <div className="flex w-full text-gray-800 bg-red-400 py-2 px-4 items-center gap-4 uppercase">
          <img src={post.usuario?.foto} className="h-12 rounded-full" alt="" />
          <h3 className="text-lg font-bold text-center">
            {post.usuario?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Tema: {post.tema?.descricao}</p>
          <p>
            Data:{" "}
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(post.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarPostagem/${post.id}`}
          className="w-full bg-gray-100 text-red-400 hover:bg-gray-200 hover:text-gray-600  flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarPostagem/${post.id}`}
          className="text-gray-600 bg-red-300 hover:bg-red-400 hover:text-white w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
