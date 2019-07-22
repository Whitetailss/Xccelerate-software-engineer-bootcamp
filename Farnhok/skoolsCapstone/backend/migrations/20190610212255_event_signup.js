
exports.up = function(knex, Promise) {
    return knex.schema.createTable('event_signup', function(table){
        table.increments('id');
        table.integer('event_id')
        table.foreign('event_id').references('school_event.id');
        table.integer('user_id')
        table.foreign('user_id').references('users.id');
        table.boolean('is_interested');
        table.boolean('is_attending');
        table.string('user_email');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('event_signup', function(table){
        table.dropForeign('event_id');
        table.dropForeign('user_id');
    })
};
