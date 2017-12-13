import * as React from 'react';
import gql from 'graphql-tag';
import { ChildProps, QueryProps, graphql } from 'react-apollo';

type InputProps = {};
type Response = {
  users: Array<{ name: string, age: number }>
};
type WrappedProps = Response & QueryProps;

class App extends React.Component<ChildProps<InputProps, Response>, WrappedProps> {
  render() {
    const data = this.props.data;
    if (!data) {
      return (<h1>ERROR</h1>);
    }
    return data.loading ?
      (<h1>Loading users...</h1>) :
      (<ul>{data.users ? data.users.map(i => (<li>{i.name} - {i.age}</li>)) : <li>No Users yet...</li>}</ul>);
  }
}

export default graphql<Response, InputProps>(gql`
  query GetAllUsers{
    users {
      name,
      age
    }
  }
`)(App);