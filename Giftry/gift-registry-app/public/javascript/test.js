

var productListTemplate = Handlebars.compile(
    `{{#each row}}

        <div class="product-item" data-id="{{id}}">
                <div class="product-btn">
                        <img src="{{photo}}"/>
                </div>

                <div>
                        <h4>{{description}}</h4>
                </div>
                <div>
                        Price:$ {{price}}
                </div>
        
                <label class="select-text">
                    <input type="checkbox" name="select" value="select">
                    <span class="checkmark" data-id="{{id}}" data-name="{{description}}"><p>Select</p></span>
                </label>
        </div>
{{/each}}`
)

const displayProducts = (product) => {
    $('#product-list').html(productListTemplate({ row: product }));
}


$(document).ready(function () {
    

    $('.cat-item').on('click', function () {
        let product_cat = $(this).data('value');      
        axios.get('/console/shop/' + product_cat)
            .then((res) => {
                console.log(res.data)
                displayProducts(res.data)
            })
        })
 
        //Olivia version for assignGifttoRegistry
    $(document).on('click', '.product-item', function(){
        let registry_id = $('#registry-setting').data('id');
        let product_id = $(this).data('id');

       console.log(registry_id, product_id)
   
       axios.post('/console/shop/assignGift/' + product_id, 
       {
           registry_id: registry_id,
           product_id: product_id
       }
       )
       .then((res)=>{
           
            res.status(200)
       })

    })
   

  //get selected product id & description
  $(document).on('click', '.checkmark', function () {
    let productId = $(this).data('id');
    let productName = $(this).data('name');
    console.log(`Product: ${productName} ID: ${productId}`);

    
})


    //view and delete entre gift registry
    $(document).on('click', '.delete-registry-btn', function(){
        let registry_id = $(this).data('id');
      
        axios.delete('/console/'+ registry_id)
        .then(()=>{
            
            location.reload(true);
        })
    })


    $(document).on('click', '.view-registry-btn', function(){
        let registry_id = $(this).data('id');

        console.log(registry_id)

        axios.get('/console/registry/status/' + registry_id)
        .then(()=>{console.log('view this registry')

    })
})      
    

})




   

  


