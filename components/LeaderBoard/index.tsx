import Image from "next/image";
import React from "react";
import { topPlayerList } from "../../topPlayerList";
import LiveRanking from "../LiveRanking";
import TopPlayer from "../TopPlayer";

function LeaderBoard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <div className="heading">
          <h1>Leaderboard</h1>
          <Image
            src={"/images/leader-board-heading-pattern.png"}
            width={663}
            height={35}
            alt="Pink Pattern"
          />
        </div>
        <div className="top-players-container">
          <h2>Top players on Afriguild this week</h2>
          <div className="top-players-list">
            {topPlayerList.map((player, i) => (
              <TopPlayer
                handle={player.handle}
                key={i}
                name={player.name}
                image={player.image}
                points={player.points}
              />
            ))}
          </div>
        </div>
        <LiveRanking />
      </div>
    </div>
  );
}

export default LeaderBoard;
