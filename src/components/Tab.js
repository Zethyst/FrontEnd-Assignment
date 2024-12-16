import React from 'react'

function Tab({ title = "Option" }) {
    return (
        <button class="tab">
            {title}
        </button>
    )
}

export default Tab