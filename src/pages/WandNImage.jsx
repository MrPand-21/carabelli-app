import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "../utilities/css/CarabelliWand.css"
import CrFancyTile from '../utilities/custom/style/CrFancyTile';

const propTypes = {};

const defaultProps = {};

const WandNImage = () => {

    const wand = useRef(null);

    const handleWand = (event) => {

        const wand = document.getElementById('wand')
        var ax = event.pageX
        var ay = event.pageY
        var mouseRange = ax / window.innerWidth

        wand.animate({
            left: `calc(${(window.innerWidth * -0.15) + ax * 1.3}px - 50%)`,
            top: `calc(${(window.innerHeight * 0.2) + ay * 0.4}px)`,
            rotate: `${-10 + (mouseRange * 20)}deg`
        }, { duration: 400, fill: "forwards" })

    }

    useEffect(() => {
        window.addEventListener("mousemove", handleWand)
        return () => {
            window.removeEventListener("mousemove", handleWand);

        }
    }, [])


    return (
        <div>
            <div className='flex flex-row relative z-0 translate-y-[50%]'>
                <CrFancyTile className="rotate-[-14deg] z-50 translate-x-[7%]" wand={ wand } id="tile-first" />
                <CrFancyTile className="rotate-5 z-40" wand={ wand } id="tile-seconf"
                    src={ "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.T3Mza6nOBqyq7otYuoHlBQAAAA%26pid%3DApi&f=1&ipt=c48495b290a3042beec470d26f60e5aa2092d2a7dcfcbb39acc900f97e273b9f&ipo=images" }
                />
                <CrFancyTile className="rotate-12 z-20 translate-x-[-10%]" wand={ wand } id="tile-third"
                    src={ "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fBe1gguUHhEyZuradl-J6QHaEX%26pid%3DApi&f=1&ipt=08c213ca92986a6b5ffc305cb5ca867883821c5460207a94fb5c2885eb9d81c2&ipo=images" }
                />
            </div>
            <div id="wand" ref={ wand } className={ `z-100 aspect-[1/10] bg-gradient-to-r from-[#373636] from-10% via-45% via-black to-90% to-[#373636] rounded-[2vmin] overflow-hidden
         shadow-lg shadow-black/80 absolute left-[50%] top-[5%] translate-y-[-35%] translate-x-[-50%] z-100 h-[30rem]` }
            >

                <div className='h-[20%] bg-gradient-to-r from-[#e6e5e5e7] from-10% via-45% via-[#e6e5e5] to-90% to-[#e6e5e5e7]'>
                </div>
            </div>
        </div>


    );
}

WandNImage.propTypes = propTypes;
WandNImage.defaultProps = defaultProps;

export default WandNImage;