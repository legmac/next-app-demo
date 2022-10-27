import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import {  withLayout } from "../layout/Layout";
import axios from 'axios'
import { MenuItem } from "../interfaces/menu.interface";

// export default function Home():JSX.Element {
 function Home({menu}:HomeProps):JSX.Element {
  const [rating, setRaiting] =  useState<number>(4);

  return (
    <>
      <Htag tag='h1'>"\counter\"</Htag>
      <Button appearance="primary" arrow="right">button</Button>
      <Button appearance="ghost"  arrow="down">button ghost</Button>

      <P size="s">Small.</P>
      <P size="m">Medium</P>
      <P size="l">large</P>
      <P>Default</P>

      <Tag size="s">Ghost.</Tag>
      <Tag size="m" color="red">Red.</Tag>
      <Tag size="s" color="green">Green.</Tag>
      <Tag color="primary">Green.</Tag>

      <Rating rating={rating} iseditable setRating={setRaiting}></Rating>

      <ul>
        {menu.map(m=>(<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async() => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[],
  firstCategory: number
}