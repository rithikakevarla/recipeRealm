import React from 'react';
import './timebox.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Timebox({result_selected,json_obj}){
    if(!result_selected){
        return null;
    }
    return(
        <Container className='c1'>
      <Navbar expand="lg" className={`bg-body-tertiary ${result_selected ? 'expanded' : ''}`}>
        <Container>
        <p>Cook time: {json_obj["cook-time"]}</p>
          <p>Prep time: {json_obj["prep-time"]}</p>
          <p>Total time: {json_obj["total-time"]}</p>
        </Container>
      </Navbar>
    </Container>
    );
}
export default Timebox