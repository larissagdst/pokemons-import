import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pokemons')
export class PokemonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    pokedexNumber: number

    @Column({nullable: true})
    imgName: string

    @Column()
    Generation: number

    @Column({nullable: true})
    evolutionStage: string

    @Column()
    evolved: boolean

    @Column({nullable: true})
    familyId: number

    @Column()
    crossGen: number

    @Column()
    type1: string

    @Column({nullable: true})
    type2: string

    @Column({nullable: true})
    weather2: string

    @Column({nullable: true})
    weather1: string

    @Column({nullable: true})
    statTotal: number 

    @Column()
    atk: number

    @Column()
    def: number

    @Column()
    sta: number 

    @Column()
    legendary: number

    @Column()
    aquireable: number

    @Column()
    spawns: number 

    @Column()
    regional: number 

    @Column()
    raidable: number

    @Column()
    hatchable: number 

    @Column()
    shiny: number

    @Column()
    nest: boolean

    @Column()
    new: number 

    @Column()
    notGettable: boolean

    @Column()
    futureEvolve: boolean 

    @Column()
    CP40: number 

    @Column()
    CP39: number
}


