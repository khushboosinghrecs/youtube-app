import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';
import store from './utils/store';
import { Provider } from 'react-redux';
import WatchPage from './components/WatchPage';
import Body from './components/Body';
import Home from './components/Home';

export const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Body />,
        },
        {
          path: 'watch',
          element: <WatchPage />
        },
        {
              path: '/home',
              element: < Home />
        },
      ]
    }])



function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Head />
        <Outlet />
      </Provider>

    </div>
  );
}

export default App;
