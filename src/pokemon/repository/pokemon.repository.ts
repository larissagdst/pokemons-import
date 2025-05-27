import {AppDataSource} from '../../database/data-source'
import {PokemonEntity } from '../pokemon.entity'

export const pokemonRepository = AppDataSource.getRepository(PokemonEntity)