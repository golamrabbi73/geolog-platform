import type { BaseEntity } from "./base";
import type {
  UserRole,
  UserStatus,
} from "./common";

export interface User extends BaseEntity {
  name: string;

  email: string;

  photoURL: string;

  role: UserRole;

  status: UserStatus;
}