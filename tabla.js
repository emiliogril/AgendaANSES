// CURSO ACCES I

const acces = document.querySelector('#lista-acces');

function cargarAcces(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.acces_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.acces_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                acces.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarAcces();

// CURSO ADMINISTRACION

const administracion = document.querySelector('#lista-administracion');

function cargarAdministracion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.administracion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.administracion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                administracion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarAdministracion();

// CURSO ADMINISTRACION DEL TIEMPO

const tiempo = document.querySelector('#lista-tiempo');

function cargarTiempo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.tiempo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.tiempo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                tiempo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarTiempo();

// CURSO Atención al público, estrategias claves y recomendaciónes en tiempos de COVID-19

const atencion = document.querySelector('#lista-atencion');

function cargarAtencion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.atencion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.atencion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                atencion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarAtencion();

// CURSO Celiaquía – Mitos y verdades

const celiaquia = document.querySelector('#lista-celiaquia');

function cargarCeliaquia(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.celiaquia_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.celiaquia_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                celiaquia.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarCeliaquia();

// CURSO Computos

const computos = document.querySelector('#lista-computos');

function cargarComputos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.computos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.computos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                computos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarComputos();

// CURSO Convenios Internacionales

const convenios = document.querySelector('#lista-convenios');

function cargarConvenios(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.convenios_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.convenios_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                convenios.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarConvenios();

// CURSO Diálogos constructivos para un mejor desarrollo laboral

const dialogos = document.querySelector('#lista-dialogos');

function cargarDialogos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.dialogos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.dialogos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                dialogos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarDialogos();

// CURSO Economía doméstica y hábitos de consumo

const economica = document.querySelector('#lista-economica');

function cargarEconomica(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.economica_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.economica_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
                economica.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarEconomica();

// CURSO Estado, politicas públicas y Seguridad Social

const estado = document.querySelector('#lista-estado');

function cargarEstado(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.estado_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.estado_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        estado.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarEstado();

// CURSO Estrategias para alcanzar consensos

const estrategias = document.querySelector('#lista-estrategias');

function cargarEstrategias(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.estrategias_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.estrategias_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        estrategias.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarEstrategias();

// CURSO Excel I: Fundamentos, elementos y gestión

const excelI = document.querySelector('#lista-excelI');

function cargarExcelI(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.excelI_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.excelI_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        excelI.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarExcelI();

// CURSO Excel II: Fórmulas, funciones principales y gráficos

const excelII = document.querySelector('#lista-excelII');

function cargarExcelII(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.excelII_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.excelII_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        excelII.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarExcelII();

// CURSO Excel III: Funciones avanzadas y tablas dinámicas

const excelIII = document.querySelector('#lista-excelIII');

function cargarExcelIII(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.excelIII_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.excelIII_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        excelIII.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarExcelIII();

// CURSO Fake News en la era de la sobreinformación

const fake = document.querySelector('#lista-fake');

function cargarFake(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.fake_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.fake_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        fake.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarFake();

// CURSO Formación en perspectiva de género en la Seguridad Social

const formacion = document.querySelector('#lista-formacion');

function cargarFormacion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.formacion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.formacion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        formacion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarFormacion();

// CURSO GDE-CCOO

const gdeccoo = document.querySelector('#lista-gde-ccoo');

function cargarGdeccoo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.gdeccoo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.gdeccoo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        gdeccoo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarGdeccoo();

// CURSO GDE-EE

const gdeee = document.querySelector('#lista-gdeee');

function cargarGdeee(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.gdeee_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.gdeee_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        gdeee.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarGdeee();

// CURSO GDE-EU

const gdeeu = document.querySelector('#lista-gdeeu');

function cargarGdeeu(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.gdeeu_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.gdeeu_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        gdeeu.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarGdeeu();

// CURSO GDE-GEDO

const gdegedo = document.querySelector('#lista-gdegedo');

function cargarGdegedo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.gdegedo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.gdegedo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        gdegedo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarGdegedo();

// CURSO Herramienta ClearQuest Web

const herramientaclear = document.querySelector('#lista-herramientaclear');

function cargarHerramientaclear(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.herramientaclear_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.herramientaclear_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        herramientaclear.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarHerramientaclear();

// CURSO Herramientas de gestión organizacional con enfoques en Politicas Públicas

const herramientaPolitica = document.querySelector('#lista-herramientaPolitica');

function cargarHerramientaPolitica(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.herramientaPolitica_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.herramientaPolitica_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        herramientaPolitica.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarHerramientaPolitica();

// CURSO Identificación de las Personas – Toma de trámites y atención al ciudadano

const identificacion = document.querySelector('#lista-identificacion');

function cargarIdentificacion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.identificacion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.identificacion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        identificacion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarIdentificacion();

// CURSO Incluir: Programa de Educación Bancaria y Financiera

const incluir = document.querySelector('#lista-incluir');

function cargarIncluir(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.incluir_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.incluir_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        incluir.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarIncluir();

// CURSO Inicio de Trámites Previsionales

const inicio = document.querySelector('#lista-inicio');

function cargarInicio(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.inicio_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.inicio_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        inicio.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarInicio();

// CURSO Liderazgo centrado en el equipo

const liderazcoEquipo = document.querySelector('#lista-liderazcoEquipo');

function cargarLiderazcoEquipo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.liderazcoEquipo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.liderazcoEquipo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        liderazcoEquipo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarLiderazcoEquipo();

// CURSO Liderazgo centrado en la persona

const liderazcoPersona = document.querySelector('#lista-liderazcoPersona');

function cargarLiderazcoPersona(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.liderazcoPersona_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.liderazcoPersona_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        liderazcoPersona.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarLiderazcoPersona();

// CURSO Liquidación de Trámites Previsionales

const liquidacion = document.querySelector('#lista-liquidacion');

function cargarLiquidacion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.liquidacion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.liquidacion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        liquidacion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarLiquidacion();

// CURSO Monotributo Social

const monotributo = document.querySelector('#lista-monotributo');

function cargarMonotributo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.monotributo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.monotributo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        monotributo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarMonotributo();

// CURSO Obras Sociales - Activos

const obrasActivos = document.querySelector('#lista-obrasActivos');

function cargarObrasActivos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.obrasActivos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.obrasActivos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        obrasActivos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarObrasActivos();

// CURSO Obras Sociales - Beneficiarios

const beneficiarios = document.querySelector('#lista-beneficiarios');

function cargarBeneficiarios(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.beneficiarios_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.beneficiarios_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        beneficiarios.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarBeneficiarios();

// CURSO Operador Integral - Beneficiarios

const integral = document.querySelector('#lista-integral');

function cargarIntegral(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.integral_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.integral_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        integral.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarIntegral();

// CURSO Outlook

const outlook = document.querySelector('#lista-outlook');

function cargarOutlook(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.outlook_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.outlook_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        outlook.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarOutlook();

// CURSO Pausa activa

const pausa = document.querySelector('#lista-pausa');

function cargarPausa(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.pausa_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.pausa_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        pausa.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPausa();

// CURSO Pausa activa durante el trabajo remoto

const pausaEnremoto = document.querySelector('#lista-pausaEnremoto');

function cargarPausaEnremoto(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.pausaEnremoto_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.pausaEnremoto_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        pausaEnremoto.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPausaEnremoto();

// CURSO Pensiones No Contributivas por Invalidez

const pensiones = document.querySelector('#lista-pensiones');

function cargarPensiones(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.pensiones_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.pensiones_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        pensiones.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPensiones();

// CURSO Plataforma de capacitación de ANSES: presentación y herramientas para su uso

const plataforma = document.querySelector('#lista-plataforma');

function cargarPlataforma(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.plataforma_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.plataforma_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        plataforma.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPlataforma();

// CURSO Power Point

const powerpoint = document.querySelector('#lista-powerpoint');

function cargarPowerpoint(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.powerpoint_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.powerpoint_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        powerpoint.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPowerpoint();

// CURSO Prestaciones y Servicios de ANSES – Áreas Centrales

const prestaciones = document.querySelector('#lista-prestaciones');

function cargarPrestaciones(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prestaciones_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prestaciones_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prestaciones.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrestaciones();

// CURSO Prevención de adicciones y consumo problemático en el ámbito laboral

const prevencion = document.querySelector('#lista-prevencion');

function cargarPrevencion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prevencion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prevencion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prevencion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrevencion();

// CURSO Prevención de consumos problemáticos: Abordaje específico en mujeres

const prevencionProblematicos = document.querySelector('#lista-prevencionProblematicos');

function cargarPrevencionProblematicos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prevencionProblematicos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prevencionProblematicos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prevencionProblematicos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrevencionProblematicos();

// CURSO Prevención de consumos problemáticos: Familia como agente preventor

const prevencionfamilia = document.querySelector('#lista-prevencionfamilia');

function cargarPrevencionfamilia(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prevencionfamilia_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prevencionfamilia_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prevencionfamilia.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrevencionfamilia();

// CURSO Prevención de riesgos laborales para personal administrativo

const prevencionRiesgo = document.querySelector('#lista-prevencionRiesgo');

function cargarPrevencionRiesgo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prevencionRiesgo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prevencionRiesgo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prevencionRiesgo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrevencionRiesgo();

// CURSO Prevención y teletrabajo

const prevencionTeletrabajo = document.querySelector('#lista-prevencionTeletrabajo');

function cargarPrevencionTeletrabajo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prevencionTeletrabajo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prevencionTeletrabajo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prevencionTeletrabajo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrevencionTeletrabajo();

// CURSO Primeros auxilios

const auxilios = document.querySelector('#lista-auxilios');

function cargarAuxilios(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.auxilios_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.auxilios_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        auxilios.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarAuxilios();

// CURSO Protección contra incendios y evacuación – Marco normativo

const protecion = document.querySelector('#lista-protecion');

function cargarProtecion(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.protecion_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.protecion_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        protecion.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarProtecion();

// CURSO Protocolo COVID - 19

const covid = document.querySelector('#lista-covid');

function cargarCovid(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.covid_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.covid_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        covid.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarCovid();

// CURSO Pueblos indígenas y los derechos de la Seguridad Social. Aportes para la incorporación del enfoque intercultural y la identidad étnica

const prueblos = document.querySelector('#lista-prueblos');

function cargarPrueblos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.prueblos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.prueblos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        prueblos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarPrueblos();

// CURSO Registro de servicios públicos

const registro = document.querySelector('#lista-registro');

function cargarRegistro(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.registro_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.registro_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        registro.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarRegistro();

// CURSO Resiliencia en tiempos de Pandemia

const resiliencia = document.querySelector('#lista-resiliencia');

function cargarResiliencia(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.resiliencia_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.resiliencia_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        resiliencia.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarResiliencia();

// CURSO Seguridad de la información – La evolución  tecnológica nos integra a su ritmo

const seguridad = document.querySelector('#lista-seguridad');

function cargarSeguridad(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.seguridad_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.seguridad_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        seguridad.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSeguridad();

// CURSO Seguridad de la información - Nociones básicas 

const seguridadBasicas = document.querySelector('#lista-seguridadBasicas');

function cargarSeguridadBasicas(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.seguridadBasicas_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.seguridadBasicas_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        seguridadBasicas.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSeguridadBasicas();

// CURSO Seguridad de la información - Protección de datos personales y buenas prácticas

const seguridadDatos = document.querySelector('#lista-seguridadDatos');

function cargarSeguridadDatos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.seguridadDatos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.seguridadDatos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        seguridadDatos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSeguridadDatos();

// CURSO SIEEL - (Sistema de Expedientes Electrónicos) - Atención Virtual

const sieelVirtual = document.querySelector('#lista-sieelVirtual');

function cargarSieelVirtual(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sieelVirtual_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sieelVirtual_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sieelVirtual.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSieelVirtual();

// CURSO SIEEL (Sistema de Expedientes Electrónicos) – Gestión de expedientes 

const sieelExpedientes = document.querySelector('#lista-sieelExpedientes');

function cargarSieelExpedientes(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sieelExpedientes_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sieelExpedientes_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sieelExpedientes.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSieelExpedientes();

// CURSO SIEEL (Sistema de Expedientes Electrónicos) - Remitos

const sieelRemitos = document.querySelector('#lista-sieelRemitos');

function cargarSieelRemitos(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sieelRemitos_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sieelRemitos_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sieelRemitos.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSieelRemitos();

// CURSO SIEEL Atención Virtual – Operadores de UDAI

const sieelUdai = document.querySelector('#lista-sieelUdai');

function cargarSieelUdai(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sieelUdai_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sieelUdai_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sieelUdai.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSieelUdai();

// CURSO Sistema de Consulta de la Dirección Nacional de Migraciones – Situación Migratoria

const sistema = document.querySelector('#lista-sistema');

function cargarSistema(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sistema_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sistema_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sistema.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSistema();

// CURSO Sistema de Control Interno. Parte I

const sistemaInterno = document.querySelector('#lista-sistemaInterno');

function cargarSistemaInterno(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sistemaInterno_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sistemaInterno_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sistemaInterno.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSistemaInterno();

// CURSO Sistema de gestión de consulta - Aplicativo CRM - Nociones básicas

const sistemaCrm = document.querySelector('#lista-sistemaCrm');

function cargarSistemaCrm(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.sistemaCrm_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.sistemaCrm_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        sistemaCrm.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarSistemaCrm();

// CURSO TAE (Terminales de Autoconsulta Electrónica) -Incorporación de acceso con Huellas

const tae = document.querySelector('#lista-tae');

function cargarTae(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.tae_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.tae_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        tae.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarTae();

// CURSO Tareas de cuidado - Revisión de conceptos técnicos

const tareas = document.querySelector('#lista-tareas');

function cargarTareas(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.tareas_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.tareas_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        tareas.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarTareas();

// CURSO Toma de Decisiones

const tomas = document.querySelector('#lista-tomas');

function cargarTomas(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.tomas_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.tomas_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        tomas.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarTomas();

// CURSO Trabajo en equipo

const trabajo = document.querySelector('#lista-trabajo');

function cargarTrabajo(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.trabajo_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.trabajo_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        trabajo.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarTrabajo();

// CURSO Vejeces activas. Una mirada constructiva sobre el envejecimiento

const vejeces = document.querySelector('#lista-vejeces');

function cargarVejeces(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.vejeces_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.vejeces_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        vejeces.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarVejeces();

// CURSO Word I

const word = document.querySelector('#lista-word');

function cargarWord(){
    fetch('tabla.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(usuarios => {
            usuarios.forEach(usuario => {
                const row = document.createElement('div');
                row.innerHTML += `
                <div class="fechaColumnasBase">
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inicio de Actividad</div>
                        <div class="fechas">${usuario.word_inicio}</div>
                    </div>
                    <div class="fechasColumnas">
                        <div class="fechaTitulo">Inscripción directa</div>
                        <div class="fechas">${usuario.word_inscripcion}</div>
                    </div>
                </div>
            </div>
        </div>`;
        word.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarWord();