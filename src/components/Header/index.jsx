import Image from 'next/image';
import styles from './styles.module.scss';
export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Image src="/logo.svg" alt="Steam logo" width={122} height={36.5} />
          <div className="div">
            <ul>
              <li>Loja</li>
              <li>Comunidade</li>
              <li>Sobre</li>
              <li>Suporte</li>
            </ul>
          </div>
          <div className={styles.group}>
            <Image src="/lupa.svg" alt="lupa" width={30} height={30} />
            <button className={styles.session}>Iniciar sessão</button>
            <button className={styles.install}>Instale o Steam</button>
          </div>
        </div>
      </div>
    </>
  );
}
