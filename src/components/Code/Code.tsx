import { PropsWithChildren } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type CodeProps = {
  language?: string
}

export const Code = ( {
  children,
  language = "json",
}: PropsWithChildren<CodeProps> ) => {
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      wrapLines={true}
      language={language}
      style={vscDarkPlus}
    >
      {children}
    </SyntaxHighlighter>
  )
}
