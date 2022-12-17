import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phone: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');


  const isNameUnique = (name) => {
    const hasName = persons.filter(person => person.name === name);
    if(hasName.length === 0){
      return true;
    }
    alert(`${name} already added to phonebook`);
    return false;

  }

  const isPhoneNumberUnique = (phoneNumber) => {
    const hasNumber = persons.filter(person => person.phone === phoneNumber);
    if(hasNumber.length === 0){
      return true;
    }
    alert(`${phoneNumber} already added to phonebook`);
    return false;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNameUnique(newName) && isPhoneNumberUnique(newPhoneNumber)){
      setPersons(persons.concat({ name: newName, phone: newPhoneNumber }));
      console.log(`persons: ${persons}`);
      setNewName('');
      setNewPhoneNumber('');
    }
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneNumberInput = (event) => {
    setNewPhoneNumber(event.target.value);
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handlePhoneNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Person  
                                  key={person.name}
                                  name={person.name}
                                  number={person.phone}
                                />
                  )
      }

    </div>
  )
}

export default App
