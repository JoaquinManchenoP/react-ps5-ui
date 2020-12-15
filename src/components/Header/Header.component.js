import React, { useContext } from "react";
import "./header.css";
import GameCard from "../games/GameCard.component";
import Grid from "@material-ui/core/Grid";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import transitions from "@material-ui/core/styles/transitions";
import { Context } from "./../../Store";

export default function Header() {
  const games = [
    {
      title: "cod",
      image:
        "https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-black-ops-cold-war-standard-pack-ps4-25aug20$en?$native$",
      poster:
        "https://bnetcmsus-a.akamaihd.net/cms/blog_header/mj/MJBPE77P0K3U1599681246441.jpg",
    },
    {
      title: "fifa21",
      image:
        "https://pbs.twimg.com/profile_images/1273816401816489985/Rd_Fg1ZK_400x400.jpg",
      poster: "https://wallpaperaccess.com/full/3669524.jpg",
    },
    {
      title: "ghost",
      image:
        "https://i1.wp.com/www.psx-sense.nl/wp-content/uploads/2020/07/Ghost-of-tsushima-logo.png?w=800&resize=800%2C&ssl=1",
      poster: "https://images5.alphacoders.com/105/thumb-1920-1056682.png",
    },
    {
      title: "God of war",
      image:
        "https://preview.redd.it/1zfle2b2nkn31.png?width=313&format=png&auto=webp&s=4cbd5b308000ec0c8ebb02bc30417570cc576665",
      poster: "https://www.destructoid.com/ul/496993-GW1.jpg",
    },
    {
      title: "valhalla",
      image:
        "https://external-preview.redd.it/Mf1p5E_K0VHvz428ogARhLaXCnbpDogey1WbYAKVEoQ.png?auto=webp&s=fedb4ae76fd5e8c42dde4c21b38b31d968e104da",
      poster:
        "https://images.pushsquare.com/7754a08b025f2/assassins-creed-valhalla-ps5-playstation-5-1.original.jpg",
    },
    {
      title: "psStore",
      image:
        "https://play-lh.googleusercontent.com/zi6QgTtIiAnGqQMizfoj2LnE85kzHyZlgTruSzJ7Zw_79NAmB3fhxuDegwxby7P0yw",
      poster: "https://images6.alphacoders.com/108/thumb-1920-1082646.png",
    },
    {
      title: "red dead",
      image:
        "https://pbs.twimg.com/profile_images/992056674193149954/vgCLAqbA_400x400.jpg",
      poster: "https://wallpaperaccess.com/full/677565.jpg",
    },
  ];

  return (
    <>
      <div className="header">
        <NavBar />

        <div className="cards">
          {games.map((game) => (
            <>
              <GameCard game={game} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
