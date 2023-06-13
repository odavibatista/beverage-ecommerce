import styles from "./styles.module.scss"

export function FirstContainer  ()  {
    return(
        <>
            <div id="first-container">
                <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="../src/images/site/carousel/slide-1.jpg" className="d-block w-100" alt="cocktailImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/site/carousel/slide-2.jpg" className="d-block w-100" alt="menuImage"/>
                        </div>
                        <div className="carousel-item">
                            <img src="../src/images/site/carousel/slide-3.jpg" className="d-block w-100" alt="newsletterAd"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden"></span>
                    </button>
                </div>
            </div>
            <div className={styles.splitter}>
            </div>
        </>
        

    )
}