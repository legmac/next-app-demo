import { useEffect, useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

export default function Home():JSX.Element {

  // const [counter, setCounter] = useState<number>(0);
  // useEffect(()=>{
  //   // console.log('Counter %s', 'counter');
  //   console.log("Counter " + counter)
  //   return function cleanup(){
  //     console.log("Unmount " + counter)
  //   }
  // } );

  // useEffect(()=>{
  //   console.log("Mounted")
  // }, [] );

  const [rating, setRaiting] =  useState<number>(4);

  return (
    <>
      <Htag tag='h1'>"\counter\"</Htag>
      <Button appearance="primary" arrow="right" onClick={()=> setCounter(x => x+1)}>button</Button>
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
