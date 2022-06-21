import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "components/Button";
import { Form, FormHandles, SearchField } from "components/Form";
import React from "react";
import { useTurnosContext } from "./Context";

interface MainHeaderProps {
  onSearch: (event) => any;
}

export default function MainHeader(props: MainHeaderProps) {

  const [, {setDialogNovo, setActionCreate}] = useTurnosContext()
  const formRef = React.useRef<FormHandles>(null);

  const onHandleSearch = () => {
    const data = formRef.current.getData();
    props.onSearch(data?.search);
  };

  const onHadelNovoDialog = () => {
    setDialogNovo((prev) => !prev);
    setActionCreate(true)
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Form ref={formRef} onSubmit={() => {}}>
          <SearchField name="search" onChange={onHandleSearch} />
        </Form>
      </Typography>
      <Button onClick={onHadelNovoDialog}>+ Novo Turno</Button>
    </Stack>
  );
}
