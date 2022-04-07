import { Container } from '@mui/material';
import React from 'react';


const AuthContainer: React.FC = ({children}) => {
    return (
        <Container maxWidth="xl">
            {children}
        </Container>
    );
};

export default AuthContainer;