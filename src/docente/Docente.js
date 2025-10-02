import './docente.css';
import profile from '../assets/profile.png'
import Header from '../components/Header';
import Menu from '../components/Menu';

function Docente() {
    return (
        <div className="Docente">

            <Header />

                <div className="docente_body">
                    <nav>
                        <Menu />
                    </nav>

                <div className='main_part'>
                    <main>
                        <div className='head_part'>
                            <div className='left_title'>
                                <span class="material-symbols-outlined">book_2</span>
                                <h3>Docente</h3>
                            </div>

                            <div className='right_title'>
                                <a href='#'>Principal</a> / <a href='#'>IDocente</a> / <a href='#'>Estudiante</a>
                            </div>
                        </div>

                        <div className='second_part'>
                           <div>
                                <p>Estudiante</p>
                                <p>Carrera</p>
                           </div>

                           <div>
                                <p>Gestión 2/2024</p>
                                <p>Periodo 1</p>
                           </div>

                        </div>
                    </main>

                    <div className='main_options'>
                        <div className='main_options_content'>
                            <div className='option'>
                                <span class="material-symbols-outlined">person_search</span>
                                <button><p>BUSCAR ESTUDIANTES</p></button>
                            </div>

                            <div className='option'>
                                <span class="material-symbols-outlined">list_alt</span>
                                <button><p>LISTADO POR MATERIAS</p></button>
                            </div>

                            <div className='option'>
                                <span class="material-symbols-outlined">account_circle</span>
                                <button><p>HISTORIAL DEL ESTUDIANTE</p></button>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default Docente;