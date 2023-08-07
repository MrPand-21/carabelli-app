import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import CrHoverCard from '../utilities/custom/style/CrHoverCard';

const propTypes = {};

const defaultProps = {};

const HoverCards = () => {
    const cards = useRef(null)

    function handleOnMouseMove(event) {
        const cardsList = cards.current.children

        for (const card of cardsList) {

            const dimensions = card.getBoundingClientRect(),
                ax = event.clientX - dimensions.left,
                ay = event.clientY - dimensions.top

            card.style.setProperty("--mouse-x", `${ax}px`)
            card.style.setProperty("--mouse-y", `${ay}px`)
        }

    };

    useEffect(() => {

        if (cards.current) {
            cards.current.addEventListener("mousemove", handleOnMouseMove);
        }

    }, [])



    useEffect(() => {
        const bgName = "bg-neutral-900"
        document.body.classList.add([bgName])
        return () => {
            document.body.classList.remove([bgName])
        }
    }, [])



    return (
        <div ref={ cards } className='cards flex flex-wrap relative w-[calc(100% -20px)] gap-2 group'>
            <CrHoverCard >
                <p className="text-6xl text-blue-400 text-center align-middle h-full w-full absolute top-[0] left-0 p-10">
                    Let Me Be Me
                </p>
            </CrHoverCard>
            <CrHoverCard><img className='object-cover w-full h-full rounded-xl blur-[.2px] hover:blur-[0px]'
                src={ "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.673sHS_M9CMoEnPjJdaWVQHaFl%26pid%3DApi&f=1&ipt=e46b2ee8e05f4bf98932fd4ba507af0aad3d6dae04323e2ecb6dfddf31456a0a&ipo=images" } /></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
            <CrHoverCard></CrHoverCard>
        </div>
    );
}

HoverCards.propTypes = propTypes;
HoverCards.defaultProps = defaultProps;

export default HoverCards;
