import { Button } from "antd";
import { SeatModel } from "../types/bus";
import { useEffect, useState } from "react";

type Props = {
    seatType?: '2+2' | '2+1',
    seats: Array<SeatModel>;
    confirmBooking: any;
}

const SeatSection = ({ seatType, seats, confirmBooking }: Props) => {

    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);
    const [markedSeats, setMarkedSeats] = useState<SeatModel[]>(seats);

    useEffect(() => {
        setMarkedSeats(markedSeats.map((seat: SeatModel) => {
            const target = selectedSeats.find((item) => item.seatNo === seat.seatNo);
            return target ? { ...target } : { ...seat }
        }));
    }, [selectedSeats]);

    useEffect(() => {
        setMarkedSeats(seats);
    }, [seats]);


    const noOfRows = (seatType === '2+1' ? 3 : 4);
    const noOfColumns = Math.trunc(markedSeats.length / noOfRows) + (markedSeats.length % noOfRows ? 1 : 0);

    const seatSet = markedSeats?.map((seat, index) => {
        const rowNo = Math.floor(index / noOfColumns);
        const gridClass = `grid-row-${rowNo} ${rowNo === 2 ? 'mt-4 py-2' : ''} seat-index-${index}`;

        return (<li className={gridClass} key={seat.seatNo}>
            <Button disabled={!seat.isAvailable} className={`seat ${seat.isMarked ? 'marked' : ''} ${rowNo === 2 ? 'py-2' : '' }`} onClick={() => selectSeat(seat)}>{seat.seatNo}</Button>
        </li>)
    })

    const selectSeat = (seatData: SeatModel) => {
        // selectSeatInBus(seatData, busData);
        const newSeat = { ...seatData, isMarked: !seatData.isMarked };
        // confirm booking for the user in local storage so that the next user will not be able to. 
        if (!selectedSeats.find((seat) => seat.seatNo === newSeat.seatNo)) {
            setSelectedSeats([...selectedSeats, newSeat])
        } else {
            setSelectedSeats(selectedSeats.map((seat) => seat.seatNo === newSeat.seatNo ? newSeat : seat))
        }
    }

    const customStyle = { 'gridTemplateColumns': Array.from({ length: noOfColumns }, () => 'auto').join(' ') };

    return (
        <div className="bg-slate-200">
            
            <ul style={customStyle} className={`grid-container-${noOfRows}`}>
                {seatSet}
            </ul>

            <div className="my-2 flex justify-center align-items-center py-2">
                <Button onClick={() => { confirmBooking(selectedSeats.filter((item) => item.isMarked)); setSelectedSeats([]); }} disabled={selectedSeats.filter((item) => item.isMarked).length === 0}>Confirm Booking</Button>
            </div>
        </div>
    )
}

SeatSection.defaultProps = {
    seatType: '2+1'
}

export default SeatSection