
exports.up = function(knex, Promise) {
    return knex.schema.createTable('social_card_photo', function(table){
        table.increments('id');
        table.integer('card_id');
        table.foreign('card_id').references('social_card.id');
        table.string('photo');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('social_card_photo', function(table){
        table.dropForeign('card_id')
    })
};
