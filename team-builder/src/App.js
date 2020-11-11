import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import MemberForm from './MemberForm'

const initialFormValues = {
  name: "",
  email: "",
  role: "",
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValue] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValue({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role) return;

  }

  return (
    <div className="App">
        <h1>Form App</h1>
        
        <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        />

    {teamMembers.map((form) => {
      return <Form details={form} />;
    })}

    </div>
  )
}
export default App;