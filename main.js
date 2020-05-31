fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => {
    console.log(response);
    return response.json();
})

.then(data => {
    let title = document.getElementById('title');
    let explanation = document.getElementById('explanation');
    let copyright = document.getElementById('copyright');
    const img = document.getElementById('image');
    let photo = document.querySelector('.photo');
    
    title.innerText = `Title: "${data.title}"`;
    img.setAttribute('src', data.hdurl);
    explanation.innerText = `Explanation: "${data.explanation}"`;
    copyright.innerText = `\u00A9 ${data.copyright}.  ${data.date}`;
    photo.appendChild(img);
})
.catch(error => console.log(error));



// fetch('https://apod.nasa.gov/apod/image/2005/GreenFlashdidacopia2.jpg')
// .then(res => res.blob())
// .then(blob => {
//     let img = document.createElement('img');
//     img.src = URL.createObjectURL(blob);
//     document.querySelector('body').appendChild(img);
// })