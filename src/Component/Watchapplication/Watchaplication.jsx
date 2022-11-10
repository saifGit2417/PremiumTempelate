import React from 'react'
import { Button } from 'react-bootstrap'
import style from './Watchaplication.module.css'

function Watchapllication() {
    return (
        <>
        <header className={style.header}><h1>LET'S BUILD SOMETHING GREAT</h1></header>
            <div className={style.maincontainer}>
                <div className={style.watchimage}>

                </div>
                <div className={style.text}>
                    <p className={style.text1}>FEATURED WORK</p>
                    <h1 className={style.head1}>WATCH APPLICATION</h1>
                    <p className={style.text1}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p className={style.text1}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <div className={style.btncontainer}>
                        <Button className={style.button}>Read Full Case Study</Button>
                        <Button className={style.button1}>View All Portfolio</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watchapllication