
exports.up = function(knex, Promise) {
    return knex.schema.createTable('gift',(table)=>{
        table.increments('id');
        table.integer('registry_info_id').unsigned();
        table.foreign('registry_info_id').references('registry_info.id');
        table.boolean('isBought');
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('products.id');
        table.string('buyerName');
        table.string('buyerEmail');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('gift', (table)=> {
        table.dropForeign('registry_info_id');
        table.dropColumn('registry_info_id');
        table.dropForeign('product_id');
        table.dropColumn('product_id');
    });
};