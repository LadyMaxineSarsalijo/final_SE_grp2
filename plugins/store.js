import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../screens/Authentication/authSlice'
//import deviceReducer from '../screen/components/deviceSlice'
import authReducer from '../screen/components/userSlice'

export default configureStore({
  reducer: {
    auth: authReducer
    
  },
 
})