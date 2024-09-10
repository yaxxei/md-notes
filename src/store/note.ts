import { makeAutoObservable } from "mobx";
import type { INote } from "../models/INote";
import { MarkdownFormatter } from "../models/MarkdownFormatter";

class Note {
  notes: INote[] = [
    {
      id: "note-1",
      name: "first",
      content: `# Тут какой-то текст
## И тут тоже некий текст
и новая строка c **полужирным** словом
- hello
- world`,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  getNoteById(noteId: string): INote | undefined {
    return this.notes.find((d) => d.id === noteId);
  }

  write(noteId: string, text: string) {
    const note = this.notes.find((d) => d.id === noteId);
    if (!note) return;
    note.content = text;
  }

  setBoldWord(
    noteId: string,
    selectedWordStart: number,
    selectedWordEnd: number
  ) {
    const note = this.getNoteById(noteId);
    if (!note) return;

    note.content = MarkdownFormatter.addBold(
      note.content,
      selectedWordStart,
      selectedWordEnd
    );
  }

  setItalicWord(
    noteId: string,
    selectedWordStart: number,
    selectedWordEnd: number
  ) {
    const note = this.getNoteById(noteId);
    if (!note) return;

    note.content = MarkdownFormatter.addItalic(
      note.content,
      selectedWordStart,
      selectedWordEnd
    );
  }

  setStrikethroughWord(
    noteId: string,
    selectedWordStart: number,
    selectedWordEnd: number
  ) {
    const note = this.getNoteById(noteId);
    if (!note) return;

    note.content = MarkdownFormatter.addStrikethrough(
      note.content,
      selectedWordStart,
      selectedWordEnd
    );
  }

  setHeadingWord(
    noteId: string,
    selectedWordStart: number,
    selectedWordEnd: number
  ) {
    const note = this.getNoteById(noteId);
    if (!note) return;

    note.content = MarkdownFormatter.addHeading(
      note.content,
      selectedWordStart,
      selectedWordEnd
    );
  }

  setUnorderedList(
    noteId: string,
    selectedWordStart: number,
    selectedWordEnd: number
  ) {
    const note = this.getNoteById(noteId);
    if (!note) return;

    note.content = MarkdownFormatter.addUnorderedList(
      note.content,
      selectedWordStart,
      selectedWordEnd
    );
  }
}

export default new Note();
