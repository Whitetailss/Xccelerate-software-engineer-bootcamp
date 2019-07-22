
exports.up = function(knex, Promise) {
    return knex.schema.createTable('school_users', function(table){
        table.increments('id').unsigned().primary();
        table.string('username', 100);
        table.string('password', 100);
        table.string('profile_pic');
        table.string('school_name', 255);
        table.string('address', 255);
        table.string('location', 255);
        table.string('website', 255);
        table.string('phone', 255);
        table.string('contact_email', 255);
        table.timestamps(true, true)     
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('school_users')
};
