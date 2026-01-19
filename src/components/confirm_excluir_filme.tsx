import '../assets/filme_detalhes_style.css'
import { HttpService } from '../services/api_service';
import { IOService } from '../services/IO_service';


const apiService = new HttpService();

let base64String: string = "";

function ConfirmExcluirFilme(props?: any) {

    const handleSubmit = (e: any) => {
        window.location.reload();
        apiService
            .delete('/api/filmes/' + props.filmeId)
            .then((res: any) => {
                if (res) {
                    alert("Filme removido com sucesso!.");

                    console.log(res)
                    if (props.closeModal) props.closeModal();
                    window.location.reload();

                } else {
                    console.log("error")
                }
            }
            )



    };
    return (

        <div className="filme-container-detalhes">
            <div className="filme-container-right">
                <div className="w large flex content-exclusao">

                    <h3>Deseja excluir esse filme do sistema? Essa ação não poderá ser revertida.</h3>
                    <button type="button" className="btn-confirmar-exclusao" onClick={handleSubmit} >Confirmar</button>
                </div>
            </div>


        </div>
    )
}

export default ConfirmExcluirFilme;