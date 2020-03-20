import * as React from 'react';
import { Button } from '@material-ui/core';
import PaperPatternGenForm from './components/PaperPatternGenForm';
import Envelope from './components/Envelope';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import LicenseModal from './components/LicenseModal';
import ContactInfo from './components/ContactInfo'

function App() {
  const [isPreview, setIsPreview] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [context, setContext] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [{text: 'ライセンス', handleClick: handleOpen}]

  const asContactInfo = (context) => {
    const POSTAL_CODE_DIGIT_PATTERN = /(\d{3})(\d{4})/
    const {
      destinationPostalCode,
      destinationAddress,
      recipientName,
      sourcePostalCode,
      sourceAddress,
      yourName
    } = context

    return {
      recipient: new ContactInfo(
        destinationPostalCode.replace(POSTAL_CODE_DIGIT_PATTERN,'$1-$2'),
        destinationAddress, '', '',
        recipientName.length > 0 ? `${recipientName} 様` : ''),
      sender: new ContactInfo(
        sourcePostalCode.replace(POSTAL_CODE_DIGIT_PATTERN,'$1-$2'),
        sourceAddress, '', '',
        yourName)
    }
  }

  if(isPreview) {
    return (
      <>
        <header>
          <Button
              variant="contained"
              color="primary"
              onClick={e => setIsPreview(false)}
          >
            戻る
          </Button>
        </header>
        <Envelope {...asContactInfo(context)} />
      </>
    )
  }

  return (
    <>
      <ResponsiveDrawer title={document.title} categories={categories} container={
        <PaperPatternGenForm onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setContext(values)
            setSubmitting(false);
            setIsPreview(true)
            console.log(JSON.stringify(values, null, 2));
          }, 500);
        }} />
      }/>
      <LicenseModal open={open} onClose={handleClose} />
    </>
  )
}

export default App;
