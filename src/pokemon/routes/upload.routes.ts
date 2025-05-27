import { Router } from 'express'
import { upload } from '../../config/multer'
import path from 'path'
import { readExcel } from '../../utils/read-excel'
import { pokemonRepository } from '../repository/pokemon.repository'


const route = Router()

route.post('/upload', upload.single('file'), (req, res: any) => {
  if(!req.file) {
      return res.status(400).json({message: 'nenhum arquivo enviado'})
  }
  const pokemons = readExcel(req.file.path)

  for(const pokemon of pokemons) {
    pokemonRepository.save({
      aquireable: pokemon.Aquireable,
      atk: pokemon.ATK,
      CP39: pokemon['100% CP @ 39'],
      CP40: pokemon['100% CP @ 40'],
      crossGen: pokemon['Cross Gen'],
      def: pokemon.DEF,
      evolutionStage: pokemon['Evolution Stage'],
      evolved: pokemon.Evolved,
      familyId: pokemon.FamilyID,
      futureEvolve: pokemon['Future Evolve'],
      Generation: pokemon.Generation,
      hatchable: pokemon.Hatchable,
      id: pokemon.id,
      imgName: pokemon['Img name'],
      legendary: pokemon.Legendary,
      nest: pokemon.Nest,
      new: pokemon.New,
      notGettable: pokemon['Not-Gettable'],
      pokedexNumber: pokemon['Pokedex Number'],
      raidable: pokemon.Raidable,
      regional: pokemon.Regional,
      shiny: pokemon.Shiny,
      spawns: pokemon.Spawns,
      sta: pokemon.STA,
      statTotal: pokemon['STAT TOTAL'],
      type1: pokemon['Type 1'],
      type2: pokemon['Type 2'],
      weather1: pokemon['Weather 1'],
      weather2: pokemon['Weather 2'],
      name: pokemon.Name
    })
  }
  return res.json({
    message: 'upload sucessfully'
  })
})

route.get('/', async(req, res: any) => {
  const page = Number(req.query.page || 1)
  const limit = Number(req.query.limit || 10)
  const [results, count] = await pokemonRepository.findAndCount({
    take: limit,
    skip: limit * (page - 1)
  })
  return res.json({
    results, count
  })
}) 



export default route


