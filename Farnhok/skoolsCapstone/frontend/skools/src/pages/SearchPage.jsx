import React from 'react';
import { SearchSearchBar } from '../component/search/searchBar';
import { SearchSortBar } from '../component/search/sortBar';
import { SearchSchoolList } from '../component/search/schoolList';
import { CompareBar } from '../component/compare/compareBar';

export default class SearchPage extends React.Component {
    render() { 
        return (  
            <div>
                <SearchSearchBar/>
                <SearchSortBar />
                <SearchSchoolList />
                <CompareBar />
            </div>
        );
    }
}