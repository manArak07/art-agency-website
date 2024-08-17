import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout';

function App({routes = []}) {
  return (
    <div>
      <Routes>
        {routes.map(({path, Component, withLayout}) => (
          <Route key={path} path={path} element={withLayout ? (
            <Layout>
               <Component />
            </Layout>
          ) : (
            <Component />
          )}>

          </Route>
        ))}
      </Routes>

    </div>
  );
}

export default App;
