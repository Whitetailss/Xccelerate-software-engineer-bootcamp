
exports.up = function(knex, Promise) {
    return knex.schema.createTable('social_card', function(table){
        table.increments('id');
        table.integer('school_id');
        table.foreign('school_id').references('school_users.id');
        table.string('card_content');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('social_card', function(table){
        table.dropForeign('school_id');
    })
};