import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const handleOnClick = (event) => {
    //anime.js
}

const createTile = index => {
    const tile = document.createElement("div")
    tile.classList.add("tile", "outline-1", "outline", "outline-black")
    tile.onclick = e => handleOnClick(e)
    return tile;
}

const createTiles = (quantity, wrapper) => {
    Array.from(Array(quantity)).map((tile, index) => wrapper.appendChild(createTile(index)))
}

const StaggeredGrid = () => {

    let columns = Math.floor(document.body.clientWidth / 50),
        rows = Math.floor(document.body.clientHeight / 50);

    const tiles = useRef(null)

    const handleOnResize = () => {
        let wrapper = tiles.current
        if (wrapper) {
            wrapper.innerHTML = ""
            columns = Math.floor(document.body.clientWidth / 50)
            rows = Math.floor(document.body.clientHeight / 50);

            wrapper.style.setProperty("--grid-columns", columns)
            wrapper.style.setProperty("--grid-rows", rows)

            createTiles(columns * rows, wrapper)
        }
    }

    useEffect(() => {
        if (tiles.current) {
            createTiles(columns * rows, tiles.current)
        }
    }, [tiles])

    useEffect(() => {

        window.addEventListener("resize", handleOnResize());
        return () => {
            window.removeEventListener("resize", handleOnResize());
        };
    }, [])

    return (
        <div ref={ tiles } className='tiles h-[80vh] aspect-[1/1] grid grid-cols-[repeat(var(--grid-columns),1fr)] grid-rows-[repeat(var(--grid-rows),1fr)]'>

        </div>
    );
}

StaggeredGrid.propTypes = propTypes;
StaggeredGrid.defaultProps = defaultProps;
// #endregion

export default StaggeredGrid;