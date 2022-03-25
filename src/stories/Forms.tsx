import { Card, CardContent, Typography } from '@mui/material';
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import React from "react";
import {
  AutoComplete,
  AvatarDropZone,
  Checkbox,
  Form,
  FormHandles,
  PasswordField,
  SearchField,
  SelectField,
  Switch,
  TextArea,
  TextField
} from "../components/Form";
import { countries } from "./mocks";
import Container from "./StorieContainer";

const STATUS_POSSIVEIS = [
  { text: "Gestor", key: 1 },
  { text: "Editor", key: 2 },
];

interface FormProps {
  image: any,
  simpleText: any,
  email: any,
  serch: any,
  passwordExemple: any,
  autocomplete: any,
  switch: any,
  checkbox: any,
  select: any,
  textArea: any,
}
const Forms = () => {
  const [formValues, setformValues] = React.useState<FormProps>({
    image: [],
    simpleText: "",
    email: "",
    serch: "",
    passwordExemple: "",
    autocomplete: "",
    switch: "on",
    checkbox: false,
    select: "",
    textArea: "",
  });

  const [imageSelected, setImageSelected] = React.useState(null);
  const [imageState, setImageState] = React.useState("");

  const formRef = React.useRef<FormHandles>(null);

  const onHandleChange = () => {
    const data = formRef.current.getData();
    setformValues(data);
  };

  //Funções referentes ao auto-complete
  const onHandleChangeAutocomplete = (event, value) => {
    const currentData = formRef.current.getData();
    const newData = { ...currentData, ...{ autoComplete: currentData } };
    setformValues(newData);
  };

  // Funções referente a imagem
  const onHandleSelectImage = () => {
    const data = formRef.current.getData();
    setformValues(data);
    setImageSelected(data?.image[0]);
  };

  React.useEffect(() => {
    if (imageSelected) setImageState(URL.createObjectURL(imageSelected));
  }, [imageSelected]);

  return (
    <Container title="Formulários">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
          <Form ref={formRef} onSubmit={() => {}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <AvatarDropZone
                    name="image"
                    subTitle="Drop image"
                    size={120}
                    imagem={imageState}
                    onChange={onHandleSelectImage}
                  />
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="texto-simples"
                  label="Texto simples"
                  name="simpleText"
                  onChange={onHandleChange}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={onHandleChange}
                />
                <TextField
                  id="phone-number"
                  label="Telefone celular"
                  mask="(99) 9 9999 9999"
                  type="tel"
                  name="telefone"
                  onChange={onHandleChange}
                />
                <SearchField
                  label="Pesquisar"
                  name="serch"
                  onChange={onHandleChange}
                />
                <PasswordField
                  label="Senha"
                  name="passwordExemple"
                  onChange={onHandleChange}
                />
              </Grid>
              <Grid item sm={6}>
                <AutoComplete
                  name="autocomplete"
                  variant="outlined"
                  onChange={onHandleChangeAutocomplete}
                  options={countries}
                  label="AutoComplete"
                  placeholder="Escreva algo"
                />
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  style={{ width: "100%" }}
                >
                  <Switch name="switch" label="Switch" />
                  <Checkbox
                    name="checkbox"
                    label="Checkbox"
                    size="small"
                    onChange={onHandleChange}
                  />
                </Stack>
                <SelectField
                  label="Select"
                  name="select"
                  itemValue="key"
                  itemText="text"
                  options={STATUS_POSSIVEIS}
                  onChange={onHandleChange}
                />
                <TextArea
                  label="Text Area"
                  name="textArea"
                  onChange={onHandleChange}
                />
              </Grid>
            </Grid>
          </Form>
          </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>
        <Typography gutterBottom variant="h5" component="div">
                    Resultado
                    </Typography>
          {Object.keys(formValues).map((key, index) => {
            return (
              <div key={index}>
              {key}: {JSON.stringify(formValues[key])}

              </div>
            )
          })}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Forms;
