import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { LandingPage } from "./components/LandingPage";

interface User {
  name: string;
  email: string;
}

export function App() {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return <LandingPage user={user} onLogout={() => setUser(null)} />;
}
