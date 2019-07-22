import React from 'react';
// import { HomeSearchBar } from '../component/home/searchBar';
// import { Info } from '../component/home/info';
// import { Stats } from '../component/home/stats';

import { EventModalSpecial } from "../component/schoolCms/EventModal";
import { CmsShowEvents } from "../component/schoolCms/CmsShowEvents";


export default class CmsEventPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 

            singleEvent: false

         }
         this.addEvent = this.addEvent.bind(this)
    }

    addEvent () {

        this.setState(prevState => ({
            singleEvent:!prevState.singleEvent
         }))
     }

    

    render() { 

        return (  
            <div>

                        <EventModalSpecial/>
                        <CmsShowEvents/>
                    
                    </div>

        );
    }
}