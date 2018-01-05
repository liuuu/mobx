import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { extendObservable, action } from 'mobx';

const store = extendObservable(this, {
  count: 0,
  increment: action(() => {
    this.count += 1;
  }),
  decrement: action(() => {
    this.count -= 1;
  }),
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
