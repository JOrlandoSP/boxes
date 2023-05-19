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
        deleteBox={deleteBox}
        />
    })

    function toggle(id) {
        setBox(prevBox => prevBox
            .map(box => box.id === id ? {...box, on: !box.on} : box))
        //Same code but not in a single line using explicit return
        //setBox(prevBoxes => {
        //    return prevBoxes.map((box) => {
        //        return box.id === id ? {...box, on: !box.on} : box
        //    })
        //})
    }

    function addBox() {
        setBox(prevBox => {
            const lastBoxId = prevBox[prevBox.length -1].id
            const nextBoxId = lastBoxId + 1
            return([...prevBox, {
                id: nextBoxId,
                on: true,
            }])
        })
    }

    function deleteBox(id) {
        setBox(prevBox => {
            return(prevBox.filter(box => box.id !== id))
        })
    }

    return(
        <div className="container">
        <button onClick={addBox}>AddBox</button>
        {boxElement}  
        </div>
    )}

