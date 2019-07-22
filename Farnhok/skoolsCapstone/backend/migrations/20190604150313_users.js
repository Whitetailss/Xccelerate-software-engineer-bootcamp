
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',(table)=>{
        table.increments('id').unsigned().primary();
        table.string('email');
        table.string('first_name');
        table.string('last_name');
        table.string('password');
        table.string('profile_pic');
        table.string('facebook_id');
        table.string('access_token');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
