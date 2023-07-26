type Props = {
  from: string;
  to: string;
  date: any;
}

const TravelChoiceHeader = ({ from, to, date }: Props) => {
  return (
    <div className="flex py-2 gap-2">
      <b>{from}</b> <strong>&gt;</strong> <b>{to}</b> on <i><b>{new Intl.DateTimeFormat().format(date)}</b></i>
    </div>
  )
}

export default TravelChoiceHeader