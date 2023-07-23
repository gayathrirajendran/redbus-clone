import { Button } from "antd";
import { SeatModel } from "../types/bus";
import { useEffect } from "react";

type Props = {
    seatType?: '2+2' | '2+1',
    seats: Array<SeatModel>;
    handleSeatSelection: any;
}

const SeatSection = ({ seatType, seats, handleSeatSelection }: Props) => {

    console.log(seatType, seats);
    const noOfRows = (seatType === '2+1' ? 3 : 4);
    const noOfColumns = Math.trunc(seats.length / noOfRows) + (seats.length % noOfRows ? 1 : 0);

    const seatSet = seats?.map((seat, index) => {
        const rowNo = Math.floor(index / noOfColumns);
        const gridClass = `grid-row-${rowNo} ${rowNo === 2 ? 'mt-4' : ''} seat-index-${index}`;

        return (<li className={gridClass} key={seat.seatNo}>
            {rowNo} {noOfColumns} {index}
            <Button disabled={!seat.isAvailable} className="seat" onClick={() => handleSeatSelection(seat)}>{seat.seatNo}</Button>
        </li>)
    })

    console.log(Array.from({ length: noOfColumns }, () => 'auto').join(' '))

    const customStyle = { 'gridTemplateColumns': Array.from({ length: noOfColumns }, () => 'auto').join(' ') };

    return (
        <>
            <div>SeatSection</div>
            <ul style={customStyle} className={`grid-container-${noOfRows}`}>
                {seatSet}
            </ul>
        </>
    )
}

SeatSection.defaultProps = {
    seatType: '2+1'
}

export default SeatSection