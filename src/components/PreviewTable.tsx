import { ReactNode } from "react";

export function PreviewTable({ children }: { children: ReactNode }) {
  return (
    <table
      style={{
        borderCollapse: "collapse",
      }}
    >
      {children}
    </table>
  );
}

export function PreviewTableHead({ children }: { children: ReactNode }) {
  return <thead style={{ fontWeight: 700 }}>{children}</thead>;
}

export function PreviewTableBody({ children }: { children: ReactNode }) {
  return <tbody>{children}</tbody>;
}

export function PreviewTableRow({ children }: { children: ReactNode }) {
  return <tr>{children}</tr>;
}

export function PreviewTableCell({ children }: { children: ReactNode }) {
  return (
    <td
      style={{
        padding: "8px",
        textAlign: "left",
        border: "1px solid rgba(0, 0, 0, .2)",
      }}
    >
      {children}
    </td>
  );
}
