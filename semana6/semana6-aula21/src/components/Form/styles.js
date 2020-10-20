import styled from "styled-components";

/* Componentes estilizados utilizados no arquivo Form.js */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-size: 2rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-top: 50px;
    }
    button {
        margin-top: 50px;
        padding: 30px;
        color: black;
        font-weight: bold;
        border-radius: 5%;
    }
    input,
    select,
    option {
        width: 80%;
        padding: 5px 15px;
        border-radius: 5%;
    }
`;

export const Final = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
c    background-attachment: fixed;
    background-size: cover;
    text-align: center;

    div {
        width: 600px;
        height: 700px;
        background-color: #0000008a;
        border-radius: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        margin-bottom: 50px;
    }

    ul {
        list-style: none;
        font-size: 1.5rem;
    }

    * {
        color: white;
    }

    a {
        margin-top: 50px;
        font-size: 2rem;
    }
`;

export const Error = styled.p`
    color: red;
`;

export const Display = styled.p`
    color: #ff7b12;
`;
