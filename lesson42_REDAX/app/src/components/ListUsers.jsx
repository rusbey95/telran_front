import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../actions/usersAction';

function ListUsers() {
    const stateUser = useSelector((state) => state.users);
    console.log(stateUser);
    const dispatch = useDispatch();
    const deleteUserList = (id) => {
        dispatch(deleteUsers(id));
    };

    return (
        <div>
            {stateUser.map((elem) => 
                <div key={elem.id}>
                    <ul>
                        <li>
                            Id: {elem.id}
                        </li>
                        <li>
                            Name: {elem.name}
                        </li>
                        <li>
                            Email: {elem.email}
                        </li>
                    </ul>
                    <button onClick={() => deleteUserList(elem.id)}>delete</button>
                </div>
            )}
        </div>
    )
}

export default ListUsers