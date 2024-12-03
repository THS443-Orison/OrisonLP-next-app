"use client";

import Image from "next/image";
import orisonLogo from "@/assets/images/OrisonLogo.svg";
import handsImage from "@/assets/images/hands.svg";
import styles from "@/app/mobile.module.css";
import menuBtn from "@/assets/images/menuBtn.svg";
import VotingButton from "@/components/VotingButton";
import StepsSection from "@/components/StepsSection";

export default function MobileScrean() {
  return (
    <div className={styles.mobileContainer}>
      <section className={styles.firstView}>
        <div className={styles.handsImage}>
          <Image src={handsImage} alt="hands" />
        </div>
        <div className={styles.orisonLogo}>
          <Image src={orisonLogo} alt="orison_logo" />
        </div>
        <div className={styles.catchCopy}>
          <p>
            あなたの折り紙で、折りなす日本を
            <br />
            織りなしていく町づくり体験
            <br />
            その手で祈る新世界へ！
          </p>
        </div>
        <div className={styles.menuBtn}>
          <Image src={menuBtn} alt="menu" />
        </div>
        <VotingButton />
        <section className={styles.about}>
          <h2>ORISONとは</h2>
          <p>
            Orisonは、折り紙で織りなす日本の町づくり体験です。 Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Velit quae ab nam nostrum
            cum! Sapiente ad inventore pariatur in similique!
          </p>
          <div className={styles.aboutImage}>
            <img src="" alt="aboutImage" />
          </div>
        </section>
        <section className={styles.experience}>
          <h2>
            折り紙で織りなす
            <br />
            未来都市
          </h2>
          <p>未来都市『ORISON』を体験してみよう</p>
          <div className={styles.experienceMovie}>
            {/* <video src="" autoplay muted loop></video> */}
            <div className={styles.aboutImage}>
              <img src="" alt="aboutImage" />
            </div>
          </div>
        </section>
        <StepsSection />
        <div className={styles.wtfContent}>
          <img src="" alt="wtf" />
        </div>
        <section className={styles.aboutFuture}>
          <h2>50年後の未来</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            non omnis accusantium inventore quibusdam dignissimos, debitis saepe
            atque quisquam, repellendus repudiandae dolores ex provident
            possimus accusamus magnam. Consequuntur ex consectetur qui? Dolor
            ipsa fugit porro veniam officiis ea quae accusamus.
          </p>
          <div className={styles.futureImage}>
            <img src="" alt="futureImage" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            perferendis doloremque eius similique perspiciatis odio voluptate
            eaque voluptatibus omnis dolorem?
          </p>
          <div className={styles.futureImage}>
            <img src="" alt="futureImage" />
          </div>
        </section>
        <VotingButton />
        <div className={styles.footerContent}>
          <div className={styles.footerInner}>
            <Image src={orisonLogo} alt="orison_logo" />
            <small>©THS443-ORISON</small>
          </div>
        </div>
      </section>
    </div>
  )
}
