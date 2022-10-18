import Image from "next/image";
import { ITopPlayer } from "../../interface";

const TopPlayer = ({ name, image, handle, points }: ITopPlayer) => {
  return (
    <div className="top-player">
      <div className="avatar">
        <Image
          src={`/images/players/${image}`}
          width={80}
          height={80}
          alt={name}
        />
      </div>
      <div className="meta">
        <span className="handle">@{handle}</span>
        <div className="points-container">
          <Image src={"/images/star.png"} width={17} height={17} alt="star" />
          <span>{points}</span>
          <Image src={"/images/star.png"} width={17} height={17} alt="star" />
        </div>
      </div>
    </div>
  );
};

export default TopPlayer;
