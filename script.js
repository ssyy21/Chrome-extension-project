fetch('http://api.mediastack.com/v1/news?access_key=b74f515aee8bd489b5ffaa10cf53fa8d&countries=in')

    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.data[0].description;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })


