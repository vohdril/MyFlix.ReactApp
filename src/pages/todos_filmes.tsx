import FilmeContainer from "../components/filme_container";
import '../assets/filme_container_style.css'

function TodosFilmes() {

    return (
        <FilmeContainer
            url='/api/filmes/'
        />)
}

export default TodosFilmes