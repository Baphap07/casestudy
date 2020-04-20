var home = home || {  }

home.showProduct = function(){
    $.ajax({
        url : "http://localhost:3000/products",
        method : "GET",
        dataType : 'json',
        success : function(data){
            $.each(data,function(i,v){
                $('#product').append(
                   '<div class="col-md-4 col-sm-6 portfolio-item">'+
                          '<a class="portfolio-link" onclick="home.productDetail('+ v.id +')">'+
                             '<div class="portfolio-hover">'+
                                  '<div class="portfolio-hover-content">'+
                                       '<i class="fa fa-plus fa-3x"></i>'+
                                  '</div>'+
                             '</div>'+
                             '<img class="img-fluid" src=" ' + v.productImage + ' " alt="">'+
                          '</a>'+
                          '<div class="portfolio-caption card-footer">'+
                              '<h6>' + v.productName + '</h6>'+
                              '<br>'+
                              
                              '<p href="#" class="btn btn-primary">' + v.price + '</p>'+
                          '</div>'+
                    '</div>'
                );
            });
        }
    })
}
home.productDetail = function(id){
    $.ajax({
        url : "http://localhost:3000/products/" +id,
        method : "GET",
        dataType : 'json',
        success : function(data){
            $('#ProductName').text(data.productName);
            $('#Price').text(data.price);
            $('#ProductImage').prop('src',data.productImage);
            $('#Manufactory').text(data.manufactory);
            $('#Size').text(data.size);
            $('#portfolioModal').modal('show');
        }
    })
}
home.innit = function(){
    home.showProduct();
}
$(document).ready(function(){
    home.innit();
});