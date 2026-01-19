
import { Link, Outlet } from 'react-router-dom';
import '../App.css'
import { Footer, GenericModalDialog, Header } from './modal_dialog';
import FormNovoFilme from './form_novo_filme';


const menuConfig: any[] = [
    {
        label: 'Todos os filmes',
        url: '/todos-filmes'
    },
    {
        label: 'Para assitir',
        url: '/para-assistir'
    },
    {
        label: 'Já assistidos',
        url: '/assistidos'
    },


]
function Layout() {
    return (
        <>
            <nav>
                MyFlix v.0.1
            </nav>
            <div className='container'>
                <div className='container-left'>
                    {menuConfig.map((_item) =>
                        <>
                            <div className="btn-menu">
                                <Link to={_item.url}>{_item.label}</Link>
                            </div>
                            <ul></ul>
                        </>
                    )}
                    <br />
                    <GenericModalDialog
                        trigger={
                            <button>Novo Filme</button>
                        }
                        size="large"
                    >
                        <Header><div><h2>Novo filme</h2></div></Header>
                        <FormNovoFilme />
                        <Footer>{<></>}</Footer>
                    </GenericModalDialog>

                </div>
                <div className='container-right'>
                    <Outlet />
                </div>
            </div>

        </>
    );
}

export default Layout;