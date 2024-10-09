import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AnimeworldService } from './animeworld.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('api/animeworld')
export class AnimeworldController {

    constructor(private readonly animeService: AnimeworldService){}

    @UseGuards(JwtAuthGuard)
    @Get("/webtoons")
    async getAllWebtoons(
        @Req() req,
        @Res() res
    ){
       try {
        const result= await this.animeService.findAllAnime();
        return res.status(HttpStatus.OK).send(result);
       } catch (error) {
        throw new Error('failed to fetch webtoons')
       }
    }

    @UseGuards(JwtAuthGuard)
    @Get("/webtoons/:anime_id")
    async getWebtoonById(
        @Param() params: { anime_id: string },
        @Res() res
    ) {
        try {
            const animeId = +params.anime_id;
            const result = await this.animeService.FindAnimetoonById(animeId);
            if (result) {
                return res.status(HttpStatus.OK).send(result);
            } else {
                return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Anime data not found',
                });
            }
        } catch (error) {
            console.error('Error fetching anime data:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to fetch anime data',
                error: error.message,
            });
        }
    }
    
    @UseGuards(JwtAuthGuard)
    @Post("/webtoons")
    async addWebtoons(
        @Body() webtoonData:{name: string,details:string},
        @Req() req,
        @Res() res
    ){
        try {
            const result = await this.animeService.addAnimedata(webtoonData)
            return res.status(HttpStatus.CREATED).json(result);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to add webtoons data',
                error: error.message,
              });
            
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/webtoons/:anime_id")
    async deleteWebtoonById(
        @Param() anime_id:string,
        @Res() res,
    ){
        try {
            const result= await this.animeService.deleteAnimetoonById(anime_id);
            if (result) {
                return res.status(HttpStatus.OK).json({
                  message: 'anime data deleted successfully',
                });
              } else {
                return res.status(HttpStatus.NOT_FOUND).json({
                  message: 'anime data not found',
                });
              }
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to delete anime data',
                error: error.message,
              });
        }
    }
}
