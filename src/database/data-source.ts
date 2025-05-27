import {DataSource} from 'typeorm'
import dotenv from 'dotenv'
import { PokemonEntity } from '../pokemon/pokemon.entity'

dotenv.config()
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  entities: [PokemonEntity] 
})
   