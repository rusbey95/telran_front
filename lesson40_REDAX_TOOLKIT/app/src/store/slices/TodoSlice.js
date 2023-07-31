import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
            if (!response.ok) {
                throw new Error('Server error');
            }
            const data = await response.json();
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        list: [
            { id: 1, title: 'essen', done: true },
            { id: 2, title: 'laufen', done: false },
        ],
    },
    reducers: {
        add (state, action) {
            state.list.push({
                id: Date.now(),
                title: action.payload,
                done: false,
            });
        },
        remove (state, action) {
            state.list = state.list.filter(({ id }) => id !== action.payload);
        },
        changeStatus (state, action) {
            const target = state.list.find(({ id }) => id === action.payload);
            target.done = !target.done;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'resolve';
                state.list = action.payload.map((item) => ({
                    ...item, 
                    done: item.completed,
                }));
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.paylod;
            });
    },
});

export const {add, remove, changeStatus} = todoSlice.actions;

export default todoSlice.reducer;