import { Button, Card, Col, Row } from "antd";
import { BusModel, SeatModel } from "../types/bus";
import { useEffect, useState } from "react";
import SeatSection from "./SeatSection";

type Props = {
    busData: BusModel;
}

const seatList: SeatModel[] = [
    {
        seatNo: 'L1',
        isAvailable: true,
        price: 'INR 900'
    },
    {
        seatNo: 'L2',
        isAvailable: false,
        price: 'INR 900'
    },
    {
        seatNo: 'L3',
        isAvailable: false,
        price: 'INR 900'
    },
    {
        seatNo: 'L4',
        isAvailable: true,
        price: 'INR 900'
    },
    {
        seatNo: 'L5',
        isAvailable: false,
        price: 'INR 900'
    },
    {
        seatNo: 'L6',
        isAvailable: true,
        price: 'INR 900'
    },
    {
        seatNo: 'L7',
        isAvailable: true,
        price: 'INR 900'
    }
    , {
        seatNo: 'L8',
        isAvailable: true,
        price: 'INR 900'
    }, {
        seatNo: 'L9',
        isAvailable: true,
        price: 'INR 900'
    }, {
        seatNo: 'L10',
        isAvailable: true,
        price: 'INR 900'
    }, {
        seatNo: 'L11',
        isAvailable: true,
        price: 'INR 900'
    }, {
        seatNo: 'L12',
        isAvailable: true,
        price: 'INR 900'
    }, {
        seatNo: 'L13',
        isAvailable: true,
        price: 'INR 900'
    }
]

const Bus = ({ busData }: Props) => {

    const [isSeatVisible, setIsSeatVisible] = useState<boolean>(false);
    const tempSeats = !!localStorage.getItem(JSON.stringify(busData.id)) ? JSON.parse(localStorage.getItem(JSON.stringify(busData.id))!) : [];
    const [seats, setSeats] = useState(tempSeats.length ? tempSeats : seatList);
    const [selectedSeats, setSelectedSeats] = useState<SeatModel[]>([]);

    // useEffect(() => {
    //     let storedSelectedSeats;
    //     // to do: get seat details
    //     return () => {
    //     }
    // }, [isSeatVisible]);

    useEffect(() => {
        localStorage.setItem(JSON.stringify(busData.id), JSON.stringify(seats));
    }, [seats])

    function confirmBooking() {
        setSeats(seats.map((seat: SeatModel) => {
            let target = selectedSeats.find((item) => item.seatNo === seat.seatNo);
            return target ? target : seat
        }));
        // make booking
        // confirmBooking(seatData, busData);
    }

    const selectSeat = (seatData: SeatModel, isAvailable: boolean) => {
        // selectSeatInBus(seatData, busData);
        const newSeat = { ...seatData, isAvailable: !isAvailable };
        // confirm booking for the user in local storage so that the next user will not be able to. 

        setSelectedSeats([...selectedSeats, newSeat])
        // seats.map((seat) => seat.seatNo === newSeat.seatNo ? newSeat : seat)
    }


    return (
        <div className="mx-2 px-2 my-2">
            <Card hoverable bordered={true}>
                <div className="flex justify-between">
                    <div>
                        <div>
                            <h3><strong>{busData.name}</strong></h3>
                        </div>
                        <div>
                            <span>{busData.busType}</span>
                        </div>
                    </div>
                    <div className="flex basis-3/4 justify-around">
                        <div>
                            <div>{busData.startTime}</div>
                            <br></br>
                            <div>{busData.startPoint}</div>
                        </div>
                        <div>
                            {busData.duration}
                        </div>
                        <div>
                            <div>{busData.endTime}</div>
                            <div>{busData.endDate}</div>
                            <div>{busData.destinationPoint}</div>
                        </div>

                        <div>
                            <div>{busData.rating}</div>
                        </div>

                        <div>
                            <div>{busData.startingPrice}</div>
                        </div>

                        <div>
                            <br></br>
                            <div>{busData.totalAvailability}</div>
                            <div>{busData.singleSeatsAvailability}</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button onClick={() => { setIsSeatVisible(!isSeatVisible); }}>
                        {isSeatVisible ? 'Hide seats' : 'View seats'}
                    </Button>
                </div>
            </Card>
            {isSeatVisible &&
                <div>
                    <SeatSection seatType={busData.seatOffering} seats={seats} handleSeatSelection={selectSeat} confirmBooking={confirmBooking}></SeatSection>
                </div>
            }
        </div>

    )
}

export default Bus