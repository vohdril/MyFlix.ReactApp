import FilmeContainer from "../components/filme_container";
import '../assets/filme_container_style.css'

function Asssitidos() {

    return (
        <FilmeContainer
            url='/api/filmes/filmes-assistidos'
        />)
}

export default Asssitidos