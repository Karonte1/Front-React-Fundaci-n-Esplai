import BuenasNoches from "./components/BuenasNoches"
import BuenasTardes from "./components/BuenasTardes"
import BuenosDias from "./components/BuenosDias"
import Fruta from "./components/Fruta"
import QueRendreiza from "./components/QueRendreiza"

function App () {


    const lis = [<li>Hola</li>, <li>Qué</li>, <li>Áse</li>];
    const textosLis = ['Manzana', 'Pera', 'Plátano', 'Manzana'];
    const frutas = ['🍎', '🍐', '🍌', '🍇', '🍒', '🍊', '🍉', '🥑'];

    const provincias = ['Alava','Albacete','Alicante','Almería','Asturias','Avila','Badajoz','Barcelona','Burgos','Cáceres',
        'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara',
        'Guipúzcoa','Huelva','Huesca','Islas Baleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra',
        'Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
        'Santa Cruz de Tenerife','Teruel','Toledo','Valencia','Valladolid','Vizcaya','Zamora','Zaragoza']


    function handleClick () {
        console.log('click desde función');
    }
    function handleClickEvent (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        console.log(event);
    }


    return (
        <div className='center-vertical'>
            <h1>¿Qué renderiza React?</h1>

            <QueRendreiza tipo="string" valor={'Ivan'} />
            <QueRendreiza tipo="number" valor={37} />
            <QueRendreiza tipo="0" valor={0} />

            <QueRendreiza tipo="undefined" valor={undefined} />
            <QueRendreiza tipo="null" valor={null} />
            <QueRendreiza tipo="true" valor={true} />
            <QueRendreiza tipo="false" valor={false} />
            <QueRendreiza tipo="array vacío" valor={[]} />

            <QueRendreiza tipo="array numeros" valor={[2, 4, 6]} />
            <QueRendreiza tipo="array letras" valor={['a', 'b', 'c']} />

            <QueRendreiza tipo="array etiquetas" valor={lis} />

            {/* <ul>
                {lis}
            </ul> */}

            <h3>Los objetos no se pueden renderizar</h3>

            {/* <QueRendreiza tipo="objeto" valor={{ nombre: 'ivan' }} /> */}

            <hr />

            <h2>¿Cómo listamos elementos?</h2>
            <p>Lo más importante es entender que la prop key="" tiene que ser ÚNICA en todo el tiempo que dure la app.</p>

            <ul>
                {
                    textosLis.map((texto, index) => <li key={index}>{texto}</li>)
                }
            </ul>


            <ul>
                {
                   frutas.map(fruta => {
                    const key = crypto.randomUUID()
                    return <Fruta key={key} fruta={fruta} />
                }) 
                }
            </ul>

            <select>
                <option value="">Selecciona tu provincia</option>
                {
                    provincias.map((prov, index) => <option key={index} value={prov}>{prov}</option>)
                }
            </select>


            <hr />

            <h2>Renderizado condicional</h2>

            <BuenosDias nombre="Davide"/>
            <BuenosDias />

            <BuenasTardes nombre="Jenni" />
            <BuenasTardes />

            <BuenasNoches nombre="Jose" />
            <BuenasNoches />

            <hr />
            <h2>¡Eventos!</h2>

            <button onClick={() => { console.log('click') }}>Click</button>
            <button onClick={handleClick}>Click</button>
            
            
            
            <button onClick={(event) => { console.log(event) }}>Click con event</button>
            <button onClick={handleClickEvent}>Click con event y funcion</button>




            


          
           
        </div>
    );
}

export default App;
