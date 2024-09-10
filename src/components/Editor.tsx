import styles from "../styles/Editor.module.scss";

import { observer } from "mobx-react-lite";
import { INote } from "../models/INote";
import { useRef } from "react";
import { useEditorAreaContext } from "../context/EditorAreaContext";
import { useStore } from "../store/rootStore";

interface EditorProps {
  note: INote;
  setText: (value: string) => void;
}

export const Editor = observer(({ note, setText }: EditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { noteStore } = useStore();

  const { cursorPosition, setCursorPosition } = useEditorAreaContext();

  function handleSelectedText() {
    const start = textareaRef.current?.selectionStart!;
    const end = textareaRef.current?.selectionEnd!;

    setCursorPosition({ start, end });
  }

  function handleEnterKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "Enter") return;
    const textBeforeCursor = note.content.slice(0, cursorPosition.start);
    const lines = textBeforeCursor.split("\n");
    const regex = /^-\s.+/;
    if (regex.test(lines[lines.length - 1])) {
      noteStore.setUnorderedList(
        note.id,
        cursorPosition.start,
        cursorPosition.end
      );
      e.preventDefault();
    } else if (lines[lines.length - 1].startsWith("-")) {
      lines[lines.length - 1] = "";
      const newText =
        lines.join("\n") + note.content.slice(cursorPosition.start);
      noteStore.write(note.id, newText);
      e.preventDefault();
    }
  }

  return (
    <textarea
      ref={textareaRef}
      className={styles.editor}
      value={note.content}
      onChange={(e) => setText(e.target.value)}
      onMouseUp={handleSelectedText}
      onKeyUp={handleSelectedText}
      onKeyDown={(e) => handleEnterKeyDown(e)}
    ></textarea>
  );
});
