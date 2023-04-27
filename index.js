const $time = document.querySelector('.time'),
    $fecha = document.querySelector('.fecha');

function Clock() {
    let f = new Date(),
        day = f.getDate(),
        month = f.getMonth() + 1,
        year = f.getFullYear(),
        dayWeek = f.getDay();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2)

    let timeString = f.toLocaleTimeString()
    $time.innerHTML = timeString;

    let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let showWeek = (week[dayWeek])
    $fecha.innerHTML = `${showWeek}  ${day}/${month}/${year}`
}

setInterval(() => {
    Clock()
}, 1000);


/*

        ajax request to fetch the data from the json file
*/

let http = new XMLHttpRequest();

http.open('get', 'noticias.json', true);

http.send();

http.onload = function () {

    if (this.readyState == 4 && this.status == 200) {

        let noticias = JSON.parse(this.responseText);

        let output = "";

        for (let article of noticias) {
            output += `
                <div class="noticias-json">
                    <h2 class="title">${article.title}</h2>
                    <h3 class="category">${article.Category}</h3>
                    <img src="${article.image}" alt="${article.image}">
                </div>
                `;

        }

        document.querySelector(".noticias").innerHTML = output;

    }

}
