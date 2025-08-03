const app = require('./app');
// const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`The app is running on port ${PORT}`);
  console.log({ Variavel_de_ambiente: process.env.USER });
  // Esse trecho de código ficará responsável para saber se aplicação foi conectada 
  // ao banco de dados MySQL, Uma vez testado não precisa ser executado mais. 
   
  // const [result] = await connection.execute('SELECT 1')
  
  // if (result) console.log('MySQL connection OK')
});
