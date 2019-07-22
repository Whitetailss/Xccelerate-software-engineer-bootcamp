import React from 'react';
import { HomeSearchBar } from '../component/home/searchBar';
import { Info } from '../component/home/info';
import { Stats } from '../component/home/stats';

export default class HomePage extends React.Component {
    render() { 
        return (  
            <div>
                <HomeSearchBar />
                <Stats />
                <Info />
            </div>
        );
    }
}