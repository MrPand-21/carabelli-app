import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CrBigCard from '../utilities/custom/style/CrBigCard';
import CrSmallCard from '../utilities/custom/style/CrSmallCard';
import { HeartIcon, XMarkIcon } from "@heroicons/react/24/solid"

const propTypes = {};

const defaultProps = {};

function removeItemsIfExist(list, ...items) {
    let itemsToBeRemoved = []
    list.forEach((classItem) => {
        items.forEach(item => {
            if (classItem == item) {
                itemsToBeRemoved.push(classItem)
            }
        })
    })

    itemsToBeRemoved.forEach(element => {
        list.remove(element)
    });

    return itemsToBeRemoved
}

function addIfDontHave(list, ...items) {
    let itemsToBeAdded = []
    list.forEach((classItem) => {
        items.forEach(item => {
            if (classItem == item) {
                itemsToBeAdded.push(classItem)
            }
        })
    })

    items.forEach(element => {
        let add = true
        itemsToBeAdded.forEach(item => {
            if (item == element) {
                add = false
            }
        });
        if (add) {
            list.add(element)
        }
    });

    return itemsToBeAdded
}

const ProfileSearcher = () => {
    const [currentActive, setActive] = useState(0)
    const first = useRef(null)
    const middle = useRef(null)
    const third = useRef(null)
    const last = useRef(null)
    const way = [first, middle, third, last]

    async function handleOnHateClicked() {
        if (first.current && middle.current && third.current && last.current) {

            const pastActive = currentActive - 1 < 0 ? 3 : currentActive - 1
            const nextActive = currentActive + 1 > 3 ? 0 : currentActive + 1

            const past = way[pastActive]
            const current = way[currentActive]
            const next = way[nextActive]
            removeItemsIfExist(past.current.classList, "translate-x-[0]", "translate-x-[300px]", "-translate-x-[300px]", "translate-x-[600px]", "-left-[300px]", "-translate-x-[600px]", "left-[300px]")
            console.log(current.current.classList)

            removeItemsIfExist(current.current.classList, "scale-100")
            if (current.current.classList.contains("-translate-x-[300px]")) {
                removeItemsIfExist(current.current.classList, "-translate-x-[300px]")
                addIfDontHave(current.current.classList, "scale-0", "-translate-x-[600px]")
            } else if (current.current.classList.contains("translate-x-[300px]")) {
                removeItemsIfExist(current.current.classList, "translate-x-[300px]")
                addIfDontHave(current.current.classList, "scale-0", "translate-x-[0]")

            } else if (current.current.classList.contains("translate-x-[0]")) {
                removeItemsIfExist(current.current.classList, "translate-x-[300px]")
                addIfDontHave(current.current.classList, "scale-0", "-translate-x-[300]")

            } else
                removeItemsIfExist(current.current.classList, "translate-x-[300px]")
            addIfDontHave(current.current.classList, "scale-0", "-translate-x-[300px]")

            removeItemsIfExist(next.current.classList, "scale-0")
            addIfDontHave(next.current.classList, "left-[300px]", "scale-100", "-translate-x-[300px]")

            setActive(nextActive)
        }
    }

    function handleOnLoveClicked() {
        if (first.current && middle.current && last.current) {

            const pastActive = currentActive - 1 < 0 ? 3 : currentActive - 1
            const nextActive = currentActive + 1 > 3 ? 0 : currentActive + 1

            const past = way[pastActive]
            const current = way[currentActive]
            const next = way[nextActive]

            removeItemsIfExist(past.current.classList, "translate-x-[0]", "translate-x-[300px]", "-translate-x-[300px]", "translate-x-[600px]", "-left-[300px]", "-translate-x-[600px]", "left-[300px]")

            removeItemsIfExist(current.current.classList, "scale-100")
            if (current.current.classList.contains("translate-x-[300px]")) {
                removeItemsIfExist(current.current.classList, "translate-x-[300px]")
                addIfDontHave(current.current.classList, "scale-0", "translate-x-[600px]")
            } else if (current.current.classList.contains("-translate-x-[300px]")) {
                removeItemsIfExist(current.current.classList, "-translate-x-[300px]")
                addIfDontHave(current.current.classList, "scale-0", "translate-x-[0]")
            } else if (current.current.classList.contains("translate-x-[0]")) {
                removeItemsIfExist(current.current.classList, "-translate-x-[0]")
                addIfDontHave(current.current.classList, "scale-0", "translate-x-[300px]")
            }
            else
                addIfDontHave(current.current.classList, "scale-0", "translate-x-[300px]")

            removeItemsIfExist(next.current.classList, "scale-0")
            addIfDontHave(next.current.classList, "-left-[300px]", "scale-100", "translate-x-[300px]")

            setActive(nextActive)

            console.log(next.current.classList);
        }
    }

    return (
        <div className='card-group grid place-items-center h-[70vh]'>
            <div className='card-group-list relative w-[30vmin] aspect-[5/7] ' >
                <div ref={ first } className={ 'w-[30vmin] absolute aspect-[5/7] duration-400 group scale-100 transition-transform' }>

                    <CrSmallCard className="group-hover:-translate-x-full group-hover:-translate-y-[-15rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:-translate-y-2
                 group-hover:-translate-x-3/4 group-hover:rotate-[-24deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:-translate-x-3/4 group-hover:-translate-y-[5rem] group-hover:rotate-[30.5deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-6%] -rotate-3 group-hover:-translate-y-10
                 group-hover:-translate-x-1/4 group-hover:rotate-[-11deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:translate-y-[24rem] group-hover:rotate-[20deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="rotate-[2deg] group-hover:-translate-y-14
                 group-hover:translate-x-1/4 group-hover:rotate-[2deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:-translate-y-[10.5rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-10%] rotate-[-1deg] group-hover:-translate-y-8
                 group-hover:translate-x-3/4 group-hover:rotate-[15deg] duration-700 transition-transform "
                        src={ "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />


                </div>

                <div ref={ middle } className={ 'w-[30vmin] absolute aspect-[5/7] group transition-transform duration-400 scale-0' }>

                    <CrSmallCard className="group-hover:-translate-x-full group-hover:-translate-y-[-15rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1551655510-555dc3be8633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JjeWNsZSUyMHdpdGglMjBob3QlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:-translate-y-2
                 group-hover:-translate-x-3/4 group-hover:rotate-[-24deg] duration-700 transition-transform"
                        src={ "https://plus.unsplash.com/premium_photo-1677993185885-985af6b425c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:-translate-x-3/4 group-hover:-translate-y-[5rem] group-hover:rotate-[30.5deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1596687760372-4c0d266059a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-6%] -rotate-3 group-hover:-translate-y-10
                 group-hover:-translate-x-1/4 group-hover:rotate-[-11deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:translate-y-[24rem] group-hover:rotate-[20deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1675875053102-bc894884c564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwd2l0aCUyMGhvdCUyMHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="rotate-[2deg] group-hover:-translate-y-14
                 group-hover:translate-x-1/4 group-hover:rotate-[2deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:-translate-y-[10.5rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1626847152035-cb3f14d8534b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwd2l0aCUyMGhvdCUyMHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-10%] rotate-[-1deg] group-hover:-translate-y-8
                 group-hover:translate-x-3/4 group-hover:rotate-[15deg] duration-700 transition-transform "
                        src={ "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />


                </div>

                <div ref={ third } className={ 'w-[30vmin] absolute aspect-[5/7] group transition-transform duration-400 scale-0' }>

                    <CrSmallCard className="  group-hover:-translate-x-full group-hover:-translate-y-[-15rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1543039625-14cbd3802e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:-translate-y-2
                 group-hover:-translate-x-3/4 group-hover:rotate-[-24deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1524704169048-4f9c6563b27f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:-translate-x-3/4 group-hover:-translate-y-[5rem] group-hover:rotate-[30.5deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1679679008398-1b01fd7698bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-6%] -rotate-3 group-hover:-translate-y-10
                 group-hover:-translate-x-1/4 group-hover:rotate-[-11deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29hc3QlMjBob3QlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:translate-y-[24rem] group-hover:rotate-[20deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1467385829985-2b0fb82b5193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="rotate-[2deg] group-hover:-translate-y-14
                 group-hover:translate-x-1/4 group-hover:rotate-[2deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1557973350-f61cc5d1a5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:-translate-y-[10.5rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1524253734009-380c403e2d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvYXN0JTIwaG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-10%] rotate-[-1deg] group-hover:-translate-y-8
                 group-hover:translate-x-3/4 group-hover:rotate-[15deg] duration-700 transition-transform "
                        src={ "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGRvb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" } />


                </div>
                <div ref={ last } className={ 'w-[30vmin] absolute aspect-[5/7] duration-400 group scale-0 transition-transform' }>

                    <CrSmallCard className="group-hover:-translate-x-full group-hover:-translate-y-[-15rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[10%] translate-y-[3%] rotate-[5deg] group-hover:-translate-y-2
                 group-hover:-translate-x-3/4 group-hover:rotate-[-24deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:-translate-x-3/4 group-hover:-translate-y-[5rem] group-hover:rotate-[30.5deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1524253734009-380c403e2d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvYXN0JTIwaG90JTIwd29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-6%] -rotate-3 group-hover:-translate-y-10
                 group-hover:-translate-x-1/4 group-hover:rotate-[-11deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:translate-y-[24rem] group-hover:rotate-[20deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="rotate-[2deg] group-hover:-translate-y-14
                 group-hover:translate-x-1/4 group-hover:rotate-[2deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />

                    <CrSmallCard className="group-hover:translate-x-full group-hover:-translate-y-[10.5rem] group-hover:rotate-[-16deg] duration-700 transition-transform"
                        src={ "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" } />
                    <CrBigCard className="translate-x-[-10%] rotate-[-1deg] group-hover:-translate-y-8
                 group-hover:translate-x-3/4 group-hover:rotate-[15deg] duration-700 transition-transform "
                        src={ "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" } />


                </div>
            </div>
            <div className='sweeper flex mt-[-6vmin] justify-around w-full px-[26.5vmin]'>
                <button className='text-[2.5vmin] border-[.4vmin] border-[rgb(200,200,200)] rounded-full text-white bg-transparent h-[7vmin] aspect-square'
                    onClick={ () => handleOnHateClicked() }>
                    <XMarkIcon color='gray' className='scale-75'></XMarkIcon>
                </button>
                <button className='text-[2.5vmin] border-[.4vmin] border-[rgba(73,204,206,0.92)] rounded-full text-white bg-transparent h-[7vmin] aspect-square'
                    onClick={ () => handleOnLoveClicked() }>
                    <HeartIcon color='rgba(73,204,206,0.92)' className='scale-75'></HeartIcon>
                </button>

            </div>


        </div>
    );
}

ProfileSearcher.propTypes = propTypes;
ProfileSearcher.defaultProps = defaultProps;

export default ProfileSearcher;