import { Character } from "../types/index";

export const getCharacters = async (): Promise<Array<Character>> => {
    const response = await fetch( "https://www.breakingbadapi.com/api/characters");
    const data = await response.json();
    console.log(data);
    return data;
};