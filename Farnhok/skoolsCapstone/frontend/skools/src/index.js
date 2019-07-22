import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './redux/store';
 
const AppFinal = () => {
    return(
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    )
}

ReactDOM.render(<AppFinal />, document.getElementById('root'));

serviceWorker.unregister();
