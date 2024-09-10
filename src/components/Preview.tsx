import styles from "../styles/Preview.module.scss";

import type { INote } from "../models/INote";
import ReactMarkdown from "react-markdown";
import { observer } from "mobx-react-lite";
import { PreviewHeading } from "./PreviewHeading";
import remarkGfm from "remark-gfm";
import {
  PreviewTable,
  PreviewTableHead,
  PreviewTableBody,
  PreviewTableRow,
  PreviewTableCell,
} from "./PreviewTable";

interface PreviewProps {
  note: INote;
}

export const Preview = observer(({ note }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <PreviewHeading level={1} children={props.children} />
          ),
          h2: ({ node, ...props }) => (
            <PreviewHeading level={2} children={props.children} />
          ),
          h3: ({ node, ...props }) => (
            <PreviewHeading level={3} children={props.children} />
          ),
          h4: ({ node, ...props }) => (
            <PreviewHeading level={4} children={props.children} />
          ),
          h5: ({ node, ...props }) => (
            <PreviewHeading level={5} children={props.children} />
          ),
          h6: ({ node, ...props }) => (
            <PreviewHeading level={6} children={props.children} />
          ),
          table: ({ node, ...props }) => (
            <PreviewTable children={props.children} />
          ),
          thead: ({ node, ...props }) => (
            <PreviewTableHead children={props.children} />
          ),
          tbody: ({ node, ...props }) => (
            <PreviewTableBody children={props.children} />
          ),
          tr: ({ node, ...props }) => (
            <PreviewTableRow children={props.children} />
          ),
          td: ({ node, ...props }) => (
            <PreviewTableCell children={props.children} />
          ),
          th: ({ node, ...props }) => (
            <PreviewTableCell children={props.children} />
          ),
        }}
      >
        {note.content}
      </ReactMarkdown>
    </div>
  );
});
