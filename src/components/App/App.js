import React from 'react';
import PostsContainer from '../Posts/PostsContainer';
import PostFormContainer from '../PostForm/PostFormContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from '../../store/reducer/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <PostFormContainer />
        <PostsContainer />
      </div>
    </Provider>
  );
}

export default App;
