import React, { useEffect, useState } from "react";
import "draft-js/dist/Draft.css";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  RawDraftContentState,
  contentState,
} from "draft-js";

const TextEditor = () => {
  const [state, setState] = useState(() => {
    return EditorState.createEmpty();
  });

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return "handled";
    }

    return "not-handled";
  };

  const onBoldClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "BOLD"));
  };

  const onItalicClick = () => {
    setState(RichUtils.toggleInlineStyle(state, "ITALIC"));
  };

  const styleMap = {
    STRIKETHROUGH: {
      textDecoration: "line-through",
    },
  };

  const onTextChange = (editorState) => {
    setState(editorState);
    console.log({ convertedContent: convertToRaw(state.getCurrentContent()) });
  };

  return (
    <div>
      <button onClick={onBoldClick}>Bold</button>
      <button onClick={onItalicClick}>Italic</button>
      <Editor
        customStyleMap={styleMap}
        editorState={state}
        handleKeyCommand={handleKeyCommand}
        onChange={onTextChange}
      />
    </div>
  );
};

export default TextEditor;
