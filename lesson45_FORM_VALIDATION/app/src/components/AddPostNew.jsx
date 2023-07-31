import React from 'react';
import { useForm } from 'react-hook-form';

function AddPostNew() {
    const {register, handleSubmit, formState: { errors, isValid }, reset,} = useForm({ mode: 'onChange' });

    const submitForm = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div>
            <h2>Add post</h2>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label>Post text:</label>
                    <textarea {...register('text', {
                        required: 'заполните поле для ввода',
                        maxLength: {
                            value: 180,
                            message: 'Текст не должен привышать 180 символов',
                        },
                    })}></textarea>
                </div>
                <div>
                    {errors?.text && (errors.text?.message || <p>Заполните поле</p>)}
                </div>
                <div>
                    <label>user ID:</label>
                    <input type="number" {...register('userId', {
                        required: 'заполните поле',
                        min: {value: 0, message: 'Должно быть больше 0'},
                        max: {value: 20, message: 'Должно быть меньше 21'},
                        valueAsNumber: true,
                    })} />
                </div>
                <div>
                    {errors?.userId && (errors.userId?.message || <p>Заполните поле</p>)}
                </div>
                <div>
                    <button disabled={!isValid}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPostNew;