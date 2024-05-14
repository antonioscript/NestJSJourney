import { createServer } from 'node.http'

const server = createServer(() => {
    console.log('Hello Word Node!');
})

server.listen(3333);

//00. Para iniciar no terminal: npm -init -y


