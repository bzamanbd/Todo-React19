import styled from "styled-components";

export const MainContainer = styled.div` 
    background-color: #222;
    width: 40rem;
    min-height: 30rem;
    margin: 3rem auto;
    border-radius: 1rem; 
    padding: 2rem; 
    text-align: center;
    box-shadow:  0 0px 8px 4px rgba(255, 255, 255, 0.4), 0 0px 10px -20px rgba(255, 255, 255, 0.4);
    color: #afafaf;
    
`;

export const TodoInput = styled.input`
    padding: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 1rem 0rem 0rem 1rem;
    outline: none;
    color: #333;
    &:focus {
        border-color: #0062ff;
    }
`;


export const TodoSubmitBtn = styled.button`
    padding: 16px 25px;
    font-size: 16px;
    border: none;
    border-radius: 0rem 1rem 1rem 0rem ;
    outline: none;
    background-color: #014b64;
    color: #cbcbcb;
    &:focus {
        border-color: #0062ff;
    }

    &:hover{ 
        background-color: #016283;
    }

`;

export const TodoItem = styled.div`
    padding: 15px 15px;
    font-size: 16px;
    border: none;
    border-radius: 1rem;
    outline: none;
    color: #cbcbcb;
    background-color: #014b64;
    margin: 0rem auto;
    margin-bottom: 1rem;
    max-width: 20rem;
    display: flex;
    align-items: center;
    
    &:hover {
        background-color: #016283;
    }
`;

export const TodoActionBtn = styled.button`
    padding: 16px 25px;
    font-size: 16px;
    border: none;
    border-radius: 0rem 1rem 1rem 0rem ;
    outline: none;
    background-color: #014b64;
    color: #cbcbcb;
    &:focus {
        border-color: #0062ff;
    }

    &:hover{ 
        background-color: #016283;
    }

`;
