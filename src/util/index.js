import api from '../service';
import config from '../config';

const largScreen = config.media.largScreen.maxWidth;

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
    const { count, next, previous } = data;
    const results = [];
    for (let item of data.results) {
        const { url } = item;
        const src = url.slice(26, url.length - 1);
        const details = await api.get(src).then((results) => results.data).catch((error) => error);
        if (details.response) {
            console.log('Houve um erro ao buscar os detalhes do pokemon: ', details.response);
            continue;
        }
        results.push(modelResponsePokemon(details));
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

export async function findAll(offset = 0, limit = 20) {
    const data = await api.get(`pokemoXn?offset=${offset}&limit=${limit}`).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponse(data);
}

export async function findNaxtPage(url) {
    const src = url.slice(26, url.length - 1);
    const data = await api.get(src).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponse(data);
}

export function getBackgroundColor(types) {
    let color;
    const type = Array.isArray(types) ? types[0] : types;
    switch (type) {
        case 'grass':
            color = '#48d0b0';
            break;
        case 'fire':
            color = '#fb6c6c';
            break;
        case 'water':
            color = '#77bdfe';
            break;
        case 'bug':
            color = '#b6de76';
            break;
        case 'normal':
            color = '#b1736d';
            break;
        case 'fighting':
            color = '#888888';
            break;
        case 'poison':
            color = '#6bd8be';
            break;
        case 'flairy':
            color = '#f2cdd6';
            break;
        case 'flying':
            color = '#a499c1';
            break;
        case 'psychic':
            color = '#ce8083';
            break;
        case 'error':
            color = '#424242';
            break;
        default:
            color = '#ffd86f';
    }
    return color;
};

export function capitalize(value) {
    if (!isNaN(value)) {
        return value;
    }
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}