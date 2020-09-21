import React, { Component } from 'react'

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

export default class App extends Component {
  render() {
    return (
      <>
        <Layout />

        <GlobalStyles />
      </>
    )
  }
}
