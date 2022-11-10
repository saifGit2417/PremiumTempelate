import React from 'react'
import Servicecard from './Servicecard';
import style from './Services.module.css'

function Services() {
    return (
        <div>
            <div className={style.maincontainer}>
                <div className={style.watchimage}></div>
                <div className={style.text}>
                    <p className={style.text1}>Our Services</p>
                    <h1 className={style.head1}>What We Do!</h1>
                    <div className={style.services}>
                        <Servicecard title={"Interface Design"} description={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia "} />
                        <Servicecard title={"User Experience"} description={" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
                    </div>
                    <div className={style.services}>
                        <Servicecard title={"Development"} description={"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia "} />
                        <Servicecard title={"Product Strategy"} description={" Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services