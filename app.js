const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar') 

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar')
}

// Button Event Handlers

darkButton.onclick = () => {

    if (body.classList.contains('light')) {

        body.classList.replace('light', 'dark');
        
    } else if (body.classList.contains('solar')) {

        body.classList.replace('solar','dark');
    }

    localStorage.setItem('theme', 'dark')
}

lightButton.onclick = () => {

    if (body.classList.contains('dark')) {

        body.classList.replace('dark', 'light');
        
    } else if (body.classList.contains('solar')) {

        body.classList.replace('solar','light');
    }

    localStorage.setItem('theme', 'light')

}

solarButton.onclick = () => {

    if (body.classList.contains('dark')) {

        body.classList.replace('dark', 'solar');

    } else if (body.classList.contains('light')) {

        body.classList.replace('light','solar');
    }

    localStorage.setItem('theme', 'solar')

}