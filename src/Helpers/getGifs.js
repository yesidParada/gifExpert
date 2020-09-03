import url from '../Utils/apiKey';

export const getGifs = async(category) => {
    const resp = await fetch(`${url.url}q=${category}&limit=12&${url.key}`);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
}