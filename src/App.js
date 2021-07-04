import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { CssBaseline } from '@material-ui/core';
import Routes from 'route';

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CssBaseline />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
