import React from 'react'

export default function Pagination ({pagine, page, length}) {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(length/page); i++ ) {
        pageNumbers.push(i)
    }
    return (
        <div id="pagi" style={{
            display: 'flex',
            margin: '0 auto'
        }}>
            {pageNumbers.map(num => (
                <div key={num} style={{display: 'flex'}}>
                    <div  onClick={() => pagine(num)}>
                        <button style={{
                            width: '90%',
                            padding: '10px',
                            margin: '5px'
                        }} >{num}</button>
                    </div>
                </div>
            ))}
            
        </div>
    )
}
