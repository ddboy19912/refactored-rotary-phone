import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloProvider, InMemoryCache, ApolloClient, gql} from '@apollo/client'
import {Query} from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const POST_QUERY = gql`
query{
  categories{
    products{
      id,
      name,
      gallery,
      description,
      inStock,
      prices {
        currency{
          label
        }
        amount
      }
    }
  }
}
`
client.query({
  query: POST_QUERY,
}).then(res => console.log(res));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
    <Query></Query>
    </ApolloProvider>
  </React.StrictMode>
);


