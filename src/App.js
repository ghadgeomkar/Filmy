import { Provider } from 'react-redux';
import './App.css';
import Body from './Comopnents/Body';
import store from './Store/Store';

function App() {


  return (
    <Provider store={store} >
      <Body />
    </Provider>
  );
}

export default App;
