const user = { // criei uma variavel constante chamada user
    name: 'Arara',
    imagemUrl: 'data:image/jpeg;base64,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',
    imagemSize: 90,
};


function Home(){
    return(
        <>
            <h1>{user.name}</h1>

            <img
            ClassName="local p/ foto"
            src={user.imagemUrl}
            alt={'Foto do ' + user.name}

            style={{
                width: user.imagemSize,
                height: user.imagemSize

            }}

            />
        </>
    );
}


export default Home; //Exportando como padrão a janela Home.