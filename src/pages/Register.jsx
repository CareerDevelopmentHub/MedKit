import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import doctor from '../assets/doctor.png';
import patient from '../assets/patient.png';

const Register = () => {
  let navigate = useNavigate();
  return (
    <RegisterComponent>
      <h1>Signin As...</h1>
      <div className="choose">
      <div className="choice"><img src={doctor} onClick={()=>{navigate('/registerdoctor')}} alt="" /></div>
      <div className="choice"><img src={patient} onClick={()=>{navigate('/registerpatient')}} alt="" /></div>
      </div>
    </RegisterComponent>
  )
}

const RegisterComponent = styled.div`
     height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  .choose{
    display: flex;
    .choice{
      border: 2px solid black;
    border-radius: 100px;
    padding: 2rem;
    margin: 2rem;
    cursor: pointer;
      img{
        height:10rem;
      }
    }
  }
`;

export default Register