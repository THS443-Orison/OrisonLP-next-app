import React from "react";
import styles from "@/app/mobile.module.css";
const stepsData = [
  {
    title: "好きな折り紙を折る",
    description: "好きな色の折り紙で家や花を折ろう。",
    titleIconSrc: "/icon1.png", // Next.jsの静的アセットパス
    stepImageSrc: "/step1.png",
  },
  {
    title: "アプリで読み込む",
    description: "作った折り紙を読み込もう",
    titleIconSrc: "/icon2.png",
    stepImageSrc: "/step2.png",
  },
  {
    title: "町に配置する",
    description: "好きな位置に置いてみよう",
    titleIconSrc: "/icon3.png",
    stepImageSrc: "/step3.png",
  },
];

const StepsSection = () => {
  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <section key={index} className={styles.stepsOrison}>
          <div className={styles.titleArea}>
            <div className={styles.titleIcon}>
              <img src={step.titleIconSrc} alt="titleIcon" />
            </div>
            <h2>{step.title}</h2>
          </div>
          <p>{step.description}</p>
          <div className={styles.stepImages}>
            <img src={step.stepImageSrc} alt="stepImage" />
          </div>
        </section>
      ))}
    </div>
  );
};

export default StepsSection;
