import type { BaseEntity } from "./base";
import type { UserRole, UserStatus } from "./common";

export interface User extends BaseEntity {
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    phone?: string;
    designation?: string;
    photoURL?: string;
}