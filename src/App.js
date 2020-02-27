import * as React from 'react';
import { Button } from '@material-ui/core';
import PaperPatternGenForm from './components/PaperPatternGenForm';

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
        <section className="sheet">
          <article>
            プレビュー
          </article>
        </section>
      </>
    )
  }

  return (
    <PaperPatternGenForm onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        setIsPreview(true)
        console.log(JSON.stringify(values, null, 2));
      }, 500);
    }} />
  )

}

export default App;
