import React from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from '../actions/usersAction';


function FormUsers() {
  const dispatch = useDispatch();
  function sendData(e) {
    e.preventDefault();
    const list = {
      id: Date.now(),
      name: e.target.name.value,
      email: e.target.email.value,
    };
    dispatch(addUsers(list));
    e.target.reset();
    console.log(list);

  }

  return (
    <div>
        <form onSubmit={sendData}>
            <input type="text" placeholder="Name" name="name"/>
            <input type="email" placeholder="Email" name="email"/>
            <button>Send</button>
        </form>
    </div>
  )
}

export default FormUsers;