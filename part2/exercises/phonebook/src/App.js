import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const isNameUnique = (name) => {
    const hasName = persons.filter(person => person.name === name);
    if(hasName.length === 0){
      return true;
    }
    alert(`${name} already added to phonebook`);
    return false;

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNameUnique(newName)){
      setPersons(persons.concat({name: newName}));
      console.log(`persons: ${persons}`);
      setNewName('');
    }
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Person  
                                  key={person.name}
                                  name={person.name}
                                />
                  )
      }

    </div>
  )
}

export default App
