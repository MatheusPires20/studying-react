function GlobalStyle() {
    return(
        <style global jsx>{`
                * { background: black
                }
            `}</style>
    );
}
function Title(props) { // Declaro uma "classe" para o titulo. Eu coloco ele em um container.
    console.log(props);
    const Tag = props.tag;
    return (
        // Tudo o que estiver aqui dentro vai receber a tag (<Title>). Dentro de {} ele busca uma variavel com o nome equivalente. 
        <>
            <Tag>{props.children}</Tag> 
            <style jsx>{`
            ${Tag} {
                    color: green;
                    font-size: 24px;
                    font-weight: 600;
            }
            `}</style>
        </>
    );
}
// Componente react
function HomePage() {
    // jsx
    // <Title>Welcome Webchat!</Title>  o que está no meio é chamado de children.
    return (
        <div> 
            <GlobalStyle />
            <Title tag="h2">Welcome Webchat!</Title>  
            <h2>you're not a robot, right?</h2>
        </div>
    )
}
  
export default HomePage
