import '../assets/filme_detalhes_style.css'
import "react-datepicker/dist/react-datepicker.css";

import { HttpService } from '../services/api_service';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import { Footer, GenericModalDialog, Header } from './modal_dialog';
import ConfirmExcluirFilme from './confirm_excluir_filme';


const apiService = new HttpService();
let base64String: string = ""

function onChange(e: any) {
    let file = e.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = _handleReaderLoaded;
        reader.readAsBinaryString(file);
    }
};

function _handleReaderLoaded(e: any) {
    base64String = btoa(e.target.result)
};
function FilmeDetalhes(props: any) {

    let filme = props.filme
    base64String = filme.poster
    console.log(props)
    const [startDate, setStartDate] = useState(new Date(filme.anoLancamento));

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.assistido.checked)
        apiService
            .put('/api/filmes/' + filme.id,
                {
                    titulo: e.target.name.value,
                    genero: e.target.genero.value,
                    anoLancamento: format(startDate, 'yyyy-MM-dd'),
                    nota: e.target.nota.value,
                    statusAssistido: e.target.assitido.checked,
                    poster: base64String


                })
            .then((res: any) => {
                if (res) {
                    console.log(res)
                    if (props.closeModal) props.closeModal();
                    window.location.reload();



                } else {
                    console.log("deu ruim")
                }
            }
            )


    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="filme-container-detalhes">
                    <div className="filme-container-left">
                        <div className="filme-poster-card">
                            <img className="img-poster" src={filme.poster ? `data:image;base64,${filme.poster}` : "/src/assets/no_image.png"} />
                        </div>                </div>
                    <div className="filme-container-right">
                        <div className="w large">
                            <label htmlFor="name">Título</label>
                            <br />
                            <input className="w large" id="name" name="name" type="text"
                                defaultValue={filme.titulo} />
                            <br />

                            <label htmlFor="job">Gênero</label>
                            <br />
                            <input className="w large" id="genero" name="genero" type="text"
                                defaultValue={filme.genero} />
                            <br />

                            <label htmlFor="job">Ano de lançamento</label>
                            <br />
                            {/* <input className="w large" id="ano" name="ano" type="date"
                            defaultValue={format(parseISO(filme.anoLancamento), 'yyyy-MM-dd')} /> */}
                            <DatePicker className="w large"
                                selected={startDate}
                                onChange={(date: any) => setStartDate(date)}
                                dateFormat="yyyy"
                            />
                            <br />


                            <label htmlFor="job">Nota</label>
                            <br />
                            <input className="w large" id="nota" name="nota" type="number"
                                defaultValue={filme.nota} />
                            <br />

                            <label htmlFor="job">Assistido</label>
                            <br />
                            <input id="assistido" name="assitido" type="checkbox"
                                defaultChecked={filme.statusAssistido} />
                            <br />

                            <label htmlFor="job" className="form-label">Poster</label>
                            <br />
                            <input className="w large form-field" id="poster" onChange={(e) => onChange(e)} name="poste" type="file" />
                            <br />
                            <br />
                            <input type="submit" className="form-salvar" value="Salvar" />
                        </div>
                    </div>


                </div>
            </form>
            <GenericModalDialog
                trigger={
                    <button className="form-excluir">Excluir</button>
                }
                size="small"
            >
                <Header><div><h2>Excluir</h2></div></Header>
                <ConfirmExcluirFilme filmeId={filme.id} />
                <Footer>{<></>}</Footer>
            </GenericModalDialog></>
    )
}

export default FilmeDetalhes;