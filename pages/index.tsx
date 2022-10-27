import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { Layout, withLayout } from "../layout/Layout";

// export default function Home():JSX.Element {
 function Home():JSX.Element {
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
    </>
  )
}

export default withLayout(Home);
