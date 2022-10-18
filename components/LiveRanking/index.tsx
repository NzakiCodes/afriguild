import React from "react";
import { playerList } from "../../topPlayerList";
import PlayerListItem from "../PlayerListItem";

function LiveRanking() {
  return (
    <div className="live-ranking-container">
      <div className="live-ranking-heading">
        <h2>Live ranking</h2>
        <div></div>
      </div>
      <div className="live-ranking-list-container">
       <div className="description">
          <span>
            Welcome to the weekly live ranking on Afriguild, players are ranked
            based on final position in every tournament they play in. The more
            you play, and the more you win the higher your ranking.
          </span>
          <span>
            The weekly leaderboard is rest at 00.00 WAT every Mondays.{" "}
          </span>
          <button>See my ranking</button>
        </div>
       <div>
        <ul className="live-ranking-list">
          {playerList.map(({ name, image, handle, points,isRankingHigh,isRankingLow }, i) => {
            return (
              <PlayerListItem
                key={i}
                id={i+1}
                isRankingHigh={isRankingHigh?isRankingHigh:false}
                isRankingLow={isRankingLow?isRankingLow:false}
                handle={handle}
                image={image}
                name={name}
                points={points}
              />
            );
          })}
        </ul>
       </div>
      </div>
    </div>
  );
}

export default LiveRanking;
