import { Button, Htag, P, Tag } from "../components";

export default function Home():JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
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

    </>
  )
}
