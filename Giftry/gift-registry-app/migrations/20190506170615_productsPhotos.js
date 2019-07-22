
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product_photos',(table)=>{
        table.increments('photoID');
        table.integer('product_id').unsigned();
        table.foreign('product_id').references('products.id');
        table.string('photoImage');
        table.boolean('isCover')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product_photos', (table)=> {
        table.dropForeign('product_id')
        table.dropColumn('product_id')
    });
};