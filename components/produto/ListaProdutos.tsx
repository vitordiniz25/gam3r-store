import { produtos } from "@/core";
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado";
import ProdutoItem from "./ProdutoItem";

export default function ListaProdutos() {
    return produtos.length ? (
        <div
            className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
            "
        >
            {produtos.map((produto) => (
                <ProdutoItem produto={produto} key={produto.id} />
            ))}
        </div>
    ) : (
        <ProdutoNaoEncontrado semBotaoVoltar/>
    )
}