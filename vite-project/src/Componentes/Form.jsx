import React, {useState} from 'react'

export default function Form() {
    const [name, setName] = useState('')


  return (
    <form>
        <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor='name'>Nome Completo</label>
            <input 
            type='text'
            id='name'
            value={name}
            onChange={ ({ target }) => setName(target.value)} />
        </fieldset>
    </form>
  )
}
