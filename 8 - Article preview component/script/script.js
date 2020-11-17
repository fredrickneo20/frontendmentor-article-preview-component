let button = document.getElementById('share-button');
let circle = document.getElementById('circle');
let content = document.getElementById('share-content');
let clip = document.getElementById('clip');

let share = () => {
    if(content.style.display === 'none'){
        content.style.display = 'flex';
        clip.style.display = 'block';
        circle.style.backgroundColor = 'hsl(214, 17%, 51%)';
        button.style.filter = 'brightness(0) invert(1)';
    } else {
        content.style.display = 'none';
        clip.style.display = 'none';
        circle.style.backgroundColor = 'hsl(210, 46%, 95%)';
        button.style.filter = 'none';
    }
}

button.onclick = share;
