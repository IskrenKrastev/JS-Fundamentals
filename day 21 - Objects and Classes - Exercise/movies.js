function movies(arr) {

    let movies = [];

    arr.forEach(everyLine => {
        let splitedLine = everyLine.split(' ');
        let addMovieIndex = splitedLine.indexOf('addMovie');
        let directedByIndex = splitedLine.indexOf('directedBy');
        let onDateIndex = splitedLine.indexOf('onDate');

        if (addMovieIndex > -1) {
            let name = splitedLine.slice(addMovieIndex + 1).join(' ');
            movies.push({
                name: name
            });
        }

        if (directedByIndex > -1) {
            let name = splitedLine.slice(0, directedByIndex).join(' ');
            let director = splitedLine.slice(directedByIndex + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });
        }

        if (onDateIndex > -1) {
            let name = splitedLine.slice(0, onDateIndex).join(' ');
            let date = splitedLine.slice(onDateIndex + 1).join(' ');

            movies.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date
                }
            });
        }
    });

    movies.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie));
        }
    });


}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);