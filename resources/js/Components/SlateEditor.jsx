import React, { useMemo, useState, useEffect } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';

const SlateEditor = ({ initialValue, onChange }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  // Set nilai default jika initialValue undefined
  const [value, setValue] = useState(initialValue || [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]);

  useEffect(() => {
    setValue(initialValue || [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ]);
  }, [initialValue]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(newValue);
      }}
    >
      <Editable />
    </Slate>
  );
};

export default SlateEditor;
