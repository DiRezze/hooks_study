import React from "react";
import { Prism as CodeHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './styles/codeBlock.css';

const CodeBlock = ({children, fileName}) => {
    return(
        <div className="code-block">
            <CodeHighlighter language="javascript" style={atomDark} wrapLines={true}>
                {children}
            </CodeHighlighter>
        </div>
    );
}

export default CodeBlock;