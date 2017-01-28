$( function () {
    console.log('form');
    console.log(  process.env.__API_NAME );
    
    $( ".select2" ).select2();
    Flatpickr.localize(Flatpickr.l10ns.zh);
    $( ".flatpickr" ).flatpickr( {
        "mode": "range"
    });    
});