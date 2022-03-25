usage


import { Form, FormHandles, SubmitHandler, TextField } from "components/Form";

const formRef = React.useRef<FormHandles>(null);


<Form ref={formRef} onSubmit={()=>{}}>
    <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        name="email"
    />
</Form>


em caso de acao ao submit:

const onHandleSubmit: SubmitHandler<FormDataProps> = async (data) => {
 try {
        // Yup validation
    } catch (err) {
        // abrir um toast, tvlz
    } finally {
      // finalizar um loading tvlz
    }

}