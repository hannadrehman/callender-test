export const generateEventData=(eventOb,boxes,timeSlots)=>{
    const eventHashMap={}
    const eventArr=[]
    for(let i=1;i<boxes;i+=1){
        eventArr.push({
            id:i,
            event:{},
            startTime:timeSlots[i-1],
            date:eventOb.date
        })
    }

    eventOb.events.forEach(ev => {
        if(!eventHashMap[ev.startTime]){
            eventHashMap[ev.startTime]=ev
        }
    });

    const returnArray =  eventArr.map((ev)=>{
        const evStartTime = ev.startTime;
        if(eventHashMap[evStartTime]){
            ev.event = eventHashMap[evStartTime]
        }
        return ev;
    })
    return returnArray
}