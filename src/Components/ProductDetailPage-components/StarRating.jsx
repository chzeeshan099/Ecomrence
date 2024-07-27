import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import styled from 'styled-components'

const StarRating = ({ star }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    star >= index + 1 ? (
                        <FaStar className="icon" />
                    ) : star >= number ? (
                        <FaStarHalfAlt className="icon" />
                    ) : (
                        <AiOutlineStar className="icon" />
                    )
                }
            </span>
        )
    })
    return (
        <>
            <Wrapper>
                <div className='icon-style'>
                    {ratingStar}
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    .icon-style{
        display:flex;
        gap:0.2rem;
        color:#FFB547;
    }
`

export default StarRating
