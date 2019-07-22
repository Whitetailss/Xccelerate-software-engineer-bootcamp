/* filler file to ensure the knex migration is intact*/
exports.up = function(knex, Promise) {
    return knex.schema.createTable('empty_users_table',(table)=>{
        table.increments('id').unsigned().primary();
        table.string('email');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('empty_users_table');
};
