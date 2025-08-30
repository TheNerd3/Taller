// src/types/interfaces.ts

// Roles válidos en tu aplicación
export type Role = "admin" | "teacher" | "father";

// Estado posible de un usuario
export type Status = "active" | "inactive";

// Interfaz que representa al usuario que manejas
export interface User {
  id: string;
  nombre: string;
  rol: Role;
  status: Status;
  // ¡No incluyas contraseña aquí!
}

// Props que va a exponer tu AuthContext
export interface AuthContextProps {
  user: User | null;
  login: (nombre: string, password: string) => Promise<void>;
  logout: () => void;
}
