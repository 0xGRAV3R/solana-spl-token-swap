import { FC } from "react"
import styles from "../styles/Home.module.css"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import Image from "next/image"

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image
                alt="Solana logo"
                src="/solanaLogo.png"
                height={20}
                width={150}
            />
            <span
            style={{ fontSize: '32px' }}
            >Token Swap</span>
            <WalletMultiButton />
        </div>
    )
}
