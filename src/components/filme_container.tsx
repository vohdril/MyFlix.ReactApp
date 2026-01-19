import { useEffect, useState } from "react";
import FilmeCard from "./filme_card";
import { HttpService } from "../services/api_service";
import { Footer, GenericModalDialog, Header } from "./modal_dialog";
import FilmeDetalhes from "./filme_detalhes";

interface FilmeContainerProps {
    url: string
}

function FilmeContainer({ url }: FilmeContainerProps) {

    const apiService = new HttpService();
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        apiService
            .get(url)
            .then((res: any) => {
                if (res) {
                    console.log(res)
                    setData(res.data.payload.resultados);

                } else {
                    console.log("error")
                }
            }
            )
    }, [])

    return (
        data ?
            <div className="filme-container">
                {data.map((_filme) =>
                        <GenericModalDialog
                            trigger={<FilmeCard
                                filme={_filme}
                            />}
                            size="large">
                            <Header><div><h2>Informações do filme</h2></div></Header>
                            <FilmeDetalhes filme={_filme} />
                            <Footer>{""}</Footer>
                        </GenericModalDialog>
                   
                )}
            </div> : <></>
    )
}

export default FilmeContainer;