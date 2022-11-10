import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter, FaXbox } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footercontainer}>
            <div className={style.about}>
                <h3>About Us</h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <Button className={style.button}>I am Button</Button>
            </div>
            <div className={style.services}>
                <h3>Services</h3>
                <ul>
                    <li className={style.links}>
                        <Link className={style.links}>Interface Design</Link>
                    </li>
                    <li className={style.links}>
                        <Link className={style.links}>User Experience</Link>
                    </li>
                    <li className={style.links}>
                        <Link className={style.links}>Web & App Development</Link>
                    </li>
                    <li className={style.links}>
                        <Link className={style.links}>Product Strategy</Link>
                    </li>
                </ul>
            </div>
            <div className={style.connect}>
                <h3>Connect with us</h3>
                <p >
                    <FaInstagram className={style.icons}/>
                    <FaFacebook className={style.icons}/>
                    <FaTwitter className={style.icons}/>
                    <FaXbox className={style.icons}/>
                </p>
            </div>
        </div>
    )
}

export default Footer