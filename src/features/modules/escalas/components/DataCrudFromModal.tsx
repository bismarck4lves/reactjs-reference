import Dialog from "components/Dialog";
import { DataCRUDProps } from "./dataCrud_d";

const DataCrudFromModal: React.FC<DataCRUDProps> = ({
  formNode,
  formModalOpened,
  formCreateCase,
  formModalCancel,
  formModalSave,
}) => {
  return (
    <Dialog open={formModalOpened}>
      <Dialog.Title>
        {formCreateCase ? "Adiconar novo" : "Editar registro"}
      </Dialog.Title>
      <Dialog.Content>{formNode}</Dialog.Content>
      <Dialog.BooleanAction
        onReject={formModalCancel}
        onResolve={formModalSave}
        resolveMsg="Salvar"
        rejectMsg="Cancelar"
      />
    </Dialog>
  );
};

export default DataCrudFromModal;
