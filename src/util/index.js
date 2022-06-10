import api from '../service';

function modelResponseError(error) {
    const { data, status, statusText } = error;
    return new Promise((resolve, reject) => {
        reject({
            status,
            statusText,
            data
        });
    });
}

async function modelResponse(data) {
    const { count, next, previous, pokemon } = data;
    const list = pokemon || data.results;
    const results = [];
    for (let item of list) {
        const { url, pokemon } = item;
        const src = url ? url.slice(26, url.length - 1) : pokemon.url.slice(26, pokemon.url.length - 1);
        const details = await api.get(src).then((results) => results.data).catch((error) => error);
        if (details.response) {
            console.log('Houve um erro ao buscar os detalhes do pokemon: ', details.response);
            continue;
        }
        results.push(modelResponsePokemon(details));
        if(pokemon && results.length === 12) {
            break;
        }
    }
    return {
        count,
        next,
        previous,
        results
    }
};

function modelResponsePokemon(data) {
    const { abilities: abilitiesDetails, forms, game_indices, height, id, moves: movesDetails, name, sprites, types: typesDetails, weight, stats: statsDetails } = data;
    const image = sprites.other.dream_world.front_default;
    const abilities = abilitiesDetails.map((item) => item.ability.name);
    const moves = movesDetails.map((item) => item.move.name);
    const types = typesDetails.map((item) => item.type.name);
    const stats = statsDetails.map((item) => ({ base_stat: item.base_stat, name: item.stat.name }));
    return {
        image,
        abilities,
        moves,
        types,
        stats,
        height,
        id,
        name,
        weight
    }
};

export async function findByName(search) {
    const data = await api.get(`pokemon/${search.toLowerCase()}`).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponsePokemon(data);
}

export async function findAll(limit, offset) {
    const data = await api.get('pokemon', {
        params: {
          limit: limit,
          offset: offset,
        }}).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponse(data);
}

export async function getTypes() {
    const data = await api.get('type').then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : {data: data.results};
}

export async function findByTypes(url) {
    const src = url.slice(26, url.length - 1);
    const data = await api.get(src).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponse(data);
}

export async function gitHubLogin(user) {
    const data = await api.get(`https://api.github.com/users/${user}`).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : { name: data.name || data.login, image: data.avatar_url };
}

export function capitalize(value) {
    if (!isNaN(value)) {
        return value;
    }
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}