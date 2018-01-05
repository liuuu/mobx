import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { extendObservable, action, runInAction } from 'mobx';

const store = extendObservable(this, {
  users: [],
  loading: false,
  loadUser: action(async () => {
    this.loading = true;
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    runInAction(() => {
      this.users = users;
      this.loading = false;
    });
  }),
});

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
