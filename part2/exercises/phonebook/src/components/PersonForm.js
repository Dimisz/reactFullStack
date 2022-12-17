const PersonForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleNameInput} />
        </div>
        <div>
          number: <input value={props.newPhoneNumber} onChange={props.handlePhoneNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  );
}

export default PersonForm;