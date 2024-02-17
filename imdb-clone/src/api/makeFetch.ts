const CALL_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_BEARER}`
    }
};

export const makeFetch = async (url: string) => {
    try {
        const res = await fetch(url, CALL_OPTIONS);
        if (!res.ok) {
            console.error("failed to fetch!");
            throw new Error("failed to fetch data!");
        }
        const parsedRes = await res.json();
        return parsedRes;
    } catch (error) {
        console.error(error);
        throw new Error("failed to fetch data!");
    }
};

export const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
export const TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
