exports.up = function(knex, Promise) {
    return knex.schema.createTable('registry_info',(table)=>{
        table.increments('id');
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
        table.string('ocassionName');
        table.time('created_on');
        table.time('modified_on');
        table.boolean('isSent');
        table.string('password');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('registry_info', (table)=> {
        table.dropForeign('user_id');
        table.dropColumn('user_id');
    });
};