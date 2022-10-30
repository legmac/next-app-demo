import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { Advantages, Card, HhData, Htag, P, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"

export const TopPageComponent = ({page, prodcts, firstCategory }: TopPageComponentProps):JSX.Element => {
    return (
      <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {prodcts && <Tag color="gray" size="m">{prodcts.length}</Tag>}
        <span>Sortirovca</span>
      </div>

      <div>
        {prodcts && prodcts.map(p=> (<div key={p._id}>{p.title}</div>))}
      </div>

      <div className={styles.hhstytle}>
        <Htag tag="h2">Вакансии -  {page.category}</Htag>
        <Tag color="red" size="m">hh.ru</Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
      {page.advantages && page.advantages.length > 0 && <>
        <Htag tag='h2'>Приемущества</Htag>
        <Advantages advantages={page.advantages}/>
      </>
      }
      {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}

      </div>
    )

}