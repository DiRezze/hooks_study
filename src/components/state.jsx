import React from "react";
import CodeBlock from "./codeBlock";
import './styles/sections.css';

const StateSection = () => {
    return(
        <section id="state">
            <h2>useState</h2>
            <div className="article-half">
                <article>
                    <p>O useState é um hook do React que permite criar, atribuir e manipular variáveis estados de forma dinâmica, simples e direta em componentes funcionais. Essa variáveis são responsáveis por determinar o comportamento de um componente através das renderizações da aplicação.</p>
                    <p>Quando chamado o hook</p>
                </article>
                <CodeBlock>
                    {`
                        import React, { useState } from 'react';

                        const Componente = () => {
                            const [estado, setEstado] = useState(null);    
                        }
                    `}
                </CodeBlock>
            </div>
        </section>
    );
}

export default StateSection;
