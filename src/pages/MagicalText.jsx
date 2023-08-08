import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SparklesIcon } from '@heroicons/react/20/solid';


const propTypes = {};

const defaultProps = {};

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animate = (star) => {
    if (window.location.href.includes('magic')) {
        star.style.setProperty("--star-left", `${rand(-10, 100)}%`)
        star.style.setProperty("--star-top", `${rand(-40, 80)}%`)

        star.style.animation = "none";
        star.style.animation = "";
    }


}

const MagicalText = () => {

    let index = 0, interval = 2400;
    const first = useRef(null)
    const middle = useRef(null)
    const last = useRef(null)
    const [svgs, setSvgs] = useState([first, middle, last])

    useEffect(() => {
        let intervalIds = [];
        if (first.current && middle.current && last.current) {
            for (const svg of svgs) {
                setTimeout(() => {

                    animate(svg.current)

                    let intervalId = setInterval(() => animate(svg.current), 1800);
                    intervalIds.push(intervalId)
                }, index++ * (interval / 3));
            }
        }
        return () => {
            intervalIds.forEach(intervalId => clearInterval(intervalId))
        }
    }, [svgs])

    return (
        <div className='screen h-[70vh] grid place-items-center'>
            <h1 className='magic-place text-black font-[Rubik, san-serif] font-normal m-0 p-5 text-center'>


                Ah, Here it is...<span className='magic inline-block relative'>

                    <div ref={ first } className='magical-sparkie-icon left-[var(--star-left)] top-[var(--star-top)] absolute' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={ "clamp(30px , 2.2vw, 50px)" } className="sparky-svg block opacity-70 fill-violet-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>

                    </div>
                    <div ref={ middle } className='magical-sparkie-icon absolute left-[var(--star-left)] top-[var(--star-top)]' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={ "clamp(30px , 2.2vw, 50px)" } className="sparky-svg block opacity-70 fill-violet-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div ref={ last } className='magical-sparkie-icon absolute left-[var(--star-left)] top-[var(--star-top)]' >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={ "clamp(30px , 2.2vw, 50px)" } className="sparky-svg block opacity-70 fill-violet-400">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <span className='magical-text '>
                        The Magical Text</span>
                </span> wauw wauw wauw isn't it cool wauw wauw wauw isn't it incredeble
            </h1>
        </div>

    );
}

MagicalText.propTypes = propTypes;
MagicalText.defaultProps = defaultProps;

export default MagicalText;