import cheerio from 'cheerio'
//import fetch from 'node-fetch'

var dataStatic = [
    ['ar', 'Argentina', 11517, 45974000],
    ['ar-tf', "Tierra del Fuego", 70, 173432],
    ['ar-ba', "Buenos Aires", 3227, 17541141],
    ['ar-sj', "San Juan", 192, 781217],
    ['ar-mz', "Mendoza", 252, 1990338],
    ['ar-nq', "Neuquén", 255, 1261294],
    ['ar-lp', "La Pampa", 106, 358428],
    ['ar-rn', "Río Negro", 149, 747610],
    ['ar-sl', "San Luis", 89, 508328],
    ['ar-cb', "Córdoba", 1326, 3760450],
    ['ar-ct', "Catamarca", 271, 415438],
    ['ar-lr', "La Rioja", 162, 393531],
    ['ar-sa', "Salta", 466, 1424397],
    ['ar-se', "Santiago del Estero", 195, 978313],
    ['ar-tm', "Tucumán", 797, 1694656],
    ['ar-cc', "Chaco", 319, 1204541],
    ['ar-fm', "Formosa", 91, 605193],
    ['ar-cn', "Corrientes", 389, 1120801],
    ['ar-er', "Entre Ríos", 251, 1385961],
    ['ar-ch', "Chubut", 97, 618994],
    ['ar-sf', "Santa Fe", 914, 3536418],
    ['ar-mn', "Misiones", 217, 1261294],
    ['ar-df', "CABA", 1417, 3075646],
    ['ar-sc', "Santa Cruz", 82, 365698],
    ['ar-jy', "Jujuy", 183, 770881]
];


export const getCovidData = async () => {
    var url = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=COVID-19_pandemic_in_Argentina';
    const response = await fetch(url)
    const data = await response.json();
    return scrapeCovidData(data.parse.text['*'])
}


function scrapeCovidData(html) {
    let $ = cheerio.load(html)
    let data = $('#covid19-container').find('table tbody tr').map(function(argument) {
        let provincia = $(this).find('th').eq(0).find('a').attr('title')
        if (provincia) {
            provincia = formatTitulo(provincia.indexOf('Province') < 0 ? 'CABA' : provincia.split('Province')[0]);
            let casos = toNumber($(this).find('td').eq(0).text())
            let muertos = toNumber($(this).find('td').eq(1).text())
            let recuperados = toNumber($(this).find('td').eq(2).text())
            let code = dataStatic.find(e => e[1] == provincia)[0]
            let poblacion = dataStatic.find(e => e[1] == provincia)[3]
            return {
                code,
                provincia,
                casos,
                muertos,
                recuperados,
                poblacion
            }
        }
    }).get()
    return data.filter(e => e.casos);
}

function formatTitulo(titulo) {
    return (titulo || "").replace(/^\s+|\s+$/g, "");
}

function toNumber(str) {
    return Number((str || '').replace(/[^\d]+/, ''))
}

//getCovidData().then(console.log)