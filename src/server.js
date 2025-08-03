const app = require('./app');
// const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`The app is running on port ${PORT}`);
  console.log({ VariavelPASS: process.env.MYSQL_PASSWORD });
  console.log({ VariavelUSER: process.env.MYSQL_USER });
  console.log({ VariavelPORT: process.env.MYSQL_PORT });
  console.log({ VariavelDATA: process.env.MYSQL_DATABASE_NAME });
  console.log({ VariavelHOST: process.env.MYSQL_HOST });

  // Esse trecho de código ficará responsável para saber se aplicação foi conectada 
  // ao banco de dados MySQL, Uma vez testado não precisa ser executado mais. 
   
  // const [result] = await connection.execute('SELECT 1')
  
  // if (result) console.log('MySQL connection OK')
});
