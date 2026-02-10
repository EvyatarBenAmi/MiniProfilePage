import React from 'react'
import "./ProfileCard.css"
import Button from './Button'

export default function ProfileCard(props) {
    return (
        <div className='divProfileCard'>
            <img className='imgProfile' src={props.image} />
            <h2 className='nameprofile' children={props.name} />
            <p className='descripProfile' children={props.description} />
            <Button name="Button" color={props.color} />
        </div>
    )
}