import {configureStore} from '@reduxjs/toolkit';
import topMatchesSlice from '../features/fixtureSlice';
import AllMatch from '../features/AllMatchSlice'
import AllCountry from '../features/TopCountriesSlice'
import topLeague from '../features/TopLeagueSlice'

const reducer = {
    fixture:topMatchesSlice,
    allMatches:AllMatch,
    topCountry:AllCountry,
    topLeague:topLeague

}

const store = configureStore({
    reducer:reducer,
});

export default store;
