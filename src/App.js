import * as React from 'react';
import { Button } from '@material-ui/core';
import PaperPatternGenForm from './components/PaperPatternGenForm';
import Envelope from './components/Envelope';
import ResponsiveDrawer from './components/ResponsiveDrawer';

function App() {
  const [isPreview, setIsPreview] = React.useState(false);

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
    <ResponsiveDrawer container={
      <PaperPatternGenForm onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          setIsPreview(true)
          console.log(JSON.stringify(values, null, 2));
        }, 500);
      }} />
    }/>
  )
}

export default App;
