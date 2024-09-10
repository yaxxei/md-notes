import styles from "../styles/Main.module.scss";

import { useStore } from "../store/rootStore";
import { ActionBar } from "./ActionBar";
import { Editor } from "./Editor";
import { Preview } from "./Preview";
import { useState } from "react";
import { useActionBarContext } from "../context/ActionBarContext";
import type { INote } from "../models/INote";

export function Main({ note }: { note: INote }) {
  const { setHeaderVisible, setStatusBarVisible } = useActionBarContext();

  const { noteStore } = useStore();

  const [isPreviewVisible, setPreviewVisible] = useState(true);

  return (
    <main className={styles.main}>
      <Editor
        note={note}
        setText={(value: string) => noteStore.write(note.id, value)}
      />
      <ActionBar
        setPreviewVisible={setPreviewVisible}
        setStatusBarVisible={setStatusBarVisible}
        setHeaderVisible={setHeaderVisible}
      />
      {isPreviewVisible && <Preview note={note} />}
    </main>
  );
}
