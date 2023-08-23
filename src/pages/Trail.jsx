import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CrBigCard from "../utilities/custom/style/CrBigCard"

const propTypes = {};

const defaultProps = {};

const Trail = () => {

    const trailer = useRef(null)

    function handleOnMouseMove(e) {
        const interactable = e.target.closest(".interactable"),
            interacting = interactable !== null;

        if (window.location.href.includes("trail") && trailer.current) {

            if (interacting) {
                let type = e.target.attributes.type.value
                trailer.current.setAttribute("data-type", type)
            }
            else if (!interacting) {
                trailer.current.setAttribute("data-type", "")
            }

            const x = e.clientX - trailer.current.offsetWidth / 2,
                y = e.clientY - trailer.current.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? 6.5 : 1})`
            }

            trailer.current.animate(keyframes, {
                duration: 800,
                fill: "forwards"
            })
        }
    }

    useEffect(() => {
        if (trailer.current != null) {
            window.addEventListener("mousemove", handleOnMouseMove)
        }
        return () => {
            if (trailer.current != null) {
                window.removeEventListener("mousemove", handleOnMouseMove)
            }
        };
    }, [])
    return (
        <div>
            <div ref={ trailer } data-type="" className='group-hover/body:opacity-100 group/trailer trailer h-8 w-8 bg-slate-700 rounded-full fixed left-0 top-0 z-50 pointer-events-none opacity-0 transition-opacity duration-300'>
                <div >
                    <svg className='group-data-[type="link"]/trailer:opacity-100 transition-opacity duration-300 absolute opacity-0 left-1/2 top-1/2 fill-slate-200/50 -translate-x-1/2 -translate-y-1/2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                    </svg>
                </div>
                <div>
                    <svg className='group-data-[type="video"]/trailer:opacity-100 transition-opacity duration-300 absolute opacity-0 left-1/2 top-1/2 fill-slate-200/50 -translate-x-1/2 -translate-y-1/2' width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </div>

            </div>

            <div className='relative flex flex-row h-fit'>
                <CrBigCard type={ "link" } className={ "interactable basis-1/2 hover:opacity-100 hover:scale-105 opacity-90 transition-all" } />
                <CrBigCard type={ "video" } className={ "interactable basis-1/2 hover:opacity-100 hover:scale-105 opacity-90 transition-all" } src={ "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" }
                />
            </div>


        </div>

    );
}

Trail.propTypes = propTypes;
Trail.defaultProps = defaultProps;
// #endregion

export default Trail;