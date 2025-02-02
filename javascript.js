function openImage(src) {
    document.getElementById("fullImage").src = src;
}

function loadImages() {
    const gallery = document.querySelector('.gallery');
    const imageFolder = 'bigimg/';
    const thumbFolder = 'images/';
    const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,19,20,21,22,23,24,25,26]; // Array of image numbers

    imageNumbers.forEach(number => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.onclick = () => openImage(`${imageFolder}${number}.jpg`);

        const img = document.createElement('img');
        img.src = `${thumbFolder}${number}.jpg`;
        img.alt = `Photo ${number}`;

        circle.appendChild(img);
        gallery.appendChild(circle);
    });
}

window.onload = loadImages;