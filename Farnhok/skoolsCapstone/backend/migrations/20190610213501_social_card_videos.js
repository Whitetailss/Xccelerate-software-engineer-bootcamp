
exports.up = function(knex, Promise) {
    return knex.schema.createTable('social_card_video', function(table){
        table.increments('id');
        table.integer('card_id');
        table.foreign('card_id').references('social_card.id');
        table.string('video');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('social_card_video', function(table){
        table.dropForeign('card_id')
    })
};
