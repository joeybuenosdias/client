import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** components */
import Header from './Header/Header';

/** actions */
import { fetchData } from './actions';

/** dummy data */
import { data } from '../data';

export const App = ({
  fetchData
}) => {
  useEffect(() => {
    console.log('fired')
    fetchData(data);
  }, []);

  return (
    <div className="App">
    <Header />
      Hello world
    </div>
  );
}

const mapDispatchToProps = {
  fetchData,
};

export default connect(null, mapDispatchToProps)(App);
