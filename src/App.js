import * as React from 'react';
import { Button } from '@material-ui/core';
import PaperPatternGenForm from './components/PaperPatternGenForm';
import Envelope from './components/Envelope';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import LicenseModal from './components/LicenseModal';

function App() {
  const [isPreview, setIsPreview] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [{text: 'ライセンス', handleClick: handleOpen}]

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
        <Envelope />
      </>
    )
  }

  return (
    <>
      <ResponsiveDrawer title={document.title} categories={categories} container={
        <PaperPatternGenForm onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
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
