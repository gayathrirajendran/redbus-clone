import { redirect, useLocation, useNavigate } from "react-router-dom";
import TravelChoiceHeader from "../components/TravelChoiceHeader";
import Filters from "../components/Filters";
import Offers from "../components/Offers";
import FilteredBuses from "../components/FilteredBuses";
import { BusModel } from "../types/bus";
import { useEffect, useState } from "react";

type Props = {}

const masterBusList: BusModel[] = [
  {
    id: "DWe3",
    name: "Bus 1",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "06h 30m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "DZe3",
    name: "Bus 11",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "05h 30m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "DZ2e3",
    name: "Bus 2",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "05h 45m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "BZ2e3",
    name: "Bus 3",
    seatOffering: "2+1",
    busType: "AC Sleeper (2+1)",
    duration: "06h 15m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "CZ2e3",
    name: "Bus 4",
    busType: "Non AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "08h 15m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "GZ2e3",
    name: "Bus 5",
    busType: "Non AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "09h 15m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "EZ2e3",
    name: "Bus 6",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "05h 15m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "EZFe3",
    name: "Bus 7",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "06h 45m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "FZ2e3",
    name: "Bus 8",
    busType: "AC Sleeper (2+1)",
    seatOffering: "2+1",
    duration: "06h 45m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "GG2e3",
    name: "Bus 9",
    busType: "AC Semi Sleeper (2+2)",
    seatOffering: "2+2",
    duration: "06h 45m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  },
  {
    id: "GG1e3",
    name: "Bus 10",
    busType: "AC Semi Sleeper (2+2)",
    seatOffering: "2+2",
    duration: "06h 45m",
    startTime: "23:30",
    endTime: "06:30",
    endDate: "29-Jul-2023",
    rating: "4.4",
    startingPrice: "INR 900",
    totalAvailability: 23,
    singleSeatsAvailability: 7,
    startPoint: 'Bengaluru',
    destinationPoint: 'Chennai',
    facilities: ['Wifi', 'Movie']
  }
]

const BusTickets = (_props: Props) => {

  const [buses, setBuses] = useState<BusModel[]>([]);

  useEffect(() => {
    setBuses([...masterBusList]);
  }, [])

  const locationState: { state: any } = useLocation();
  // const red = useNavigate();

  console.log(locationState, 'locationState');

  const filterTypes = {
    generic: [{ label: 'Live Tracking', value: 'Live Tracking' },
    { label: 'Primo Bus', value: 'Primo Bus' }],
    departureTime: [
      { label: 'Before 6 am', value: 'Before 6 am' },
      { label: '6am to 12pm', value: '6am to 12pm' },
      { label: '12pm to 6pm', value: '12pm to 6pm' },
      { label: 'After 6 pm', value: 'After 6 pm' },
    ],
    busTypes: [
      { label: 'Seater', value: 'Seater' },
      { label: 'Sleeper', value: 'Sleeper' },
      { label: 'AC', value: 'AC' },
      { label: 'NON AC', value: 'NON AC' },
    ],
    seatAvailability: [
      { label: 'Single seats', value: 'Single seats' },
    ],
    amenities: [
      { label: 'Wifi', value: 'Wifi' },
      { label: 'Movie', value: 'Movie' },
      { label: 'Blankets', value: 'Blankets' },
      { label: 'Food', value: 'Food' }
    ],
    boardingPoint: [],
    droppingPoint: [],
    arrivalTime: [
      { label: 'Before 6 am', value: 'Before 6 am' },
      { label: '6am to 12pm', value: '6am to 12pm' },
      { label: '12pm to 6pm', value: '12pm to 6pm' },
      { label: 'After 6 pm', value: 'After 6 pm' },
    ]
  }

  function filterBuses(args: any) {
    console.log(args, 'args');
    setBuses([...masterBusList]);
  }


  return (
    <>
      <div>Bus tickets</div>
      <div className="flex">
        <div>
          <TravelChoiceHeader />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="left-section basis-1/4">
          <Filters filterTypes={filterTypes} filterChange={filterBuses}></Filters>
        </div>
        <div className="right-section basis-3/4">
          <div>
            <Offers></Offers>

            <FilteredBuses buses={buses}></FilteredBuses>
          </div>
        </div>
      </div>
    </>
  )
}

export default BusTickets