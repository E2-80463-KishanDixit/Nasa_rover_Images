
function fetchImage(data){
    // if(data.photos)
    let photos = data.photos;
    if(photos.length == 0){
        alert("No photos available for this date");
    }

    for(let photo of photos){
        let imageUrl =  photo.img_src;
        let image = $('<img>',{
            heigt:'300px',
            width:'300px',
            src: imageUrl
        });
        $('#all-images').append(image);
    }
}


function getRoverImages(){
    let date = $( "#datepicker" ).datepicker({ dateFormat: 'yy-mm-dd' });
    if(date.val()== ''){
        alert('Please Enter A Date');
    }

    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method:'GET',
        success:fetchImage,
        data:{
            earth_date:date.val(),
            api_key:'C9xzqxFFPoMVaX7DO4HrnhD5t2NlccKxOA0YcBDx',
        }
    })
    .fail(function(){
        alert("Error");
    });
}

$('#fetch-data-btn').on('click',getRoverImages);






