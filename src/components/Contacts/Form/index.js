import {useState} from 'react';
import "../styles.css";

function Form({addContact, contacts}) {
  const [form, setForm] = useState({fullname: "", phoneNumber: ""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form])

    setForm({fullname: "", phoneNumber: ""});
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
      <div>
        <input 
        name="fullname" 
        placeholder='Full Name'  
        onChange={onChangeInput}
        value={form.fullname}
        />
      </div>
      <div>
        <input 
          name="phoneNumber" 
          placeholder='Phone Number' 
          onChange={onChangeInput}
          value={form.phoneNumber}
        />
      </div>

      <div className="formBtn">
        <button>Add</button>
      </div>
      </form>
    </div>
  )
}

export default Form
