import React from 'react'
import { useState } from 'react'
import boxes from './components/boxes'
import Box from './components/Box'

export default function App() {
    const [box, setBox] = useState(boxes)

    const boxElement = box.map(item => {
        return <Box 
        id={item.id} 
        key={item.id} 
        on={item.on} 
        className="box" 
        toggle={toggle}
        />
    })

    function toggle(id) {
        setBox(prevBox => prevBox
            .map(box => box.id === id ? {...box, on: !box.on} : box))
        //setBox(prevBoxes => {
        //    return prevBoxes.map((box) => {
        //        return box.id === id ? {...box, on: !box.on} : box
        //    })
        //})
    }


    return(
        <>
        {boxElement}  
        </>
    )}

