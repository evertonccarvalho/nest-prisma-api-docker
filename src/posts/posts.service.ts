import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';
import { NotFounderror } from 'src/common/errors/types/NotFoundError';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private readonly repository: PostsRepository) {}

  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.repository.create(createPostDto);
  }

  async findAll(): Promise<PostEntity[]> {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<PostEntity> {
    const post = await this.repository.findOne(id);
    if (!post) {
      throw new NotFounderror('Post Não Encontrado');
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    await this.findOne(id);
    return this.repository.update(id, updatePostDto);
  }

  async remove(id: number): Promise<PostEntity> {
    await this.findOne(id);
    return this.repository.remove(id);
  }
}
