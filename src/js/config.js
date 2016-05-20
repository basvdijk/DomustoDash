var config = {

    domoticz: {
        url: 'http://192.168.178.47:8080',
        roomplan: 2,
    },

    dashboard: {
        updateInterval: 2000,
        noDataValue: '&mdash;',
        theme: 'default',
        colorScheme: 'yellow',
        showCellNumbers: false
    },

    tempHumidity: {
        separator: ' ',
        // statusField: 'LastUpdate',
        tempDecimals: 1,
        tempUnit: '&deg;C',
        humidityDecimals: 0,
        humidityUnit: '%'
    },

    switch: {
        labelOn: 'Aan',
        labelOff: 'Uit',
        labelOpen: 'Open',
        labelClose: 'Close'
    },

    grid: [{
            cell: 2,
            label: 'Woonkamer',
            idx: 134,
        }, {
            cell: 3,
            label: 'Garage',
            idx: 130,
        }, {
            cell: 4,
            //  label: 'Achtertuin',
            //  idx: 136,
            widget: 'buienradar'
        }, {
            cell: 5,
            label: 'Studeerkamer',
            idx: 135,
        },


        {
            cell: 6,
            idx: 220,
        },

        {
            cell: 7,
            field: 'CounterToday',
            label: 'Dagverbruik',
            idx: 220,
        },

        {
            cell: 8,
            label: 'Tuinverlichting',
            idx: 94
        },

        {
            cell: 9,
            idx: 59,
        },

        {
            cell: 10,
            widget: 'calendar',
            widgetConfig: {
                showSeconds: false,
                blinkSeparator: true
            }
        },

        {
            cell: 11,
            widget: 'stock',
            widgetConfig: {
                symbol: 'GOOG'
            }
        },
        {
            cell: 12,
            widget: 'domoticzUpdateAvailable',
        }

    ]
}
