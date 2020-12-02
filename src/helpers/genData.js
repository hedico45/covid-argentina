export const generateSeries = (data, prop) => {
    return [{
        boostThreshold: 1,
        turboThreshold: 0,
        name: prop,
        data: data.map(e => ([e.code, e[prop]])),
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        allAreas: false,
        allowPointSelect: true,
        dataLabels: {
            enabled: true,
            color: '#FFFFFF',
            formatter: function() {
                let txt = this.point.value;
                return txt;
            }
        },
        tooltip: {
            headerFormat: '{point.name}',
            pointFormat: '{point.value}'
        },
    }];
};