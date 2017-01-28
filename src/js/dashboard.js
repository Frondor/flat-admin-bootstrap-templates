$( function () {
    console.log('dashboard');
    /*$( ".select2" ).select2();
    Flatpickr.localize(Flatpickr.l10ns.zh);
    $( ".flatpickr" ).flatpickr( {
        "mode": "range"
    });*/
    new Chartist.Line('.ct-chart-line', {
        labels: [2015, 2016, 2017, 2018, 2019],
        series: [
            [7684,8356,9108,7508,6988],
            [2961,4500,6302,2433,3594],
            [2961,4500,6302,0,3594],
        ]
    }, {
        showArea: true,
        fullWidth: true,
        lineSmooth: false
    });


    if($('.ct-chart-sale').length) {
        new Chartist.Line( '.ct-chart-sale', {
            labels: [ "10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30" ],
            series: [
                [ 2710, 2810, 4210, 8010, 19158, 35326, 80837, 79477, 88561, 67807, 70837, 55261, 66216, 10516, 13493, 12000, 14253, 33506, 56326, 78986, 20747, 44165, 13817 ],
            ]
        }, {
                axisX: {
                    position: 'center'
                },
                axisY: {
                    offset: 0,
                    showLabel: false,
                    labelInterpolationFnc: function ( value ) {
                        return ( value / 1000 ) + 'k';
                    }
                },
                chartPadding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                height: 250,
                high: 120000,
                showArea: true,
                stackBars: true,
                fullWidth: true,
                lineSmooth: false,
                plugins: [
                    Chartist.plugins.ctPointLabels( {
                        textAnchor: 'left',
                        labelInterpolationFnc: function ( value ) {
                            return '$' + parseInt( value / 1000 ) + 'k'
                        }
                    })
                ]
            }, [
                [ 'screen and (max-width: 768px)', {
                    axisX: {
                        offset: 0,
                        showLabel: false
                    },
                    height: 180
                }]
            ] )
    }
});