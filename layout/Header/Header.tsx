import { HeaderProps } from "./Header.props"
import styles from './Header.module.css'
import cn from 'classnames'
import Logo from '../logo.svg'
import { ButtonIcon } from "../../components"
import {motion} from 'framer-motion'
import {Sidebar} from '../Sidebar/Sidebar'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export const Header = ({className, ...props}: HeaderProps):JSX.Element => {
    const[isOpend, setIsOpend] = useState<boolean>(false)
    const router = useRouter();

    useEffect(()=>{setIsOpend(false)},[router])


    const variant = {
        opend:{
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed:{
            opacity: 0,
            x: '100%',
        }
    }
    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo/>
            <ButtonIcon appearance="white" icon="menu" onClick={()=>setIsOpend(true)}/>
            <motion.div
            className={styles.mobileMenu}
            variants={variant}
            initial={'closed'}
            animate={isOpend? 'opend' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon className={styles.menuClose} appearance="white" icon="close" onClick={()=>setIsOpend(false)}/>
            </motion.div>
        </header>
    )

}