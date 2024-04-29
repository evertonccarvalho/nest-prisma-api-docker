import { ConflicError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflicError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;

    super(`A record with this ${uniqueField} already exists`);
  }
}
