import React from 'react'
import style from './Team.module.css'

function Team() {
    return (
        <div className={style.maincontainer}>
            <div className={style.text}>
                <p className={style.text1}>ABOUT US</p>
                <h1 className={style.head1}>Meet The Team</h1>
                <p className={style.text1}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p className={style.text1}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
            </div>
            <div className={style.teamimage}></div>
        </div>
    )
}

export default Team