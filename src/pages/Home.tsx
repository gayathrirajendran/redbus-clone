import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import SearchForm from "../components/SearchForm"

type Props = {}

const Home = (_props: Props) => {

  const navigate = useNavigate();
  function navigateToView(formState: any) {
    console.log('navigate to view');
    navigate('/bus-tickets', { state: formState })
  }

  return (
    <>
      <Header></Header>

      <SearchForm handleSubmission={navigateToView}></SearchForm>
    </>
  )
}

export default Home