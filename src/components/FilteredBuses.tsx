import { Fragment } from "react";
import { BusModel } from "../types/bus"
import Bus from "./Bus";

type Props = {
  buses: BusModel[];
}

const FilteredBuses = ({ buses }: Props) => {

  const busItems = buses.map((busItem: BusModel) =>
    <Fragment key={busItem.id}>
      <Bus busData={busItem}></Bus>
    </Fragment>
  )

  return (
    <>
      <div>Buses {buses.length}</div>
      <div>{busItems}</div>
    </>
  )
}

export default FilteredBuses