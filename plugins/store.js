import { configureStore } from '@reduxjs/toolkit'
//import authReducer from '../screens/Authentication/authSlice'
//import deviceReducer from '../screen/components/deviceSlice'
import authReducer from '../screen/components/userSlice'
import deviceReducer from '../screen/components/deviceSlice'
import historyReducer from '../screen/components/HistorySlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    devices: deviceReducer,
    history: historyReducer,

    
  },
 
})