import React from 'react'
import { useForm } from 'react-hook-form'

function AddMessage() {
    const {
        register, 
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({mode: 'onSubmit'}); 

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register('name', {
                        required: 'Add name',
                    })} />
                    <div>{errors?.name && (errors?.name?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"  {...register('email', {
                        required: 'Add email',
                    })}/>
                    <div>{errors?.email && (errors?.email?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <label>Theme</label>
                    <input type="text" {...register('theme', {
                        required: 'Add theme',
                    })} />
                    <div>{errors?.theme && (errors?.theme?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <label>Message</label>
                    <textarea {...register('text', {
                        required: 'Write text',
                        maxLength: {
                            value: 200,
                            message: 'Текст привышает 200 символов'
                        }
                    })}></textarea>
                    <div>{errors?.text && (errors?.text?.message || <p>Error!</p>)}</div>
                </div>
                <div>
                    <button disabled={!isValid}>Send</button>
                </div>
            </form>
        </div>
    )
}

export default AddMessage