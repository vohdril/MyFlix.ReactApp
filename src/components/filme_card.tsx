import { format } from "date-fns";

interface FilmeCardProps {
    filme: any

}

function FilmeCard({ filme }: FilmeCardProps) {
    return (
        <div className="filme-card">

            <div className="filme-card-info-container">
                {
                    filme.statusAssistido ?
                        <button className="badge-assistido">
                            ✓
                        </button> : <></>

                } <div className="filme-poster-card">
                    <img className="img-poster" src={filme.poster ? `data:image;base64,${filme.poster}` : "/src/assets/no_image.png"} />
                </div>
                <div className="filme-titulo">
                    <div>{filme.titulo}</div>


                </div>
                <div className="filme-detalhes">
                    <div >{filme.genero}
                    </div>
                    <div>
                        {format(new Date(filme.anoLancamento), "yyyy")}
                    </div>

                </div>
            </div>
        </div>
    )
}


export default FilmeCard;