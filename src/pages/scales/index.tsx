import MainContainer from "containers/MainContainer";
import Scale from 'features/Sacale';
import React from 'react';

const ScalePage: React.FC = props => {
    return (
        <MainContainer
            title="Escalas"
        >
            <Scale/>
        </MainContainer>
    );
};

export default ScalePage;