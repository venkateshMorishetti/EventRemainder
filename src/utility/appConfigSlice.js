import {createSlice} from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name:'appConfig',
    initialState:{
        isInSignInPage:false

    },
    reducers:{
        updateIsInSignInPage(state,action){
            state.isInSignInPage = !state.isInSignInPage;
        }
    }
})


export default appConfigSlice.reducer;
export const {updateIsInSignInPage} = appConfigSlice.actions;
