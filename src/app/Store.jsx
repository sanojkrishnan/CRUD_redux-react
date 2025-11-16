import { configureStore } from"@reduxjs/toolkit";
import userDetail from "../features/UserDetailSlice";

export const store = configureStore({      //initiating store
    reducer : {
        app : userDetail
    }
});
