import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { Advantages, Card, HhData, Htag, P, Product, Sort, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"
import { SortEnum } from "../../components/Sort/Sort.props"
import { useEffect, useReducer } from "react"
import { sortReducer } from "./sort.reducer"
import { useScrollY } from "../../hooks/useScrollY"

export const TopPageComponent = ({page, prodcts: products, firstCategory }: TopPageComponentProps):JSX.Element => {
  const [{products: sortedProducts, sort}, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating })
  const y = useScrollY();

  const setSort = (sort: SortEnum) => {
    dispathSort({type: sort});
  }

  useEffect(()=>{
    dispathSort({type: 'reset', initialState: products});
  },[products])

  return (
      <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color="gray" size="m">{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>

      <div>
        {/* {sortedProducts && sortedProducts.map(p=> (<div key={p._id}>{p.title}</div>))} */}
        {sortedProducts && sortedProducts.map(p=> (<Product layout key={p._id} prosuct={p}/>))}
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