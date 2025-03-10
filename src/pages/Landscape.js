import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from '../components/Header';
import Navigator from '../components/Navigator';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/Photography.css';

const photoContext = [
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571694/0_vp4bti.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571695/1_t7utyj.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571695/2_tf3g8i.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571694/3_yim83k.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571694/4_pmpgha.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571692/5_omoyks.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571694/6_ywx8h8.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571695/7_epmpyf.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571697/8_ri5uhh.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571697/9_kwrof0.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571698/10_deudjx.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571699/11_ofhegx.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571701/12_wskizv.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571700/13_foy8pd.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571700/14_kbsdgf.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571703/15_ygdv9f.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571700/16_rnedmh.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571702/17_szkbsx.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571704/18_ohsojt.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571707/19_nmzn5k.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571705/20_sxfoyz.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571707/21_n0ns5l.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571707/22_tqbzqp.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571705/23_koaokr.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571710/24_z2pg6n.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571707/25_feppmc.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571709/26_zsxwha.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571710/27_akuhkc.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571711/28_utpjrj.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571713/29_djs53k.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571711/30_d18nq8.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571713/31_nlkxal.jpg",
    "https://res.cloudinary.com/dpagnkhim/image/upload/v1741571713/32_mg5tlr.jpg",
]

const LandscapePage = () => {

    // Use require.context to dynamically import photos from the landscape folder
    // const photoContext = require.context('../assets/landscape', false, /\.(jpe?g|png)$/i);
    const photos = photoContext.map((key) => ({
        src: key,
        alt: key.split('/')[5].split('_')[0],
    }));

    // Sort the photos array based on the file names
    const sortedPhotos = photos.sort((a, b) => {
        const numA = parseInt(a.alt);
        const numB = parseInt(b.alt);
        return numA - numB;
    });

    return (
        <div>
            <Header fontColor="black"/>
            <div className="photography-header">
                <h1>Landscape</h1>
            </div>
            <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 1000: 2 }} style={{ margin: "5vw 10vw 5vw 10vw" }}>
                <Masonry gutter="5vw">
                {sortedPhotos.map((photo, index) => (
                    <LazyLoadImage
                        key={index}
                        alt={"landscape" + index}
                        src={photo.src}
                        placeholderSrc={photo.src}
                        effect="blur"
                        style={{ width: "100%", display: "block" }}
                    />
                ))}
                </Masonry>
            </ResponsiveMasonry>
            <Navigator links={["City", "Perspective"]} />
        </div>
    );
};

export default LandscapePage;