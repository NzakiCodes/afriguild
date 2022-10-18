import React, { useState } from "react";
import { IPlayer } from "../../interface";
import { playerList } from "../../topPlayerList";
import PlayerListItem from "../PlayerListItem";

function LiveRanking() {
  const [rankingList, setRankingList] = useState<IPlayer[]>(playerList);
  const [filterButtonId, setFilterButtonId] = useState<string>("week");

  const filterButtonList: {
    id: string;
    text: string;
    filterBy:number;
  }[] = [
    {
      id: "all",
      text: "All",
      filterBy:7
    },
    {
      id: "week",
      text: "This week",
      filterBy:5
    },
    {
      id: "connection",
      text: "My connections",
      filterBy:3
    },
  ];

  const filterRanking = (by: number) => {
    return setRankingList(playerList.slice(0, by));
  };
  return (
    <div className="live-ranking-container">
      <div className="live-ranking-heading">
        <h2>Live ranking</h2>
        <div className="ranking-filter-container">
          {filterButtonList.map(({ id, text, filterBy }) => (
            <LiveRankingButton
              key={id}
              onClick={() => {
                filterRanking(filterBy);
                setFilterButtonId(id);
              }}
              text={text}
              isSelected={id === filterButtonId}
            />
          ))}
        </div>
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
            {rankingList.map(
              (
                { name, image, handle, points, isRankingHigh, isRankingLow },
                i
              ) => {
                return (
                  <PlayerListItem
                    key={i}
                    id={i + 1}
                    isRankingHigh={isRankingHigh ? isRankingHigh : false}
                    isRankingLow={isRankingLow ? isRankingLow : false}
                    handle={handle}
                    image={image}
                    name={name}
                    points={points}
                  />
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
const LiveRankingButton = ({
  isSelected,
  text,
  onClick,
}: {
  isSelected: boolean;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`button ${isSelected ? "selected" : ""}`}
    >
      {text}
    </button>
  );
};

export default LiveRanking;
