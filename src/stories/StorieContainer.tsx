import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
interface StorieContainerProps {
    title: string
}
const StorieContainer: React.FC<StorieContainerProps> = ({children, title}) => {
    return (
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    {children}
                </CardContent>
            </Card>
    );
};

export default StorieContainer;