
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products',(table)=>{
        table.increments('id');
        table.integer('vendor_id').unsigned()
        table.foreign('vendor_id').references('vendors.id');
        table.string('productCat');
        table.string('description')
        table.float('price');
        table.string('details')
        table.string('ocassionTag');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products', (table)=> {
        table.dropForeign('vendor_id')
        table.dropColumn('vendor_id')
    });
};