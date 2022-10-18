import Image from "next/image";
import { IPlayer } from "../../interface";

const PlayerListItem = (props: IPlayer) => {
  return (
    <li className="live-ranking-list-item">
      <div>
        {props.isRankingHigh && (
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.22933 1.00447C4.61405 0.338111 5.57586 0.338111 5.96058 1.00447L9.63947 7.37649C10.0242 8.04285 9.54329 8.87579 8.77385 8.87579H1.41606C0.646623 8.87579 0.165722 8.04285 0.550442 7.37649L4.22933 1.00447Z"
              fill="#4ECB71"
            />
          </svg>
        )}
        {props.isRankingLow && (
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.22933 8.37603C4.61405 9.04238 5.57586 9.04238 5.96058 8.37603L9.63947 2.004C10.0242 1.33764 9.54329 0.5047 8.77385 0.5047H1.41606C0.646623 0.5047 0.165722 1.33764 0.550442 2.004L4.22933 8.37603Z"
              fill="#FD0202"
            />
          </svg>
        )}
      </div>
      <span className="id">{props.id}</span>
      <div className="list-card">
        <div className="player-details">
          <Image
            src={`/images/players/${props.image}`}
            width={59}
            height={59}
            alt={props.name}
          />
          <div className="meta">
            <h4>{props.name}</h4>
            <span>@{props.handle}</span>
          </div>
        </div>
        <span className="points">
          {props.points} <span>points</span>
        </span>
      </div>
    </li>
  );
};

export default PlayerListItem;
