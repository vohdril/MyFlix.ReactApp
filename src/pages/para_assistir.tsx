import FilmeContainer from "../components/filme_container";
import '../assets/filme_container_style.css'

function ParaAssistir() {

    return (
        <FilmeContainer
            url='/api/filmes/filmes-para-assistir'
        />)
}

export default ParaAssistir