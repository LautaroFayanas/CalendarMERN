import { Calendar } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { NavBar , CalendarEvent , CalendarModal } from "../";
import { addHours } from "date-fns";
import { localizer , getMessages } from "../../helpers";
import { useUiStore } from "../../hooks";


const events = [{
  title: ' Cumple',
  notes: 'hay torta',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Lau'
  }

}]

export const CalendarPage = () => {

  const { openDateModal } = useUiStore()

  const eventStyleGetter = ( event , start , end , isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '10px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }

  }

  const onDoubleClick = ( event ) => {
    openDateModal();
  }

  const onSelect = ( event ) => {

  }

  const onViewChange = ( event ) => {

  }

  return (
    <>
      <NavBar />
      <Calendar
      culture="es"
      localizer={ localizer }
      events={ events }
      startAccessor= 'start'
      endAccessor='end'
      style={{height: '88vh'}}
      messages={ getMessages() }
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChange }

      />

      <CalendarModal />

    </>
  )
}
