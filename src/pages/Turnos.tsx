import MainContainer from "containers/MainContainer";
import Turnos from "features/Turnos";
import { TurnosProvider } from "features/Turnos/Context";

const TurnosPage = () => {
  return (
    <TurnosProvider>
      <MainContainer title="Turnos e Horários">
        <Turnos />
      </MainContainer>
    </TurnosProvider>
  );
};

export default TurnosPage;
