import { useLocation, useNavigate } from "react-router-dom";
import TravelChoiceHeader from "../components/TravelChoiceHeader";
import Filters from "../components/Filters";
import Offers from "../components/Offers";
import FilteredBuses from "../components/FilteredBuses";
import { BusModel } from "../types/bus";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";

const BusTickets = () => {

  const [buses, setBuses] = useState<BusModel[]>([]);
  const [masterBusList, setMasterBusList] = useState<BusModel[]>([]);
  const [componentStatus, setComponentStatus] = useState<'' | 'loading' | 'loaded' | 'error'>('');

  const [filters, setFilters] = useState<any>(undefined);
  const [filterStats, setFilterStats] = useState<'' | 'loading' | 'loaded' | 'error'>('');
  const locationState: { state: any } = useLocation();
  const navigate = useNavigate();

  // console.log(locationState, 'locationState');

  useEffect(() => {
    if (!locationState.state) navigateToView();
    if (locationState) {
      loadBusList(locationState);
      loadFilters();
    }
  }, []);

  function navigateToView() {
    navigate('/home')
  }

  function loadBusList(locationState: { state: any }) {
    setComponentStatus('loading');
    const url = locationState.state?.fromField == 'Bengaluru' && locationState.state?.toField == 'Chennai' ? 'busList.json' : 'buses.json';
    axios.get(url).then((response) => { setBuses(response.data); setMasterBusList(response.data); setComponentStatus('loaded') }).catch(() => { setComponentStatus('error'); setBuses([]); setMasterBusList([]) });
  }

  function loadFilters() {
    const url = 'filters.json';
    setFilterStats('loading');
    axios.get(url).then((response) => { setFilters(response.data); setFilterStats('loaded'); }).catch(() => setFilterStats('error'));
  }

  function filterBuses(args: any) {
    // console.log(args, 'args');
    let chosenFilters: any[] = [];
    chosenFilters = Object.values(args).flat().filter((item) => item);
    console.log(chosenFilters);
    if (chosenFilters.length) {
      setBuses(masterBusList.filter((item) => chosenFilters.every(filter => item.tags.includes(filter))))
    } else {
      setBuses(masterBusList.map((item) => item));
    }
  }

  return (
    <div className="">
      <div className="bg-slate-200">
        <div className="rb-content mx-auto">
          <TravelChoiceHeader from={locationState.state?.fromField} to={locationState.state?.toField} date={locationState.state?.dateField.$d} />
        </div>
      </div>

      <hr></hr>
      <div className="rb-content mx-auto">
        <div className="flex flex-row">
          <div className="left-section basis-1/4">
            {filterStats === 'loading' && <div className="my-12 mx-auto flex justify-center"><Spin tip="Loading filters..."><div /></Spin></div>}
            {filterStats === 'error' && <div className="my-12 mx-auto flex justify-center">Somme error loading filters</div>}
            {filterStats === 'loaded' && filters && <Filters filterTypes={filters} filterChange={filterBuses}></Filters>}
          </div>
          <div className="right-section basis-3/4">
            <div>
              <Offers></Offers>
              {componentStatus === 'loading' && <div className="my-12 mx-auto flex justify-center"><Spin tip="Loading..."><div /></Spin></div>}
              {componentStatus === 'error' && <div className="my-12 mx-auto flex justify-center">Some error has occurred</div>}
              {componentStatus === 'loaded' && buses.length ?
                <FilteredBuses buses={buses}></FilteredBuses> :
                <div className="my-12 mx-auto flex justify-center">No buses found. (Hint: Select from Bengaluru to Chennai)</div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusTickets