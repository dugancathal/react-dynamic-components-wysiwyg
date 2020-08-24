import React, {useState, useEffect} from 'react';
import * as Wysiwyg from './components';

export const ComponentBuilder = ({onChange}) => {
  const [component, setComponent] = useState({ componentName: 'Text', propDefs: {} });
  const WysiwygComponent = Wysiwyg[component.componentName];

  const onValueChanged = (newVal) => {
    setComponent(newVal);
    onChange(newVal);
  }

  return (
    <>
      <select onChange={e => onValueChanged({...component, componentName: e.target.value})}>
        {Object.keys(Wysiwyg).map(comp => (
          <option key={Wysiwyg[comp].name} value={Wysiwyg[comp].name}>{Wysiwyg[comp].name}</option>
        ))}
      </select>

      <div className="app--prop-form">
      {WysiwygComponent.contentDefinition.props.map(prop => {
        return (
          <input type="text" key={prop.name} onChange={e => onValueChanged({...component, propDefs: {...component.propDefs, [prop.name]: e.target.value}})} placeholder={prop.name} />
        )
      })}
      </div>
    </>
  )
};
