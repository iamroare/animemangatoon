import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animetoons } from './entity/animeworldEntity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimeworldService {
    constructor(
        @InjectRepository(Animetoons)
        private readonly animetoonRepo: Repository<Animetoons>
    ){}
 
    async findAllAnime(){
        try {
            const result= await this.animetoonRepo.find();
            return result;
        } catch (error) {
            return error;
        }
    }

    async addAnimedata(animeData){
        try {
            const result= await this.animetoonRepo.create(animeData);
            return await this.animetoonRepo.save(result);
        } catch (error) {
            return error;
        }
    }

    async deleteAnimetoonById(anime_id){
        try {
            const result = await this.animetoonRepo.delete(anime_id.anime_id);
            return result.affected > 0;
          } catch (error) {
            console.error('Error deleting AnimeData data:', error);
            throw new Error('Failed to delete AnimeData data');
          }
    }


    async FindAnimetoonById(anime_id: number) {
        try {
            const result = await this.animetoonRepo.findOne({
                where: { id: anime_id },
            });
    
            if (!result) {
                console.warn(`Anime with ID ${anime_id} not found`); 
                return null; 
            }
            return result;
        } catch (error) {
            console.error('Error finding AnimeData:', error);
            throw new Error('Failed to find AnimeData');
        }
    }
    
    
}
