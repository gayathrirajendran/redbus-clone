import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import SearchForm from "../components/SearchForm"
import Carousel, { CarouselItem } from "../components/Carousel"

type Props = {}

const Home = (_props: Props) => {

  const navigate = useNavigate();
  function navigateToView(formState: any) {
    navigate('/bus-tickets', { state: formState })
  }

  const items = Array.from({ length: 10 }, (_, index) => index + 1).map((item) => <CarouselItem key={item}>{item}</CarouselItem>)

  return (
    <>
      <Header></Header>

      <SearchForm handleSubmission={navigateToView}></SearchForm>

      <div className="mx-10">
        <Carousel>
          {items}
        </Carousel>
      </div>
    </>
  )
}

export default Home