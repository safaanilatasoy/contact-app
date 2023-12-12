import {useEffect, useState} from 'react'

import List from "./List";
import Form from "./Form";

import './styles.css';

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: "Anıl",
      phoneNumber: "+90 541 4xx xx xx"
    },
    {
      fullname: "Ali",
      phoneNumber: "+90 532 56x xx xx"
    },
    {
      fullname: "Ayşe",
      phoneNumber: "+90 531 456 xx xx"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
