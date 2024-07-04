import React, { useRef, useEffect } from 'react';
import 'summernote/dist/summernote-lite.css';
import $ from 'jquery';
import 'summernote/dist/summernote-lite';

const SummernoteEditor = ({ name, className, value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    $(editorRef.current).summernote({
      height: 300, // set the height of the editor
      callbacks: {
        onChange: function(contents) {
          if (onChange) {
            onChange({ target: { name, value: contents } });
          }
        }
      }
    });

    // Set initial value
    if (value) {
      $(editorRef.current).summernote('code', value);
    }

    return () => {
      $(editorRef.current).summernote('destroy');
    };
  }, []);

  useEffect(() => {
    if (value !== $(editorRef.current).summernote('code')) {
      $(editorRef.current).summernote('code', value);
    }
  }, [value]);

  return (
    <div>
      <div ref={editorRef} className={className}></div>
    </div>
  );
};

export default SummernoteEditor;
