import MainContainer from "containers/MainContainer";
import ImportProducaoDiaria from "features/ImportProducaoDiaria";

const ImportProducaoDiariaPage = props => {
    return (
        <MainContainer title="Importações">
            <ImportProducaoDiaria/>
        </MainContainer>
    );
};

export default ImportProducaoDiariaPage;