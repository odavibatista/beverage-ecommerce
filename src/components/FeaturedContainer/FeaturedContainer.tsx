import styles from "./styles.module.scss";
import { onSale } from "../../Classes/Products/List/OnSale.ts";
import { FeaturedProductCard } from "../FeaturedProductCard/FeaturedProductCard.tsx";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export function FeaturedContainer ()    {
    
    return  (
        <>
            <section className={styles.section}>
                <h1 className={styles.title}>Novidades na loja!</h1>
                <div className={styles.featuredSplide}>
                    <Splide
                        options={{
                            arrows: true,
                            type: "loop",
                            perPage: 3,
                            gap: "153px",
                            height: "460px",

                            breakpoints:    {
                                1200:   {
                                    gap: "100px"
                                },
                                1050:   {
                                    perPage: 2,
                                    gap: "50px"
                                },
                                695:    {
                                    perPage: 1,
                                    gap: 0
                                }
                            }
                        }}
                        >
                            <SplideSlide className={styles.thriceSlide}>
                                <FeaturedProductCard product={onSale[15]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[1]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[3]}/>
                            </SplideSlide>
                            <SplideSlide className={styles.thriceSlide}>
                                <FeaturedProductCard product={onSale[9]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[8]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[12]}/>
                            </SplideSlide>
                            <SplideSlide className={styles.thriceSlide}>
                                <FeaturedProductCard product={onSale[11]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[14]}/>
                            </SplideSlide>
                            <SplideSlide style={{textAlign: "center"}}>
                                <FeaturedProductCard product={onSale[7]}/>
                            </SplideSlide>
                    </Splide>
                </div>
            </section>
        </>
    )
}