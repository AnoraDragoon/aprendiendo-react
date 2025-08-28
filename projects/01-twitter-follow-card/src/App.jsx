import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const users = [
    { userName: "midudev", name: "Miguel Angel Duran", isFollowing: true },
    { userName: "pheralb", name: "Pablo Hernandez", isFollowing: true },
    { userName: "PacoHdezs", name: "Paco Hdez", isFollowing: false },
    { userName: "TMChein", name: "Tomas", isFollowing: false },
  ];

  return (
    <div className="app">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          isFollowing={isFollowing}
        />
      ))}
    </div>
  );
}
