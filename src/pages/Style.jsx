import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
export const Grid = styled(motion.div)`
   display : grid;
   grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
   grid-gap: 3rem;
`

export const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }

    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
    }
`

export const DetailWrapper = styled.div`
   margin-top: 10rem;
   margin-bottom: 5rem;
   display: flex;

   .active{
       background: linear-gradient(35deg, #494949, #313131);
       color: white;
   }

   h2{
       margin-bottom: 2rem;
   }

   li {
       font-size: 1.2rem;
       line-height: 2.5rem;
   }

   ul{
       margin-top: 2rem;
   }   
`
export const Button = styled.button`
    padding: 1rem 1rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`

export const Info = styled.div`
    margin-left: 1.8rem;
    width: 100%;
`

export const Logo = styled(Link)`
    text-decoration: none;
    font-size: '1.5rem';
    font-weight: 400;
    font-family: 'Lobster Two', cursive ;
`

export const Nav = styled.div`
    padding:  4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
        font-size: 2rem;
    }
`