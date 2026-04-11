
// import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// // ─── Types ────────────────────────────────────────────────────────────────────

// export type UserRole =
//   | "academic"
//   | "student"
//   | "researcher"
//   | "institution"
//   | "professional";

// export interface User {
//   id:              string;
//   username:        string;
//   email:           string;
//   role:            UserRole;
//   profileComplete?: boolean;
//   myReferralCode?: string;
//   referredBy?:     string | null;
//   createdAt?:      string;
// }

// export interface RegisterData {
//   username:      string;
//   email:         string;
//   password:      string;
//   role:          UserRole;
//   referralCode?: string;
// }

// export interface LoginData {
//   email:    string;
//   password: string;
// }

// interface AuthContextType {
//   user:            User | null;
//   isAuthenticated: boolean;
//   isLoading:       boolean;
//   register:        (data: RegisterData) => Promise<void>;
//   login:           (data: LoginData)    => Promise<void>;
//   logout:          () => void;
//   error:           string | null;
//   clearError:      () => void;
// }

// // ─── Helpers ──────────────────────────────────────────────────────────────────

// /** Returns true if the stored JWT exists and has not expired. */
// function isTokenValid(): boolean {
//   const token =
//     localStorage.getItem("as_token") ||
//     sessionStorage.getItem("as_token");
//   if (!token) return false;
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     const nowSec  = Math.floor(Date.now() / 1000);
//     return typeof payload.exp === "number" && payload.exp > nowSec;
//   } catch {
//     return false;
//   }
// }

// /** Returns milliseconds until the stored JWT expires (0 if already expired). */
// function msUntilTokenExpiry(): number {
//   const token =
//     localStorage.getItem("as_token") ||
//     sessionStorage.getItem("as_token");
//   if (!token) return 0;
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1]));
//     const ms      = payload.exp * 1000 - Date.now();
//     return ms > 0 ? ms : 0;
//   } catch {
//     return 0;
//   }
// }

// function clearAuthStorage() {
//   localStorage.removeItem("as_token");
//   localStorage.removeItem("as_user");
//   sessionStorage.removeItem("as_token");
// }

// // ─── Context ──────────────────────────────────────────────────────────────────

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // ─── Provider ─────────────────────────────────────────────────────────────────

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user,      setUser]      = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error,     setError]     = useState<string | null>(null);

//   // ── Rehydrate on mount — skip if token is expired ──────────────────────────
//   useEffect(() => {
//     try {
//       if (!isTokenValid()) {
//         // Token missing or expired — clear stale data
//         clearAuthStorage();
//         setUser(null);
//       } else {
//         const stored = localStorage.getItem("as_user");
//         if (stored) setUser(JSON.parse(stored));
//       }
//     } catch {
//       clearAuthStorage();
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   // ── Auto-logout timer: fires when JWT expires ───────────────────────────────
//   useEffect(() => {
//     if (!user) return;

//     const ms = msUntilTokenExpiry();

//     if (ms <= 0) {
//       // Already expired — log out immediately
//       logout();
//       return;
//     }

//     const timer = setTimeout(() => {
//       logout();
//     }, ms);

//     return () => clearTimeout(timer);
//   }, [user]);

//   // ── Register ────────────────────────────────────────────────────────────────
//   const register = async (data: RegisterData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const body: Record<string, string> = {
//         username: data.username.trim(),
//         email:    data.email.trim().toLowerCase(),
//         password: data.password,
//         role:     data.role,
//       };
//       if (data.referralCode?.trim()) {
//         body.referralCode = data.referralCode.trim().toUpperCase();
//       }

//       const res = await fetch(
//         `${import.meta.env.VITE_NODE_API_URL}/api/sch-register`,
//         {
//           method:  "POST",
//           headers: { "Content-Type": "application/json" },
//           body:    JSON.stringify(body),
//         }
//       );

//       const json = await res.json();
//       if (!res.ok) throw new Error(json.message || "Registration failed.");

//       const newUser: User = json.user;
//       localStorage.setItem("as_token", json.token);
//       localStorage.setItem("as_user",  JSON.stringify(newUser));
//       setUser(newUser);
//     } catch (err: any) {
//       setError(err.message ?? "Registration failed. Please try again.");
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ── Login ───────────────────────────────────────────────────────────────────
//   const login = async (data: LoginData) => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_NODE_API_URL}/api/sch-login`,
//         {
//           method:  "POST",
//           headers: { "Content-Type": "application/json" },
//           body:    JSON.stringify({
//             email:    data.email.trim().toLowerCase(),
//             password: data.password,
//           }),
//         }
//       );

//       const json = await res.json();
//       if (!res.ok) throw new Error(json.message || "Login failed.");

//       const loggedInUser: User = json.user;
//       localStorage.setItem("as_token", json.token);
//       localStorage.setItem("as_user",  JSON.stringify(loggedInUser));
//       setUser(loggedInUser);
//     } catch (err: any) {
//       setError(err.message ?? "Login failed. Please check your credentials.");
//       throw err;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ── Logout ──────────────────────────────────────────────────────────────────
//   const logout = () => {
//     clearAuthStorage();
//     setUser(null);
//   };

//   const clearError = () => setError(null);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         isLoading,
//         register,
//         login,
//         logout,
//         error,
//         clearError,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // ─── Hook ─────────────────────────────────────────────────────────────────────

