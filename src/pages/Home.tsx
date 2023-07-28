import { useNavigate } from "react-router-dom"
import SearchForm from "../components/SearchForm"
import Carousel, { CarouselItem } from "../components/Carousel"
import { useEffect, useState } from "react"
import axios from "axios"
import { Spin } from "antd"

const Home = () => {

  const [placeOptions, setPlaceOptions] = useState([]);
  const [placeOptionsLoading, setPlaceOptionsLoading] = useState<boolean>(false);
  const [placeOptionsError, setPlaceOptionsError] = useState<any>(undefined);

  const navigate = useNavigate();
  function navigateToView(formState: any) {
    navigate(`/bus-tickets/${formState.fromField}/${formState.toField}/${formState.dateField}`)
  }

  function loadOptions() {
    const url = '/placeOptions.json';
    setPlaceOptionsLoading(true);
    axios.get(url).then((response) => { setPlaceOptions(response.data); setPlaceOptionsError(null) }).catch((err) => { setPlaceOptionsError(err); setPlaceOptions([]) }).finally(() => setPlaceOptionsLoading(false));
  }

  useEffect(() => {
    loadOptions();
  }, [])


  const carouselItems = Array.from({ length: 10 }, (_, index) => index + 1).map((item) => <CarouselItem key={item}>
    <div className="flex justify-center align-items-center">Offer {item}</div>
  </CarouselItem>)

  return (
    <div className="home-body">
      <div className="rb-content mx-auto">
        <div>
          {placeOptionsLoading && <Spin className="mx-auto flex justify-center">Loading...</Spin>}
          {placeOptionsError && <div className="mx-auto flex justify-center">Some error has occurred</div>}
          {placeOptions && <SearchForm fromOptions={placeOptions} toOptions={placeOptions} handleSubmission={navigateToView}></SearchForm>}

          <div className="mx-10">
            <Carousel>
              {carouselItems}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home