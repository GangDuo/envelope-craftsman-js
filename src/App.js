import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Container, Button, LinearProgress, FormControlLabel, Radio, Grid } from '@material-ui/core';
import { TextField, RadioGroup } from 'formik-material-ui';
import * as Yup from 'yup';

const ERR_POSTALCODE_CHARACTERS_LENGTH = '郵便番号は正確に7文字でなければなりません。'

const PreviewSchema = Yup.object().shape({
  destinationPostalCode: Yup.string()
    .length(7, ERR_POSTALCODE_CHARACTERS_LENGTH),
  sourcePostalCode: Yup.string()
    .length(7, ERR_POSTALCODE_CHARACTERS_LENGTH),
});

function App() {
  const [isPreview, setIsPreview] = React.useState(false);

  if(isPreview) {
    return (
      <>
        <Button
            variant="contained"
            color="primary"
            onClick={e => setIsPreview(false)}
        >
          戻る
        </Button>
        プレビュー
      </>
    )
  }

  return (
    <Formik
      initialValues={{
        destinationPostalCode: '',
        destinationAddress: '',
        recipientName: '',
        sourcePostalCode: '',
        sourceAddress: '',
        yourName: '',
        direction: '縦',
        sizeOfPaper: 'A4'
      }}
      validationSchema={PreviewSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          setIsPreview(true)
          console.log(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, setFieldValue }) => (
        <Container maxWidth="sm">
        <Form>
          <fieldset>
            <legend>TO</legend>
            <Grid item
              container
              direction="column"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Field component={TextField} name="destinationPostalCode" label="〒" InputProps={{ onChange: e => {
                console.log(e);
                setFieldValue(e.target.name, e.target.value)
              }}} />
              <Field component={TextField} name="destinationAddress" label="住所" fullWidth />
              <Field component={TextField} name="recipientName" label="氏名" />
            </Grid>
          </fieldset>

          <fieldset>
            <legend>FROM</legend>
            <Grid container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
            >
              <Field component={TextField} name="sourcePostalCode" label="〒" />
              <Field component={TextField} name="sourceAddress" label="住所" fullWidth />
              <Field component={TextField} name="yourName" label="氏名" />
            </Grid>
          </fieldset>

          <fieldset>
            <legend>向き</legend>
            <Field component={RadioGroup} name="direction">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
              {
                ['縦', '横']
                .map((x, i) => <FormControlLabel key={i}
                                                control={<Radio disabled={isSubmitting} />}
                                                value={x}
                                                label={x}
                                                disabled={isSubmitting}/>)
              }
              </Grid>
            </Field>
          </fieldset>

          <fieldset>
            <legend>用紙サイズ</legend>
            <Field component={RadioGroup} name="sizeOfPaper">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
              {
                ['A4', 'A3']
                .map((x, i) => <FormControlLabel key={i}
                                                control={<Radio disabled={isSubmitting} />}
                                                value={x}
                                                label={x}
                                                disabled={isSubmitting}/>)
              }
              </Grid>
            </Field>
          </fieldset>

          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            プレビュー
          </Button>
        </Form>
        </Container>
      )}
    </Formik>
  );
}

export default App;
