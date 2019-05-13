export interface Pokemon {
    abilities: Array<Abilities>;
    base_experience: number;
    forms: Array<Form>;
    game_indices: Array<Game>;
    height: number;
    held_items: Array<any>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Array<Moves>;
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Array<Stats>;
    types: Types;
    weight: number;
    abilityDesc: Array<string>;
}

export interface Abilities {
    ability: Ability;
    is_hidden: boolean;
    slot: number;
}

export interface Ability {
    name: string;
    url: string;
}

export interface Form {
    name: string;
    url: string;
}

export interface Game {
    game_index: number;
    version: Version;
}

export interface Version {
    name: string;
    url: string;
}

export interface Moves {
    move: Move;
}

export interface Move {
    name: string;
    url: string;
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export interface Stat {
    name: string;
    url: string;
}

export interface Types {
    slot: number;
    type: Type;
}

export interface Type {
    name: string;
    url: string;
}
