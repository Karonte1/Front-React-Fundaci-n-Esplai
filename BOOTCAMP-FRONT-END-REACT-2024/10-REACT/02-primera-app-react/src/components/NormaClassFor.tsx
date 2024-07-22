export default function NormaClassFor () {
  return <>
    {/* //! No puedes usar class="" hay que usar className="" */}
    <h2 className="bg-red-200">Título con clases</h2>

    {/* //! No puedes usar for="" hay que usar htmlFor="" */}
    <label htmlFor="name">Nombre:</label>
    <input id="name" type="text" placeholder="Nombre..." />
  </>
}

// React.createElement('h2', { className: 'bg-red-200'}, 'Titulo con classes');
// React.createElement('label', { htmlFor: 'name'}, null);