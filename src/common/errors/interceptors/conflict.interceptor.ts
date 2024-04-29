import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ConflictException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { ConflicError } from '../types/ConflictError';

@Injectable()
export class ConflictInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        if (error instanceof ConflicError) {
          throw new ConflictException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}