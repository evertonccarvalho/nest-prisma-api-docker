import { User } from "@prisma/client";

export class UserEntity implements User {
  id: number;
  emal: string;
  name: string;
  admin: boolean;
  createdAt: Date;

}

