class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // Part c: Method to filter movies by rating "PG"
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Part d: Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing the Movie class and getPG method
const movies = [
    new Movie("Frozen", "Disney", "PG"),
    new Movie("Inception", "Warner Bros.", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("Toy Story", "Pixar", "G"),
    casinoRoyale
];

// Testing getPG method
const pgMovies = Movie.getPG(movies);
console.log("PG Movies:", pgMovies);