export function formattedDate() {
    var now = this.date;
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + y + '-' + mm + '-' + dd;
}

export function renderPage(data) {
    let title = document.getElementById('title');
    title.innerText = `Title: "${data.title}"`;

    let explanation = document.getElementById('explanation');
    explanation.innerText = `Explanation: "${data.explanation}"`;

    let image = document.querySelector('.image');
    if (data.media_type === 'video') {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', data.url);
        iframe.setAttribute('width', '520px');
        iframe.setAttribute('height', '415px');
        image.appendChild(iframe);
    } else {
        let img = document.createElement('img');
        img.setAttribute('src', data.hdurl);
        img.setAttribute('alt', 'See explanation');
        image.appendChild(img);
    }

    if (data.copyright) {
        let copyright = document.getElementById('copyright');
        copyright.innerText = `\u00A9 ${data.copyright}`;
    }
}

export function addElement() {
    let element = document.createElement('div');
    if (this.date === undefined) {
        this.date = new Date()
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + this.formattedDate())
        .then(response => response.json())
        .then(data => this.renderPage(data))
        .catch(error => console.log(error));
    } else {
        this.date = new Date(this.date.setDate(this.date.getDate() - 1));
        fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + this.formattedDate())
        .then(response => response.json())
        .then(data => this.addPictureOfDay(data))
        .catch(error => console.log(error));
    }
}

export function addPictureOfDay(data) {
    let image = document.querySelector('.previous');
    if (data.media_type === 'video') {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', data.url);
        iframe.setAttribute('width', '350px');
        iframe.setAttribute('height', 'auto');
        image.appendChild(iframe);
    } else {
        let img = document.createElement('img');
        img.setAttribute('src', data.hdurl);
        image.appendChild(img);
    }
    // element.innerText = this.formattedDate();
    // this.container.append(element);
}