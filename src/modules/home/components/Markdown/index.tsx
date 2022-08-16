import React, { useState } from 'react';

interface MarkdownEditorProps {
  onChangeInput: Function
}

// eslint-disable-next-line require-jsdoc
export const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChangeInput }) => {
    // eslint-disable-next-line no-unused-vars
    const [input, setInput] = useState('Hello, **world**!');

    /**
     * Handle input fields
     * 
     * @param {Object} e - textarea input
     */
    const handleChange = (e: {[key: string]: any}) => onChangeInput(e.target.value);

    return (
        <div className="c-markdown-editor">
            <h3>Input</h3>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="markdown-content">
                Enter some markdown
            </label>
            <textarea
                id="markdown-content"
                onChange={ handleChange }
                defaultValue={ input }
            />
        </div>
    );
};
