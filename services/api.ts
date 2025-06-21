

export const TMDB_CONFIG = {
    BASEURL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
};

//
export const fetchMoives = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASEURL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASEURL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });
    if (!response.ok) {
        throw new Error("Failed to fetch Movies");
    }
    const data = await response.json();
    return data.results;
};

