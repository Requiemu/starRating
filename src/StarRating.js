import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ selectedStars = 0, totalStars = 5, style = {}, ...props }) {
    // const [selectedStars, setSelectedStars] = useState(3);
    return (
        <div style={{ padding: '5px', ...style }} {...props}>
            {
                Array(totalStars).
                    fill(0).
                    map((n, i) => <Star
                        selected={i < selectedStars}
                        key={i}
                    />)
            }
            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    )
}

const Star = ({ selected = false, onSelect = f => f }) => {
    return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
}