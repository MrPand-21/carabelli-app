import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PhotoIcon } from "@heroicons/react/24/solid"

const propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string
};

const defaultProps = {
    wand: {},
    id: "tile",
    className: "",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.673sHS_M9CMoEnPjJdaWVQHaFl%26pid%3DApi&f=1&ipt=e46b2ee8e05f4bf98932fd4ba507af0aad3d6dae04323e2ecb6dfddf31456a0a&ipo=images"

};

const CrFancyTile = (props) => {

    const { wand, id, className, src } = props

    function handleTile(event) {
        if (wand) {

            let wandDimensions = wand.current.getBoundingClientRect()
            const image = document.getElementById(id);

            const dimensions = image.getBoundingClientRect()
            const relativeLeft = wandDimensions.x - dimensions.left

            const opacity = relativeLeft / image.width
            const blur = (1 - opacity);
            image.style.opacity = opacity.toString();

            image.style.filter = `blur(${blur.toString()}px)`;
        }


    }

    useEffect(() => {
        window.addEventListener("mousemove", handleTile)
        return () => {
            window.removeEventListener("mousemove", handleTile)
        }
    }, [])


    return (
        <div className={ 'tile aspect-square bg-slate-600 border-slate-500 border-[4px] rounded-[2rem] z-0 relative h-60 ' + className }>
            <PhotoIcon className='text-slate-500 z-1 h-[8.5rem] absolute left-1/2 top-1/2
             text-center self-center translate-x-[-50%] translate-y-[-50%]'></PhotoIcon>
            <img id={ id } className='z-2 absolute fill-slate-500 inset-0 w-full h-full object-cover
            border-slate-500 border-[4px] rounded-[2rem] blur-0 opacity-0'
                src={ src } />

        </div>
    );
}

CrFancyTile.propTypes = propTypes;
CrFancyTile.defaultProps = defaultProps;
// #endregion

export default CrFancyTile;