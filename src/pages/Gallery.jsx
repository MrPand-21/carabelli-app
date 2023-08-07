import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CrGalleryTile from '../utilities/custom/style/CrGalleryTile';

const propTypes = {};

const defaultProps = {};

const Gallery = () => {

    const gallery = useRef(null)
    const screen = useRef(null)

    function handleOnMouseMove(event) {
        if (gallery.current) {

            let dimensions = screen.current.getBoundingClientRect()
            const mouseX = event.clientX - dimensions.left,
                mouseY = event.clientY - dimensions.top

            const rx = mouseX / screen.current.offsetWidth,
                ry = mouseY / screen.current.offsetHeight

            const ax = gallery.current.offsetWidth * rx * -1,
                ay = gallery.current.offsetHeight * ry * -1

            gallery.current.animate({
                transform: `translate(${ax}px, ${ay}px)`
            }, {
                duration: 2400,
                fill: "forwards",
                easing: "ease"
            })
        }

    }

    useEffect(() => {
        if (gallery.current) {
            gallery.current.addEventListener("mousemove", handleOnMouseMove)
        }
        return () => {
            gallery.current.removeEventListener("mousemove", handleOnMouseMove)
        };
    }, [])
    return (
        <div ref={ screen } className='screen overflow-hidden  relative m-0 h-[80vh] w-full bg-black rounded-2xl'>
            <div ref={ gallery } className='gallery absolute w-[125vmax] aspect-square '>
                <CrGalleryTile className="tile w-[13%] h-[14%] bg-sky-400 left-[35%] top-[13%]"
                    src={ "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[12%] h-[12%] bg-neutral-400 left-[56%] top-[35%]"
                    src={ "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[32%] h-[18%] bg-yellow-300 left-[90%] top-[50%]"
                    src={ "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=70" }>
                </CrGalleryTile>
                <CrGalleryTile className="tile w-[15%] h-[13%] bg-teal-400 left-[7%] top-[70%]"
                    src={ "https://ae01.alicdn.com/kf/H85426ced395c4c6a8246fc70c7db3e468/Yaz-bask-Mini-tenis-etek-beyaz-pilili-etek-k-sa-kad-n-elastik-bel-Mini-etek.jpg_.webp" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[24%] h-[30%] bg-red-400 left-[90%] top-[6%]"
                    src={ "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[10%] h-[12%] bg-slate-400 left-[15%] top-[22%]"
                    src={ "https://images.unsplash.com/photo-1626847152035-cb3f14d8534b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2l0aCUyMGhvdCUyMHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[21%] h-[23%] bg-green-300 left-[34%] top-[54%]"
                    src={ "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29hc3QlMjBob3QlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
                <CrGalleryTile className="tile w-[22%] h-[33%] bg-sky-400 left-[66%] top-[77%]"
                    src={ "https://images.unsplash.com/photo-1524253734009-380c403e2d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvYXN0JTIwaG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" }>
                </CrGalleryTile>
                <CrGalleryTile className="tile w-[32%] h-[12%] bg-fuchsia-400 left-[2%] top-[3%]"
                    src={ "https://images.unsplash.com/photo-1551655510-555dc3be8633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JjeWNsZSUyMHdpdGglMjBob3QlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" }></CrGalleryTile>
            </div>
        </div>


    );
}

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;
// #endregion

export default Gallery;