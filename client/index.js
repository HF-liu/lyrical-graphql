import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({})


const Root = () => {
  return (
    <AppoloProvider clien={client}>
      <div>Lyrical</div>
    </AppoloProvider>
  )
}

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
)
