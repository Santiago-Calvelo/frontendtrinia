// imports
import React from 'react';
import Header from './Header';
import Footer from './footer';
import List from './List'

const App = () => {
  return (
    <div>
      <Header title='Notas'/>
      <List/>
      <Footer />
    </div>
  );
};

export default App;
