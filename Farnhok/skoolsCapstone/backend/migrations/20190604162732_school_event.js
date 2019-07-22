
exports.up = function(knex, Promise) {
    return knex.schema.createTable('school_event', function(table){
        table.increments('id');
        table.integer('school_id');
        table.foreign('school_id').references('school_users.id');
        table.string('poster');
        table.string('event_name');
        table.string('event_venue');
        table.text('event_description');
        table.boolean('is_free');
        table.date('event_date');
        table.time('start_time');
        table.time('end_time');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('school_event', function(table){
        table.dropForeign('school_id');
    })
};