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

function asHankaku(str) {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

const fetchAddressByPostalcode = async (postalcode) => {
  if(postalcode.length !== 7) {
    return
  }
  const response = await fetch(`https://api.zipaddress.net/?zipcode=${postalcode}`, {
      mode: 'cors'
  })
  const json = await response.json();

  if(!json.data || !json.data.fullAddress) return
  return json.data.fullAddress
}

function PaperPatternGenForm({ onSubmit }) {
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
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting, setFieldValue }) => {
        const handleChange = e => {
          const postalcode = asHankaku(e.target.value)
          const targetName = e.target.name

          setFieldValue(targetName, postalcode)
          fetchAddressByPostalcode(postalcode)
          .then((fullAddress) => {
            const fieldNameBy = {
              destinationPostalCode: 'destinationAddress',
              sourcePostalCode: 'sourceAddress'
            }
            if(!fullAddress) return;
            setFieldValue(fieldNameBy[targetName], fullAddress);
          });
        }

        return (
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
              <Field component={TextField} name="destinationPostalCode" label="〒" InputProps={{ onChange: handleChange}} />
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
              <Field component={TextField} name="sourcePostalCode" label="〒"  InputProps={{ onChange: handleChange}} />
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
      )}}
    </Formik>
  );
}

export default PaperPatternGenForm;