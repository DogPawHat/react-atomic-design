import Head from "next/head"
import Subtitle from "../components/atoms/subtitle/Subtitle"
import Block from "../components//molecules/block/Block"
import Feature from "../components/organisms/feature/Feature"
import Default, { Hero, Col1, Col2 } from "../components/templates/base/Base"

export default function Home() {
  return (
    <Default>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#FFFFFF" />
        <title>React Atomic Design</title>
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          media="all"
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Prompt:300,500"
          rel="stylesheet"
        />
      </Head>
      <Hero
        as={Feature}
        image="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
      >
        <Block title="Atom" button="Learn more">
          <p>
            An atom is the smallest constituent unit of ordinary matter that has the properties of a
            chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized
            atoms. Atoms are very small; typical sizes are around 100 picometers (a ten-billionth of
            a meter, in the short scale).
          </p>
        </Block>
      </Hero>

      <Col1>
        <Subtitle>Atoms in philosophy</Subtitle>
      </Col1>
      <Col2>
        <p>
          The idea that matter is made up of discrete units is a very old idea, appearing in many
          ancient cultures such as Greece and India. The word &quot;atom&quot; was coined by ancient
          Greek philosophers. However, these ideas were founded in philosophical and theological
          reasoning rather than evidence and experimentation. As a result, their views on what atoms
          look like and how they behave were incorrect. They also could not convince everybody, so
          atomism was but one of a number of competing theories on the nature of matter. It was not
          until the 19th century that the idea was embraced and refined by scientists, when the
          blossoming science of chemistry produced discoveries that only the concept of atoms could
          explain.
        </p>
      </Col2>
      <Col1>
        <Subtitle>First evidence-based theory</Subtitle>
      </Col1>
      <Col2>
        <p>
          In the early 1800s, John Dalton used the concept of atoms to explain why elements always
          react in ratios of small whole numbers (the law of multiple proportions). For instance,
          there are two types of tin oxide: one is 88.1% tin and 11.9% oxygen and the other is 78.7%
          tin and 21.3% oxygen (tin(II) oxide and tin dioxide respectively). This means that 100g of
          tin will combine either with 13.5g or 27g of oxygen. 13.5 and 27 form a ratio of 1:2, a
          ratio of small whole numbers. This common pattern in chemistry suggested to Dalton that
          elements react in whole number multiples of discrete units—in other words, atoms. In the
          case of tin oxides, one tin atom will combine with either one or two oxygen atoms.[1]
        </p>
      </Col2>
    </Default>
  )
}
