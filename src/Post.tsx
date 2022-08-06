// Componentização, visa desacoplar um pedaço da interface que pode
// ser repetida várias vezes, inclusive com informações diferentes, 
// isso tbm torna mais fácil de dar manutenção no código.

//componente, nada mais é do que uma funcção que retorna um HTML
//A componentização permite a reutilização de trechos do código, reaproveitando toda a estilização e estrutura criada



//Named exports <Não usa o export default, fazendo com que o código não seja executado se o nome estiver escrito errado>

export function Post(props: {author: string, content: string}) {
    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </>

    )
}