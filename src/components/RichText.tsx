import { Fragment } from "react";

const inlineTokenPattern = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*\s][^*\n]*?\*)/g;

export function RichText({ text }: { text: string }) {
  const parts = text.split(inlineTokenPattern);

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
          return (
            <code key={`rt-${index}`} className="article-inline-code">
              {part.slice(1, -1)}
            </code>
          );
        }

        if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
          return (
            <strong key={`rt-${index}`}>
              <RichText text={part.slice(2, -2)} />
            </strong>
          );
        }

        if (part.startsWith("*") && part.endsWith("*") && part.length >= 3) {
          return (
            <em key={`rt-${index}`}>
              <RichText text={part.slice(1, -1)} />
            </em>
          );
        }

        return <Fragment key={`rt-${index}`}>{part}</Fragment>;
      })}
    </>
  );
}

export function stripInlineMarkdown(text: string): string {
  let prev = text;
  for (let pass = 0; pass < 3; pass += 1) {
    const next = prev.replace(inlineTokenPattern, (match) => {
      if (match.startsWith("`") && match.endsWith("`")) {
        return match.slice(1, -1);
      }
      if (match.startsWith("**") && match.endsWith("**")) {
        return match.slice(2, -2);
      }
      if (match.startsWith("*") && match.endsWith("*")) {
        return match.slice(1, -1);
      }
      return match;
    });
    if (next === prev) break;
    prev = next;
  }
  return prev;
}
