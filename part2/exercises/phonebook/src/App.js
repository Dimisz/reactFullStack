import { useState } from 'react'
import Person from './components/Person';
import SearchField from './components/SearchField';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [personsToShow, setPersonsToShow] = useState(persons);

  // CHECKING IF NAME AND PHONE NUMBER ARE UNIQUE
  const isNameUnique = (name) => {
    const hasName = persons.filter(person => person.name === name);
    if(hasName.length === 0){
      return true;
    }
    alert(`${name} already added to phonebook`);
    return false;

  }

  const isPhoneNumberUnique = (phoneNumber) => {
    const hasNumber = persons.filter(person => person.number === phoneNumber);
    if(hasNumber.length === 0){
      return true;
    }
    alert(`${phoneNumber} already added to phonebook`);
    return false;

  }

  //HANDLING SUBMISSION OF THE FORM WITH NAME AND PHONE NUMBER
  const handleSubmit = (event) => {
    event.preventDefault();
    if(isNameUnique(newName) && isPhoneNumberUnique(newPhoneNumber)){
      setPersons(persons.concat({ name: newName, number: newPhoneNumber, id: persons.length + 1 }));
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

  //HANDLING THE SEARCH FIELD
  const onSearch = (event) => {
    const filteredNames = persons.filter(person => person.name.includes(event.target.value));
    setPersonsToShow(filteredNames);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchField handleSearchInput={onSearch} />
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
      {personsToShow.map((person) => <Person  
                                  key={person.id}
                                  name={person.name}
                                  number={person.number}
                                />
                  )
      }

    </div>
  )
}

export default App
