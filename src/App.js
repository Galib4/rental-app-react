import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Header } from './shared/Header';
import { RentalList } from './components/rental/RentalList';
import { RentalDetail } from './components/rental/RentalDetail';


function App() {



  return (
   <BrowserRouter>
    <div className='App'>
     <Header />
     <div className='container'>
     <Route exact path='/' render={() => <Redirect to='/rentals' />} />
       <Route exact path='/rentals' component={RentalList} />
       <Route exact path='/rentals/:id' component={RentalDetail} />
    </div>
    </div>
   </BrowserRouter> 
  );
}


export default App;
