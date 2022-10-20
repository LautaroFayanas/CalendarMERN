import React from 'react'

export const CalendarEvent = ({event}) => {
    console.log(event);
    const { title , user } = event
  return (
    <>
        <strong> {title} </strong>
        <span> - {user.name} </span>
    </>
  )
}
