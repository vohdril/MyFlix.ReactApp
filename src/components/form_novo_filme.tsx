import { useState } from 'react';
import '../assets/filme_detalhes_style.css'
import { HttpService } from '../services/api_service';
import { IOService } from '../services/IO_service';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';


const apiService = new HttpService();

let base64String: string = "";


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


function FormNovoFilme(closeModal?: any) {

    const [startDate, setStartDate] = useState(new Date());


    const handleSubmit = (e: any) => {
        e.preventDefault();
        apiService
            .post('/api/filmes/',
                {
                    titulo: e.target.titulo.value,
                    genero: e.target.genero.value,
                    anoLancamento: format(startDate, 'yyyy-MM-dd'),
                    poster: base64String
                })
            .then((res: any) => {
                if (res) {
                    console.log(res)
                    if (closeModal) closeModal.closeModal();
                    window.location.reload();

                } else {
                    console.log("error")
                }
            }
            )



    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="filme-container-detalhes">
                <div className="filme-container-right">
                    <div className="w large">
                        <label htmlFor="name" className="form-label">Título</label>
                        <br />
                        <input className="w large form-field" id="titulo" name="titulo" type="text" />
                        <br />

                        <label htmlFor="job" className="form-label" >Gênero</label>
                        <br />
                        <input className="w large form-field" id="genero" name="genero" type="text" />
                        <br />

                        <label htmlFor="job" className="form-label">Ano de lançamento</label>
                        <br />
                        <DatePicker className="w large"
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                            dateFormat="yyyy"
                        />
                        <br />                        <br />

                        <label htmlFor="job" className="form-label">Poster</label>
                        <br />
                        <input className="w large form-field" id="poster" onChange={(e) => onChange(e)} name="poster" type="file" />
                        <br />

                        <br />
                        <input type="submit" className="form-salvar" value="Salvar" />
                    </div>
                </div>


            </div>
        </form>
    )
}

export default FormNovoFilme;