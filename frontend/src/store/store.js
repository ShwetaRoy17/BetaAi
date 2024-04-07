import {configureStore} from '@reduxjs/toolkit';
import Country from '../features/TopCountriesSlice'
import topLeague from '../features/TopLeagueSlice'
import MatchSlice from '../features/MatchSlice';
import AllMatchSlice from '../features/AllMatchSlice';
// import User from '../features/user.Slice.js'

const reducer = {
    match:MatchSlice,
    Country:Country,
    topLeague:topLeague,
    AllMatches:AllMatchSlice,
//  User:User

}

const store = configureStore({
    reducer:reducer,
});

export default store;
