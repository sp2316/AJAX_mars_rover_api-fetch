var input= $('#datepicker').datepicker({ dateFormat: 'yy-mm-dd' });

$('#get-btn').click(function(e){
    let date = input.val();
    console.log(date);
    if(date!=''){
    $.ajax({
        url:`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2`,
        method:'get',
        success:function(data){
            if(data.photos.length == 0){
                alert('No photos available for this date');
                return;
            }
            for(let i of data.photos){

            $('#img-container').append(
                $('<img>',{
                    src:i.img_src,
                    width:'200px',
                    height:'200px'
                })
              
            );
            $('#img-container img').css({
                'margin':'10px'

            });
            }

        }
    })
    }else{
        alert('Please fill the field!');
        return;
    }

})
