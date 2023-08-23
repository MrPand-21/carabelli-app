import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CrLine from '../utilities/custom/style/CrLine';
import CrText from '../utilities/custom/style/CrText';

const propTypes = {};

const defaultProps = {};

function randomInt() {
    let min = Math.floor(Math.random() * (101) + -100)
    return Math.floor(Math.random() * ((Math.floor(Math.random() * (101))) - min + 1) + min)
}

function refill(content) {
    let text = content.innerHTML.split("")
    content.innerHTML = ""
    text.map((word, index) => createSpan(content, word, index))
}

function createSpan(content, word, index) {
    let span = document.createElement("span")
    span.innerHTML = `${word}`;
    span.classList.add("!translate-x-[var(--cr-x)]", "transition-transform", "!translate-y-[var(--cr-y)]", "!rotate-[var(--cr-rotate)]")
    span.style.color = "inherit"
    span.style.background = "inherit"
    span.style.display = "inline-block"
    span.style.transitionDuration = "700ms"
    content.appendChild(span)
}

const Expulsive = () => {

    let fancyClass = "fancy hover:!opacity-100 "
        + "hover:cursor-pointer hover:bg-gradient-to-r hover:from-emerald-400 hover:via-cyan-400 hover:to-sky-400 hover:bg-clip-text hover:text-transparent"
        + " from-25% via-60% to-100%"
    const text = useRef(null)

    useEffect(() => {
        for (const fancyText of document.getElementsByClassName("fancy")) {
            refill(fancyText)
        }
    }, [document.getElementsByClassName("fancy")])

    function onMouseEnter(e) {
        if (text.current) {
            text.current.dataset.isHover = "true"
            for (const span of e.target.children) {
                span.style.setProperty("--cr-x", `${Math.abs(randomInt() * 0.25)}%`)
                span.style.setProperty("--cr-y", `${randomInt() * 1.45}%`)
                span.style.setProperty("--cr-rotate", `${randomInt() * 0.5}deg`)
            }
        }
    }

    function onMouseLeave(e) {
        if (text.current) {
            text.current.dataset.isHover = "false"
            for (const span of e.target.children) {
                span.style.setProperty("--cr-x", `0`)
                span.style.setProperty("--cr-y", `0`)
                span.style.setProperty("--cr-rotate", `0`)
            }
        }
    }

    return (
        <div ref={ text } data-is-hover="false" className='group text flex flex-col w-1/2 h-fit relative
        text-slate-700 font-mono text-5xl font-semibold'>
            <CrLine>
                <CrText>Just</CrText>
                <CrText onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } className={ fancyClass }>decorating</CrText>
            </CrLine>
            <CrLine>
                <CrText>this</CrText>
                <CrText onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } className={ fancyClass }>site</CrText>
                <CrText>a</CrText>
                <CrText>bit</CrText>
            </CrLine>
            <CrLine>
                <CrText>good</CrText>
                <CrText>work</CrText>
                <CrText>I</CrText>

            </CrLine>
            <CrLine>
                <CrText onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } className={ fancyClass }>suppose,</CrText>
                <CrText>right?</CrText>
            </CrLine>
        </div>
    );
}

Expulsive.propTypes = propTypes;
Expulsive.defaultProps = defaultProps;
// #endregion

export default Expulsive;