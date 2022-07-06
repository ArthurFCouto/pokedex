import api from '../service';
/*
    Este valor serve como ponto de inicio para extraii parte das URLs recebidas
    O axios já possui o caminho raiz da API
*/
const index = 26;

const userGit = (data) => ({
    name: data.name || data.login,
    image: data.avatar_url
});

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
/*
    Método adaptado para tratar as respostas vindas da lista de todos os pokemons e da lista de pokemons por tipo
*/
async function modelResponseList(data) {
    const { count, next, previous } = data;
    const list = data.pokemon || data.results;
    const results = [];
    for (let item of list) {
        const { url, pokemon } = item;
        const src = url ? url.slice(index, url.length - 1) : pokemon.url.slice(index, pokemon.url.length - 1);
        const details = await api.get(src).then((results) => results.data).catch((error) => error);
        if (details.response)
            continue;
        results.push(modelResponsePokemon(details));
        /*
            Se houver a variável pokemon, então está sendo pesquisado por type, por enquanto sendo listado somente os 20 pirmeiros
        */
        if (pokemon && results.length === 20)
            break;
    }
    return {
        count,
        next,
        previous,
        results
    }
};

function modelResponsePokemon(data) {
    const {
        abilities: abilitiesDetails,
        forms,
        game_indices,
        height,
        id,
        moves: movesDetails,
        name,
        sprites,
        stats: statsDetails,
        types: typesDetails,
        weight } = data;
    const image = sprites.other.dream_world.front_default || sprites.front_default;
    const abilities = abilitiesDetails.map((item) => item.ability.name);
    const moves = movesDetails.map((item) => item.move.name);
    const types = typesDetails.map((item) => item.type.name);
    const stats = statsDetails.map((item) => ({ base_stat: item.base_stat, name: item.stat.name }));
    return {
        id,
        name,
        abilities,
        moves,
        types,
        image,
        stats,
        height,
        weight
    }
};

export async function findByName(search) {
    search = search.toLowerCase();
    const data = await api.get(`pokemon/${search}`).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponsePokemon(data);
}

export async function findAll(limit = 8, offset = 0) {
    const data = await api.get('pokemon', {
        params: {
            limit: limit,
            offset: offset,
        }
    }).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponseList(data);
}

export async function getTypes() {
    const data = await api.get('type').then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : { data: data.results };
}

export async function findByTypes(url) {
    const src = url.slice(index, url.length - 1);
    const data = await api.get(src).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : modelResponseList(data);
}

export async function gitHubLogin(user) {
    const data = await api.get(`https://api.github.com/users/${user}`).then((results) => results.data).catch((error) => error);
    return data.response ? modelResponseError(data.response) : userGit(data);
}

export function capitalize(value) {
    if (!isNaN(value))
        return value;
    return value[0].toUpperCase() + value.substring(1).toLowerCase();
}