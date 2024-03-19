import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import { ProjectDetail, Projects, ErrorPage } from './views';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/projects'}/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/detail/:id' element={<ProjectDetail/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
