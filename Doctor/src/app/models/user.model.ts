export interface User {
  userId?: string | null;
  userName?: string | null;
  email?: string | null;
  password?: string | null; // used only for login/register
  passwordHash?: string | null;
  role: Role;
}

export interface Role {
  roleId?: string | null;
  roleName?: string | null;
}