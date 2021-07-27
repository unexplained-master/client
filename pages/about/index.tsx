import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ImageHeader from "../../components/ImageHeader";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";

interface OwnProps {}

type Props = OwnProps;

const index: FunctionComponent<Props> = (props) => {

  return (<Page>
    <Navigation transparent/>

    <ImageHeader url="https://theunexplained.academy/content/images/2019/07/IMG_7289-1.jpg">
      <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
        <span className="block">BE</span>
        <span className="relative inline-block mt-3 text-transparent text-white">EXPLAINED<span className="text-red-700">.</span></span>
      </h1>
    </ImageHeader>
    <Container>
      <Paragraph>
        Thanks for having a look at this website. Refreshingly after being on a steep upward kink trajectory I've become pretty comfortable and confident in what I like and love.
      </Paragraph>

      <Paragraph>
        Most people come to me either looking for straightforward sexual fun or a complex, dark yet delicious dynamic usually involving me taking the dominant role.
      </Paragraph>

      <Paragraph>
        I've seemed to have habit of making fantasies reality...not because I believe I'm anything magical. Far from it...when I say I will make something happen then you know it will materialise.
      </Paragraph>

      <Paragraph>
        I'm dependable and trustworthy...and I pay attention to the details most people might not consider. I've taken several partners of no previous kink experience on some beautiful adventures often testing boundaries that were never foreseen and barely imagined. It's only when such boundaries are reached can one push them back. I often find that my main pleasure is gained from ensuring the satisfaction of my counterpart's.
      </Paragraph>

      <Paragraph>
        Every so often I encounter a new situation or person that stimulates me sexually in a way I could not envisage and this is why I do not describe myself as a rookie  or an expert. I realise this world of kink is very relative and I love receiving inspiration as much as I love giving it.
      </Paragraph>

      <Paragraph>
        Hence I'm a little reticent in saying what I like as I'm aware there are potential things that I love and I just merely not experienced it as of yet! As a simple taster though I enjoy roughplay, restraints (think rope/blindfolds/cuffs/collars), moresomes, risky public sex, events, photography, and simply the spontaneity of lustful sex. Although my inner psyche emanates naturally more dominant tendencies, I still enjoy the frisson and excitement of vanilla situations.
      </Paragraph>

      <Paragraph>
        In the past I was quite renowned for hosting sex events amongst a beautiful and sexually charged crowd. I have a 'guest list' of attractive and intelligent people whom I can trust upon to be reliable, have a good time, whilst also being discrete. It is only through sheer bloody-mindedness that these events ever occur...
      </Paragraph>

      <Paragraph>
        In summary I enjoy taking people through journeys where fantasy meets reality...and I'm always looking for new adventures. If you can join me on some of them...then feel free to leave a message.
      </Paragraph>
    </Container>
    <Footer />
  </Page>);
};

export default index;
