import { FieldValues, useForm, useWatch } from "react-hook-form";
import { FilterModel, FilterOptionModel } from "../types/filters";
// import { Checkbox, Select } from "antd";
import { Fragment, useEffect } from "react";

type Props = {
  filterTypes: FilterModel;
  filterChange: any;
}

const Filters = ({ filterTypes, filterChange }: Props) => {
  const { register, watch } = useForm();

  const filters: any = Object.keys(filterTypes);

  const formVal = watch();

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      filterChange(formVal);
      console.log(value, name, type)
    });
    return () => subscription.unsubscribe();
  }, [formVal])

  const filterMarkup = (filter: keyof FilterModel) => {
    return filterTypes[filter]?.map((item: FilterOptionModel) =>
      <div key={item.value} className="my-1">
        <label>
          <input {...register(filter)}
            name={filter}
            type="checkbox"
            value={item['value']}
          />
          {item.label}
        </label>
      </div>
    );
  }

  return (

    <form>

      <div>
        {filters.map((filter: keyof FilterModel) =>
          <Fragment key={filter}>
            <div><strong className="my-0.5">{filter?.toUpperCase()}</strong></div>
            {filterMarkup(filter)}
          </Fragment>
        )}
      </div>

      {/* <Controller
        name={filters[1]}
        control={control}
        render={({ field }) => <Checkbox.Group {...field} options={options} />}></Controller> */}

    </form>

  )
}

export default Filters