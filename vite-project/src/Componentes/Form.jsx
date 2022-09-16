import React, {useState} from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [years, setYear] = useState(0);
    const [city, setCity] = useState('');
    const [modol, setModol] = useState('');

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
        <fieldset>
            <legend>Modulo</legend>
             <label htmlFor='fundament'>Fundamentos</label>
             <input 
             type='radio'
             id='fundament'
             value='fundament'
             checked={ modol === 'fundament' }
            onChange={ ({ target }) => setModol(target.value)} />
            <label htmlFor='Ciência da Computação'> Front-End</label>
             <input 
             type='radio'
             id='Front-End'
             value='Front-End'
             checked={ modol === 'Front-End' }
            onChange={ ({ target }) => setModol(target.value)} />
            <label htmlFor='back-end'> Back-End</label>
             <input 
             type='radio'
             id='back-end'
             value='back-end'
             checked={ modol === 'back-end' }
            onChange={ ({ target }) => setModol(target.value)} />
            <label htmlFor='Ciência da Computação'> Ciência da Computação</label>
             <input 
             type='radio'
             id='Ciência da Computação'
             value='Ciência da Computação'
             checked={ modol === 'Ciência da Computação' }
            onChange={ ({ target }) => setModol(target.value)} />
            </fieldset>
    </form>
  )
}
