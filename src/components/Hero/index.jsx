import Image from 'next/image';
import styles from './styles.module.scss';
export default function Hero() {
  return (
    <>
      <div className={styles.random}></div>
      <div className={styles.random2}></div>
      <div className={styles.bgWrap}>
        <Image
          alt="Mountains"
          src="/background.png"
          layout="fill"
          objectFit="cover"
          width={100}
          height={100}
          quality={100}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <Image
              src="/control.svg"
              alt="controll logo"
              width={50}
              height={33}
            />
            <h1>novidade na steam</h1>
          </div>

          <div className={styles.games}>
            <div className={styles.texto}>
              <h1>Lost Ark</h1>
              <p>
                Lost Ark continua a ultrapassar seus próprios limites em um
                ambicioso novo capítulo da série que definiu um gênero e que é
                aclamada pela crítica. Prepare-se para abraçar a escuridão!
              </p>
            </div>
            <div className={styles.two}>
              <div className={styles.tree}>
                <Image
                  src="/control.svg"
                  alt="controll logo"
                  width={50}
                  height={33}
                />
                <p>Estratégia</p>
              </div>
              <div className={styles.tree}>
                <Image
                  src="/control.svg"
                  alt="controll logo"
                  width={50}
                  height={33}
                />
                <p>Estratégia</p>
              </div>
              <div className={styles.tree}>
                <Image
                  src="/control.svg"
                  alt="controll logo"
                  width={50}
                  height={33}
                />
                <p>Estratégia</p>
              </div>
            </div>
            <div className={styles.button}>
              <button>Explorar novidade</button>
            </div>
            <div className={styles.slide}>
              <div className={styles.gamesSlide}>
                <Image src="/logoGame1.svg" alt="lupa" width={93} height={22} />
              </div>
              <div className={styles.gamesSlide}>
                <Image
                  src="/logoGame2.svg"
                  alt="lupa"
                  width={125}
                  height={31}
                />
              </div>
              <div className={styles.gamesSlide}>
                <Image src="/logoGame3.svg" alt="lupa" width={88} height={22} />
              </div>
              <div className={styles.gamesSlide}>
                <Image src="/logoGame4.svg" alt="lupa" width={88} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
