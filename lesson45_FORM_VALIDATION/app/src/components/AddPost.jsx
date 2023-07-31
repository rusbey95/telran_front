import React from 'react';
import { useForm } from 'react-hook-form';

function AddPost() {
    const {register, handleSubmit, formState: {errors}, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name', { 
                    required: 'Input is required', 
                    minLength: {value: 5, message: 'Надо минимум 5 символов'},
                    maxLength: {value: 40, message: 'Надо меньше 40 символов'} 
                })} />
                <button>Send</button>
            </form>
            <div>{errors?.name && (errors?.name?.message || <p>Error!</p>)}</div>
        </div>
    )
}

export default AddPost;