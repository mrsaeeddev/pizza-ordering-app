import React from 'react';
import { Button } from 'react-bootstrap';
import Context from '../../context/createContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
  return (
    <>
    <Context.Provider value={Context}>
       <Button>Start here</Button>
    </Context.Provider> 
    </>
  );
}


export default Main;
