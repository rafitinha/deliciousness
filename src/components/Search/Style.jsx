import styled from 'styled-components';

export const FormStyle = styled.form`
    margin: 0rem 10rem;
    padding-top: 1rem;
    
    div{
      position: relative;
      width: 100%;
    }
    
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5 rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 0.6rem;
        outline: none;
        width: 100%;
        font-weight: bold;
    }

    svg{
        position: absolute;
        top:50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`