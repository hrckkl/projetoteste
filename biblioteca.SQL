CREATE TABLE usuario (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT NOT NULL,
  password TEXT NOT NULL
 );
 
CREATE TABLE livros (
  id_livro INTEGER PRIMARY KEY  AUTOINCREMENT,
  titulo TEXT,
  autor TEXT, 
  paginas INTEGER NOT NULL
 );
 
CREATE TABLE registro (
 registro_id INTEGER PRIMARY KEY AUTOINCREMENT,
 retirada_id_livro INTEGER,
 devolucao_id_livro INTEGER,
 data_reg DATETIME,
 FOREIGN KEY (retirada_id_livro) REFERENCES livros(id_livro),
 FOREIGN KEY (devolucao_id_livro) REFERENCES livros(id_livro)
 );
 
INSERT INTO usuario (user, password) VALUES ('Nicolli', '123');
INSERT INTO usuario (user, password) VALUES ('Jao', '456');
                                             
SELECT * FROM usuario
