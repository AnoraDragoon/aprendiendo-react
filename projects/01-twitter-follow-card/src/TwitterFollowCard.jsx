import { useState } from "react";

export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const hadlerFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={`https://unavatar.io/${userName}`}
          alt={`El avatar de ${userName}`}
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={hadlerFollowing}>
          <span className="tw-follow-card-text">{text}</span>
          <span className="tw-follow-card-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
