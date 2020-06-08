// importar a dependencia do sqlite

const sqlite3 = require('sqlite3').verbose();

// criar o objeto que ira fazer operacoes no  banco de dados
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

// utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {
//     // criar uma tabela com comandos sql
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//         );
//     `)

//     // inserir dados na tabela
//     const query = `
//         INSERT INTO places(
//             image, 
//             name, 
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values =  [
//         'https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//         'PaperSide',
//         'Guilherme Gemballa, Jardim América',
//         'Número 260',
//         'Santa Catarina',
//         'Rio Do Sul',
//         'Resíduos Eletrônico, Lampadas'        
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//          db.run(query, values,afterInsertData);
    // consultar dados da tabela
        // db.all(`SELECT id, name FROM places`, function(err, rows){
        //     if(err) {
        //         return console.log(err)
        //     }

        //     console.log('Aqui estão os seus registros: ')
        //     console.log(rows)
        // } )

    // deletar um dado da tabela 
    // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
//})