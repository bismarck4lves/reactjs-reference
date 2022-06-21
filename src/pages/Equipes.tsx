import MainContainer from "containers/MainContainer";
import { Equipes } from "features/Equipes";
import { EquipesProvider } from "features/Equipes/Context";
export default function EquipesPage() {
  return (
    <EquipesProvider>
      <MainContainer title="Escalas">
        <Equipes />
      </MainContainer>
    </EquipesProvider>
  );
}
