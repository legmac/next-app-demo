import styles from './Menu.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '../../helpers/helpers'

export const Menu = ():JSX.Element => {
const {menu, setMenu, firstCategory: firstCategory} = useContext(AppContext)
const router = useRouter()

const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m=>{
        if(m._id.secondCategory == secondCategory){
            m.isOpen = !m.isOpen;
        }
        return m;
    }))
}

const buildFirstLevel =()=>{
    return <>
        {firstLevelMenu.map(m => (
            <div key={m.route}>
                <Link href={`/${m.route}`} legacyBehavior>
                    <a>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id == firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </a>
                </Link>
                {m.id == firstCategory && buildSecondLevel(m)}
            </div>
        ))}
    </>
}
const buildSecondLevel =(menuItem: FirstLevelMenuItem)=>{
    return (
        <div className={styles.secondBlock}>
            {menu.map(m => {
                if(m.pages.map(p=> p.alias).includes(router.asPath.split('/')[2])){
                    m.isOpen = true
                }
                return (
                <div key={m._id.secondCategory}>
                    <div className={styles.secondLevel} onClick={()=> openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                    <div className={cn(styles.secondLevelBlock, {
                        [styles.secondLevelBlockOpen]: m.isOpen
                    })}>
                        {buildThirdLevel(m.pages, menuItem.route)}
                    </div>
                </div>
         )})}
        </div>
    )
}
const buildThirdLevel = (page: PageItem[], route: string)=>{
    return (
        page.map(p=> (
            <Link href={`/${route}/${p.alias}`} legacyBehavior key={p._id}>
            <a className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
            })}>
                {p.category}
            </a>
            </Link>
        ))
    )
}

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )

}

// useEffect(()=>{
//     setMenu && setMenu([]);
// })