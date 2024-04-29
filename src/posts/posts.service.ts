import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';
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
    return this.repository.findOne(id);
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    return this.repository.update(id, updatePostDto);
  }

  async remove(id: number): Promise<PostEntity> {
    return this.repository.remove(id);
  }
}
