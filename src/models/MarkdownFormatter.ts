export class MarkdownFormatter {
  static addBold(text: string, start: number, end: number): string {
    if (start === end)
      return text.slice(0, start) + "**strong text**" + text.slice(start);

    return (
      text.slice(0, start) +
      "**" +
      text.slice(start, end) +
      "**" +
      text.slice(end)
    );
  }

  static addItalic(text: string, start: number, end: number): string {
    if (start === end)
      return text.slice(0, start) + "*italic text*" + text.slice(start);

    return (
      text.slice(0, start) +
      "*" +
      text.slice(start, end) +
      "*" +
      text.slice(end)
    );
  }

  static addStrikethrough(text: string, start: number, end: number): string {
    if (start === end)
      return (
        text.slice(0, start) + "~~strikethrough text~~" + text.slice(start)
      );

    return (
      text.slice(0, start) +
      "~~" +
      text.slice(start, end) +
      "~~" +
      text.slice(end)
    );
  }

  static addHeading(text: string, start: number, end: number): string {
    const textBeforeCursor = text.slice(0, start);
    if (start === end)
      return (
        textBeforeCursor +
        (text[start]
          ? "\n# "
          : (textBeforeCursor.split("\n")[
              textBeforeCursor.split("\n").length - 1
            ] === ""
              ? ""
              : "\n") + "# Heading") +
        text.slice(start)
      );

    return (
      textBeforeCursor +
      "\n# " +
      text.slice(start, end) +
      "\n" +
      text.slice(end)
    );
  }

  static addUnorderedList(text: string, start: number, end: number): string {
    const textBeforeCursor = text.slice(0, start);
    if (start === end) {
      const lines = textBeforeCursor.split("\n");
      return (
        text.slice(0, start) +
        (text[start]
          ? "\n- "
          : (lines[lines.length - 1] === "" ? "" : "\n") +
            "- " +
            (lines[lines.length - 1].startsWith("-") ? "" : "List item")) +
        text.slice(start)
      );
    }

    return (
      textBeforeCursor + "- " + text.slice(start, end) + "\n" + text.slice(end)
    );
  }
}
