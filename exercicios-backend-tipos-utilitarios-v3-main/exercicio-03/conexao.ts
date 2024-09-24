type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Connetion = Record<'driver' | 'url', string>

const conexao = (dados: Conn) : Readonly<Connetion> => {
    const { username, password, host, port, dbname } = dados; // desestruturação
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}

console.log(conexao ({
    username: 'postgres',
    password: '123456',
    host: 'localhost',
    port: '8000',
    dbname: 'postgres'
}))