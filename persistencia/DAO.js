function DAO(connection) {
    this._connection = connection;
}

module.exports = function(){
    return DAO;
};

DAO.prototype.cadastra_usuario = function(usuario, callback){
    this._connection.query('INSERT INTO users SET ?', usuario, callback);
};
DAO.prototype.atualiza_usuario = function(usuario, callback){
    this._connection.query('UPDATE users SET nome = ?, sobrenome = ?, email = ?, senha = ?, celular = ? where id = ?',
        [usuario.nome, usuario.sobrenome, usuario.email, usuario.senha, usuario.celular, usuario.id], callback);
};
DAO.prototype.remove_usuario = function(usuario, callback){
    this._connection.query('UPDATE users SET status = ? where id = ?',[usuario.status, usuario.id], callback);
};
DAO.prototype.busca_usuario = function(id, callback){
    this._connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

DAO.prototype.lista_produtos_usuario = function(user_id, callback){
    this._connection.query('SELECT * FROM produtos WHERE user_id = ?', [user_id], callback);
};

DAO.prototype.busca_produto_usuario = function(user_id, id, callback){
    this._connection.query('SELECT * FROM produtos WHERE user_id = ? and id = ?', [user_id, id], callback);
};

DAO.prototype.cadastra_produto = function (produto, callback) {
    this._connection.query('INSERT INTO produtos SET ?', produto, callback)
};