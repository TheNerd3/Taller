// src/components/Protected.tsx
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { Role } from "../types/interfaces";

interface ProtectedProps {
  roles: Role[];
  children: ReactNode;
  fallbackPath?: string;
}

export default function Protected({
  roles,
  children,
  fallbackPath = "/",
}: ProtectedProps) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (user.status !== "active") return <Navigate to="/inactive" />;
  if (!roles.includes(user.rol)) return <Navigate to={fallbackPath} />;
  return <>{children}</>;
}
