
import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar/calendarSlice'

export const useCalendarStore = () => {

    const dispatch = useDispatch()
    const { events , activeEvent } = useSelector( state => state.calendar )

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) )
    }

    const startSavingEvent = async(calendarEvent) => {
        //TODO: llega al backend

        if(calendarEvent._id){
            //actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }))
        }else{
            //creando
            dispatch(onAddNewEvent( { ...calendarEvent, _id: new Date().getTime() } ))
        }
    }

    return {
        //propiedades
        events,
        activeEvent,

        //metodos
        setActiveEvent,
        startSavingEvent

    }
}
