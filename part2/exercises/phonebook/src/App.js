import { useState } from 'react'
import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

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
    const filteredNames = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setPersonsToShow(filteredNames);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchInput={onSearch} />
      <h3>Add a new contact</h3>
      <PersonForm handleSubmit={handleSubmit}
                  newName={newName}
                  handleNameInput={handleNameInput}
                  newPhoneNumber={newPhoneNumber}
                  handlePhoneNumberInput={handlePhoneNumberInput}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
