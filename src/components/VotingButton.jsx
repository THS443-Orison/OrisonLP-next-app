"use client"
import React, { useEffect, useState } from "react";
import styles from "@/app/mobile.module.css";
const RainbowText = ({ children }) => {
  const colors = [
    "#ffffff", // 白
    "#ffed71", // 薄いオレンジ
    "#ff0000", // 赤
    "#b0ef00", // 黄緑
    "#3e9000", // 深緑
    "#00ffff", // シアン
    "#b3ef00", // 鮮やかな黄緑
    "#ff005f", // ピンク系の赤
    "#ac0016", // 濃い赤
    "#000000", // 黒
  ];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 500); // 500ミリ秒ごとに色を変更

    return () => clearInterval(interval); // コンポーネントのアンマウント時にクリーンアップ
  }, []);

  return (
    <p style={{ color: colors[colorIndex] }}>
      {children}
    </p>
  );
};

const VotingButton = () => {
  return (
    <div className={styles.votingBtn}>
      <RainbowText>\ \ 投票おねがいします / /</RainbowText>
      <button>THS443に投票する！</button>
    </div>
  );
};

export default VotingButton;
