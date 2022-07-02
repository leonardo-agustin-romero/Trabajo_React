import React from 'react'
import { useState } from 'react'

const Item = () => {
    const array = useState(true);
    return (
        <div>{console.log(array)}</div>
    )
}

export default Item