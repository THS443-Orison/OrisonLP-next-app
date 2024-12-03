"use client";
import MobileScrean from "@/screan/MobileScrean";
import styles from "@/app/container.module.css";
import Link from "next/link";
import Image from "next/image";
import orisonLogo from "@/assets/images/OrisonLogo.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.logo}>
          <Image src={orisonLogo} alt="orisonLogo" />
        </div>
      </div>
      {/* MobileScreanをスクロール可能にする */}
      <div className={styles.mobileScrean}>
        <MobileScrean />
      </div>
      <div className={styles.containerRight}>
        <div className={styles.navs}>
          <nav className={styles.navsItem}>
            <ul>
              <li>
                <Link href="#about" className={styles.noDecoration}>
                  -Orisonとは
                </Link>
              </li>
              <li>
                <Link href="#steps" className={styles.noDecoration}>
                  -折り紙で織りなす
                </Link>
              </li>
              <li>
                <Link href="#future" className={styles.noDecoration}>
                  -50年後の未来
                </Link>
              </li>
              <li className={styles.pageTop}>
                <span className={styles.pageTopText}>
                  <Link href="#pageTop" className={styles.noDecoration2}>
                    トップへ
                  </Link>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
