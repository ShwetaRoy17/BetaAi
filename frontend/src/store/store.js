import {configureStore} from '@reduxjs/toolkit';
import topMatchesSlice from '../features/fixtureSlice';
import AllMatch from '../features/AllMatchSlice'
import AllCountry from '../features/TopCountriesSlice'
import AllLeague from '../features/TopLeagueSlice'

export const store = configureStore({
    reducer:{
        fixture:topMatchesSlice,
        allMatches:AllMatch,
        topCountry:AllCountry,
        topLeague:AllLeague

    },
});
