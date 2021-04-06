import React from 'react';

import { tx, t } from '@transifex/native';
import { T, LanguagePicker } from '@transifex/react';

tx.init({
  token: '1/e2794a64f34c0ff55c768c06ace3cffb4435af2d',
  secret: '',
  sourceLocale: 'en',
});

function App() {
  console.log(T.live, 't');
  let some = 'baku';

  let forTranslation = 'something';
  return (
    <div className="main">
      <p className="translate">{forTranslation}</p>
      <p>
        <T _str="Hello" /> <br />
        <T _str="cao" /> <br />
        <T _str="zdravo" /> <br />
        <T _str="hello world" /> <br />
        <T _str="Hello!" /> <br />
        <T _str="woman" /> <br />
        <T _str="man" /> <br />
        <T _str="small" /> <br />
        <T _str="more" /> <br />
        <T _str="things" /> <br />
        <T _str="bear" /> <br />
        <T _str="Hello {username}" username={some} /> <br />
        <T _str="asdads" /> <br />
        <button onClick={() => tx.setCurrentLocale('en')}>English</button>+{' '}
        <button onClick={() => tx.setCurrentLocale('es_MX')}>Spanish</button>
        <LanguagePicker />
      </p>
    </div>
  );
}

export default App;
