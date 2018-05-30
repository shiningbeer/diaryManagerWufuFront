import React from 'react';
import ReactDOM from 'react-dom';
import App from './framework/App';
import registerServiceWorker from './framework/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
