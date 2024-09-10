import styles from "../styles/Header.module.scss";

import folderImg from "../assets/icons8-folder-36.png";

import boldImg from "../assets/bold-button.svg";
import italicImg from "../assets/italic-button.svg";
import headingImg from "../assets/heading-button.svg";
import strikethroughImg from "../assets/strikethrough-button.svg";

import unorderedListImg from "../assets/unordered-list-button.svg";
import orderedListImg from "../assets/ordered-list-button.svg";
import checkListImg from "../assets/check-list-button.svg";

import { useStore } from "../store/rootStore";
import { INote } from "../models/INote";
import { useEditorAreaContext } from "../context/EditorAreaContext";

export function Header({ note }: { note: INote }) {
  const { noteStore } = useStore();

  const { cursorPosition } = useEditorAreaContext();

  function handleBoldClick() {
    noteStore.setBoldWord(note.id, cursorPosition.start, cursorPosition.end);
  }

  function handleItalicClick() {
    noteStore.setItalicWord(note.id, cursorPosition.start, cursorPosition.end);
  }

  function handleHeadingClick() {
    noteStore.setHeadingWord(note.id, cursorPosition.start, cursorPosition.end);
  }

  function handleStrikethroughClick() {
    noteStore.setStrikethroughWord(
      note.id,
      cursorPosition.start,
      cursorPosition.end
    );
  }

  function handleUnorderedListClick() {
    noteStore.setUnorderedList(
      note.id,
      cursorPosition.start,
      cursorPosition.end
    );
  }

  return (
    <header className={styles.header}>
      <button>
        <img src={folderImg} />
      </button>

      <div className={styles.hz}>
        <button onClick={handleBoldClick}>
          <img src={boldImg} alt="setBold" />
        </button>
        <button onClick={handleItalicClick}>
          <img src={italicImg} alt="setItalic" />
        </button>
        <button onClick={handleHeadingClick}>
          <img src={headingImg} alt="setHeading" />
        </button>
        <button onClick={handleStrikethroughClick}>
          <img src={strikethroughImg} alt="setStrikethrough" />
        </button>
      </div>

      <div className={styles.lists}>
        <button onClick={handleUnorderedListClick}>
          <img src={unorderedListImg} alt="setUnorderedList" />
        </button>
        <button>
          <img src={orderedListImg} />
        </button>
        <button>
          <img src={checkListImg} />
        </button>
      </div>
    </header>
  );
}
