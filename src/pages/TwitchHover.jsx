import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

function refill(content) {
    let text = content.innerHTML.split(" ")
    content.innerHTML = ""
    text.map((word, index) => createSpan(content, word, index))
}

function createSpan(content, word, index) {
    let span = document.createElement("span")
    span.innerHTML = `${word} `;
    span.classList.add("twitch-word")
    span.style.display = "inline-block"
    span.style.margin = "0vmin 0.3vmin"
    span.style.position = "relative";
    span.style.transition = "none"
    span.style.setProperty("transition-delay", `${index * 40}ms`, "important")
    span.style.transform = "translateY(100%)"
    span.style.opacity = "0"
    content.appendChild(span)
}

const TwitchHover = () => {

    const content = useRef(null)

    useEffect(() => {
        if (content.current) {
            refill(content.current)
        }
    }, [])

    return (
        <div className='twitch-card aspect-[5/8] w-[42vmin] relative cursor-pointer border-[0.5vmin] border-sky-600/80
        before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[length:300%_300%] before:bg-[0_0]
        hover:before:bg-[100%_100%] before:transition-all group before:duration-[350ms] before:z-1 hover:before:scale-x-[1.08] hover:before:scale-y-[1.03]'>
            <div className='twitch-card-content w-full h-full transition-all duration-[350ms] group-hover:bg-[-10%_0%]
             relative z-2 p-[2.5vmin] group-hover:p-[3.5vmin]'>
                <h3 className='text-left twith-title text-zinc-800 transition-colors duration-[350ms] group-hover:text-white font-normal m-0 text-[4.5vmin]'>
                    A Twitch Card
                </h3>
                <h4 ref={ content } className='twitch-subtitle text-left text-zinc-800 transition-colors duration-[350ms] group-hover:text-white font-normal m-0 text-[2.3vmin] mt-[1.2vmin] '>
                    twitch is a streaming platform for gamers, but it's also a word for a sudden, spasmodic jerk.
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="card absolute bottom-0 left-0 m-10 opacity-50 group-hover:opacity-100 group-hover:m-8 
                fill-black transition-all w-[5vmin] h-[5vmin] group-hover:h-[8vmin] group-hover:w-[8vmin] group-hover:fill-violet-700 duration-[350ms] " viewBox="0 0 16 16">
                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0H3.857zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142v6.286z" />
                    <path d="M11.857 3.143h-1.143V6.57h1.143V3.143zm-3.143 0H7.571V6.57h1.143V3.143z" />
                </svg>
                <span className='absolute bottom-0 left-0 translate-y-10 font-bold subpixel-antialiased tracking-tight invisible text-pink-300 text-[3.5vmin] m-32 mb-16 opacity-50
                group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-violet-700
                transition-all duration-[350ms] active:delay-300'>
                    Twitch
                </span>

            </div>
        </div>
    );
}

TwitchHover.propTypes = propTypes;
TwitchHover.defaultProps = defaultProps;
// #endregion

export default TwitchHover;