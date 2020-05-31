var urls = [
    ['./assets/tim-trad-h_OlVMnlgVo-unsplash.jpg'],
    ['./assets/park-street-LkqunarD8Fk-unsplash.jpg'],
    ['./assets/laura-chouette-Y71FDi_jma8-unsplash.jpg', ],
    ['./assets/caroline-hernandez--vJbFUmoAvQ-unsplash.jpg']
];
var currentUrls = urls.length;
var count = 0;
$('.hold').click(function(e) {
    count++;
    $('#transicao').animate({
        height: '100vh'
    }, 300, () => {
        $('#container').css({ 'background-image': `url("${urls[count]}")` })
        $('#transicao').animate({ height: '0vh' }, 600)

    })
    if (count > currentUrls - 1) {
        count = 0;
    }
    console.log(count)
});