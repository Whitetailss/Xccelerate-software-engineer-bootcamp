
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',(table)=>{
        table.increments('id')
        table.string('username');
        table.string('fName');
        table.string('lName');
        table.string('password');
        table.string('facebookID');
        table.string('googleID');
        table.string('accessToken');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
