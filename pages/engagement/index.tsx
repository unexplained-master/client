import React, { FunctionComponent } from 'react';
import Page from "../../components/Page";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ImageHeader from "../../components/ImageHeader";
import Container from "../../components/Container";
import {getPage} from "lib/pages";
import {PostOrPage} from "@tryghost/content-api";
import Article from "components/Article";

export const getStaticProps = async () => {
    const page = await getPage({ slug: "be-engaged" })

    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: { ...page }
    }
};

interface OwnProps {}

type Props = OwnProps & PostOrPage;

const index: FunctionComponent<Props> = ({ html, feature_image }) => {

    return (<Page>
        <Navigation transparent/>

        <ImageHeader url={feature_image || "https://theunexplained.academy/content/images/2019/07/IMG_7289-1.jpg"}>
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
                <span className="block">BE</span>
                <span className="relative inline-block mt-3 text-transparent text-white">ENGAGED<span className="text-red-700">.</span></span>
            </h1>
        </ImageHeader>

        <Container>
            <div className="flex flex-col items-center">
                {html && <Article html={html}/>}
            </div>
        </Container>

        <Footer />
    </Page>);
};

export default index;
