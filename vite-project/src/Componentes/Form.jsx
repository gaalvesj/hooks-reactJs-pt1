import React, {useState} from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [years, setYear] = useState(0);
    const [city, setCity] = useState('');

  return (
    <form>
        <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor='name'>Nome Completo: </label>
            <input 
            type='text'
            id='name'
            value={name}
            onChange={ ({ target }) => setName(target.value)} />
            <label htmlFor='idade'> idade: </label>
            <input 
            type="number" 
            id='number'
            value={years}
            onChange= {({ target }) => setYear(target.value)} />
            <label htmlFor='cidade'> cidade: </label>
            <input 
            type='text'
            id='cidade'
            value={city}
            onChange={ ({ target }) => setCity(target.value)} />
        </fieldset>
    </form>
  )
}
