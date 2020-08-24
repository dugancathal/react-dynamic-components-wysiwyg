import React, {useState} from 'react';
import * as Wysiwyg from './components';

export const ComponentRenderer = ({definition}) => {
  const WysiwygComponent = Wysiwyg[definition.componentName || 'NullElement'];
  return (
    <section>
      <WysiwygComponent {...definition.propDefs}/>
    </section>
  )
}
