//Importing Libraries from React Native and My Other Components
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AccountFormReducer from './AccountFormReducer';
import AccountReducer from './AccountReducer';
import LibraryReducer from './LibraryReducer'

//Exports Variables so other parts of my APp can use it
export default combineReducers({
  auth: AuthReducer,
  accountForm: AccountFormReducer,
  accounts: AccountReducer,
  libraries: LibraryReducer
});
