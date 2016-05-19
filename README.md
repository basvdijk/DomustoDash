# DomustoDash for Domoticz
An adaptive, highly customizable dashboard for Domoticz with support for themes, color schemes and widgets.

# Warning
Please use DomustoDash on your own risk. This dashboard is under heavy development. Your own created themes and widgets might become broken during updates on DomoticzDash.

## Themes

#### Theme: `default` based on [frontpage.html](https://www.domoticz.com/forum/viewtopic.php?f=8&t=4698)
![DumustoDash screenshot](http://usto.nl/misc/domusto/DomustoDash-desktop.png)

#### Theme: `default` on small screen
![DumustoDash screenshot](http://usto.nl/misc/domusto/DomustoDash-small.png)

#### Theme: `lcd`, color-scheme: `yellow`
![DumustoDash screenshot](http://usto.nl/misc/domusto/theme-lcd-yellow.png)


## Installation
Clone this repo to a server hosting your dashboard. This can be any server capable of serving files and html e.g. Apache, NGINX.

You can even run it locally from your harddisk by simply opening the `index.html`.

## Configuration
Open `js/config.js` and change the properties according to your needs.


## Domoticz

### url: string
Url to the api endpoint of Domoticz

### roomplan: number
Number of the roomplan in Domoticz to use in DomustoDash


## Dashboard

### theme: string
Dashboard theme to use from the theme folder

### colorScheme: string
Some themes have different color schemes available. This field defines which scheme to use.

### updateInterval: number
Number of milliseconds between updates (1000ms = 1 second). Use 0 to disable updating. This option is useful during development.

### noDataValue: string
String used to display when there is no data available

### showCellNumbers: boolean
When `true`, DomustoDash renders the cell numbers to speed up the configuration of the cells.

![showCellNumbers screenshot](http://usto.nl/misc/domusto/DomustoDash-showCellNumbers.png)

## Temperature and Humidity

### separator: string
String used to separate the temperature and humidity value.

### statusField: string
Name of the JSON returned data to display in the status field of a cell.

### tempDecimals: number
Number of decimals to show for temperature values

### tempUnits: string
String to display as the unit of a temperature value

### humidityDecimals: number
Number of decimals to show for humidity values

### humidityUnits: string
String to display as the unit of a humidity value


## Switches

### labelOn: string
Label to display on switch buttons with the `On` state

### labelOff: string
Label to display on switch buttons with the `Off` state


## Grid

The grid config contains an array of cell definitions:

### cell: number
Number which is used as id for a cell in the grid. Example: `13` and `1`.

### idx: number
Index of the sensor / switch / etc. in Domoticz. Example: `135` and `120`.

### label: string
By default the labels from Domoticz are used. With `label` you can define your own label. Example: `living room`, `currently used power`.

### widget: string
Defines the name of the widget to render inside the cell. Example: `stock`, `calendar`, `buienradar`.

### widgetConfig: object
Object containing specific configuration for a widget. Example:
```
widgetConfig: {
    symbol: 'GOOG'
}
```
Defines the symbol to use for the stock widget.


### Example config.js

```
grid: [

    {
        cell: 0,
        idx: 134,
        label: 'Living room',
    },
    {
        cell: 1,
        idx: 130,
        label: 'Garage',
    },
    {
        cell: 11,
        widget: 'stock',
        widgetConfig: {
            symbol: 'GOOG'
        }
    }

]
```

## Widgets

Besides Domoticz data, DomustoDash supports some standalone widgets which could be loaded into dashboard cells:

### Buienradar
![DumustoDash screenshot](http://usto.nl/misc/domusto/widget-buienradar.png)

### Google Finance
![DumustoDash screenshot](http://usto.nl/misc/domusto/widget-finance.png)

### Calendar / Clock
![DumustoDash screenshot](http://usto.nl/misc/domusto/widget-clock.png)
