import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem;
    font-size: 1rem;
    color: palevioletred;
    outline: none;
    border: 1 px solid palevioletred;
    background-color: white;
    margin: 1 rem;
    border-radius: 3 px;
`;

const Button = ({ children }) => {
    return (
        <StyledButton>{children}</StyledButton>
    )
};

export default Button;