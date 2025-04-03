import {createSlice} from '@reduxjs/toolkit';

const requestSlice = createSlice({
    name:'request',
    initialState:[],
    reducers:{
        addRequests : (state, action)=>{
            return action.payload;
        },
        removeRequest: (state, action) => {  
            const newState = state.filter((r) => r.sender._id !== action.payload);  
            return newState;
        }
    }
})

export const {addRequests, removeRequest} = requestSlice.actions;
export default requestSlice.reducer;