// export function useAuth() {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used within AuthProvider");
//   return ctx;
// }

// // ─── Role helpers ─────────────────────────────────────────────────────────────

// export const ROLE_LABELS: Record<UserRole, string> = {
//   academic:     "Academic / Lecturer",
//   student:      "Student",
//   researcher:   "Researcher",
//   institution:  "Institution",
//   professional: "Professional",
// };

// /** Returns true if the current user has one of the given roles */
// export function useHasRole(...roles: UserRole[]) {
//   const { user } = useAuth();
//   return user ? roles.includes(user.role) : false;
// }
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type UserRole =
  | "academic"
  | "student"
  | "researcher"
  | "institution"
  | "professional";

export interface User {
  id:              string;
  username:        string;
  email:           string;
  role:            UserRole;
  profileComplete?: boolean;
  myReferralCode?: string;
  referredBy?:     string | null;
  createdAt?:      string;
}

export interface RegisterData {
  username:      string;
  email:         string;
  password:      string;
  role:          UserRole;
  referralCode?: string;
}

export interface LoginData {
  email:    string;
  password: string;
}

interface AuthContextType {
  user:            User | null;
  isAuthenticated: boolean;
  isLoading:       boolean;
  register:        (data: RegisterData) => Promise<void>;
  login:           (data: LoginData)    => Promise<void>;
  logout:          () => void;
  updateUser:      (updates: Partial<User>) => void;  // ← NEW
  error:           string | null;
  clearError:      () => void;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isTokenValid(): boolean {
  const token =
    localStorage.getItem("as_token") ||
    sessionStorage.getItem("as_token");
  if (!token) return false;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const nowSec  = Math.floor(Date.now() / 1000);
    return typeof payload.exp === "number" && payload.exp > nowSec;
  } catch {
    return false;
  }
}

function msUntilTokenExpiry(): number {
  const token =
    localStorage.getItem("as_token") ||
    sessionStorage.getItem("as_token");
  if (!token) return 0;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const ms      = payload.exp * 1000 - Date.now();
    return ms > 0 ? ms : 0;
  } catch {
    return 0;
  }
}

function clearAuthStorage() {
  localStorage.removeItem("as_token");
  localStorage.removeItem("as_user");
  sessionStorage.removeItem("as_token");
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user,      setUser]      = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error,     setError]     = useState<string | null>(null);

  // ── Rehydrate on mount ──────────────────────────────────────────────────────
  useEffect(() => {
    try {
      if (!isTokenValid()) {
        clearAuthStorage();
        setUser(null);
      } else {
        const stored = localStorage.getItem("as_user");
        if (stored) setUser(JSON.parse(stored));
      }
    } catch {
      clearAuthStorage();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ── Auto-logout when JWT expires ────────────────────────────────────────────
  useEffect(() => {
    if (!user) return;
    const ms = msUntilTokenExpiry();
    if (ms <= 0) { logout(); return; }
    const timer = setTimeout(logout, ms);
    return () => clearTimeout(timer);
  }, [user]);

  // ── Register ────────────────────────────────────────────────────────────────
  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);
    try {
      const body: Record<string, string> = {
        username: data.username.trim(),
        email:    data.email.trim().toLowerCase(),
        password: data.password,
        role:     data.role,
      };
      if (data.referralCode?.trim()) {
        body.referralCode = data.referralCode.trim().toUpperCase();
      }

      const res = await fetch(
        `${import.meta.env.VITE_NODE_API_URL}/api/sch-register`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(body),
        }
      );

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Registration failed.");

      const newUser: User = json.user;
      localStorage.setItem("as_token", json.token);
      localStorage.setItem("as_user",  JSON.stringify(newUser));
      setUser(newUser);
    } catch (err: any) {
      setError(err.message ?? "Registration failed. Please try again.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // ── Login ───────────────────────────────────────────────────────────────────
  const login = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_NODE_API_URL}/api/sch-login`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify({
            email:    data.email.trim().toLowerCase(),
            password: data.password,
          }),
        }
      );

      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Login failed.");

      const loggedInUser: User = json.user;
      localStorage.setItem("as_token", json.token);
      localStorage.setItem("as_user",  JSON.stringify(loggedInUser));
      setUser(loggedInUser);
    } catch (err: any) {
      setError(err.message ?? "Login failed. Please check your credentials.");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // ── Logout ──────────────────────────────────────────────────────────────────
  const logout = () => {
    clearAuthStorage();
    setUser(null);
  };

  // ── Update user (called by Onboarding after PATCH /api/sch-onboarding) ──────
  const updateUser = (updates: Partial<User>) => {
    setUser(prev => {
      if (!prev) return prev;
      const updated = { ...prev, ...updates };
      localStorage.setItem("as_user", JSON.stringify(updated));
      return updated;
    });
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        register,
        login,
        logout,
        updateUser,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

// ─── Role helpers ─────────────────────────────────────────────────────────────

export const ROLE_LABELS: Record<UserRole, string> = {
  academic:     "Academic / Lecturer",
  student:      "Student",
  researcher:   "Researcher",
  institution:  "Institution",
  professional: "Professional",
};

export function useHasRole(...roles: UserRole[]) {
  const { user } = useAuth();
  return user ? roles.includes(user.role) : false;
}