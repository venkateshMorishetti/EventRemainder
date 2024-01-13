import {createSlice} from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
    name:'appConfig',
    initialState:{
        isInSignInPage:false,
        displayChartOptions:false

    },
    reducers:{
        updateIsInSignInPage(state,action){
            state.isInSignInPage = !state.isInSignInPage;
        },
        updateChartOptionsStatus(state,action){
            state.displayChartOptions = !state.displayChartOptions;
        }
    }
})


export default appConfigSlice.reducer;
export const {updateIsInSignInPage, updateChartOptionsStatus} = appConfigSlice.actions;
