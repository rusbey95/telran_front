import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function AddTask() {
    const [task, setTask] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        setTask((dataTask) => {
            return ([...dataTask, data]);
        });

        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Task name</label>
                    <input type="text" {...register('name', {
                        required: 'please write theme name',
                    })}/>
                    <div>{errors?.name && (errors?.name?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <label>Task desckription</label>
                    <textarea {...register('description', {
                        required: 'please write text',
                    })}></textarea>
                    <div>{errors?.description && (errors?.description?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
            <div>
                {task.map((elem, index) => (
                    <div key={index}>
                        <h3>{elem.name}</h3>
                        <p>{elem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddTask