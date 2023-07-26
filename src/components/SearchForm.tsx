import { DatePicker, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';

type Props = {
  handleSubmission: any;
  fromOptions: any;
  toOptions: any;
}


const SearchForm = ({ handleSubmission, fromOptions, toOptions }: Props) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = function (val: any) {
    // console.log(val, 'submission', val.dateField.$d);
    handleSubmission(val);
  }

  return (
    <form className='flex justify-center py-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='flex justify-center gap-2 py-2 px-4 my-2 align-items-center bordered-1 rounded bg-white'>
        <div>
          <label className='block' htmlFor='fromField'>From</label>
          <Controller
            name="fromField"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select className='block' id="fromField"
              {...field}
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={fromOptions}
            />}></Controller>

          {errors.fromField?.message && errors.fromField?.type === 'required' && <div>{errors.fromField.message.toString()}</div>}
        </div>

        <div>
          <label htmlFor='toField'>To</label>
          <Controller
            name="toField"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Select className='block' id="toField"
              {...field}
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={toOptions}
            />}></Controller>


          {/* <textarea id="to" {...register("toField", { required: true })}></textarea> */}
          {errors.toField && <div>This field is required</div>}
        </div>

        <div>
          <label htmlFor='dateField'>Date</label>
          <Controller
            name="dateField"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <DatePicker className='block' id="dateField" {...field} />}
          />

          {errors.dateField && <div>This field is required</div>}
        </div>

        <div className='my-1 py-2'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2' type="submit">Submit</button></div>
      </div>
    </form>

  )

}

export default SearchForm