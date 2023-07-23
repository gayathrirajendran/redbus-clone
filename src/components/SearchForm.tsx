import { DatePicker, DatePickerProps, Select } from 'antd';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Props = {
    handleSubmission: any;
}

interface IFormInput {
    fromField: any;
    toField: any;
    dateField: any;
}

const SearchForm = ({ handleSubmission }: Props) => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = function (val: any) {
        console.log(val, 'submission', val.dateField.$d);
        handleSubmission(val);
    }

    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="from">From</label>
                <Controller
                    name="fromField"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Select
                    { ...field }
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: 'Not Identified',
                      },
                      {
                        value: '2',
                        label: 'Closed',
                      },
                      {
                        value: '3',
                        label: 'Communicated',
                      },
                      {
                        value: '4',
                        label: 'Identified',
                      },
                      {
                        value: '5',
                        label: 'Resolved',
                      },
                      {
                        value: '6',
                        label: 'Cancelled',
                      },
                    ]}
                  />}></Controller>
                
                {errors.fromField?.message && errors.fromField?.type === 'required' && <div>{errors.fromField.message.toString()}</div>}
            </div>

            <div>
                <label htmlFor="to">To</label>
                <Controller
                    name="toField"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <Select
                    { ...field }
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                      {
                        value: '1',
                        label: 'Not Identified',
                      },
                      {
                        value: '2',
                        label: 'Closed',
                      },
                      {
                        value: '3',
                        label: 'Communicated',
                      },
                      {
                        value: '4',
                        label: 'Identified',
                      },
                      {
                        value: '5',
                        label: 'Resolved',
                      },
                      {
                        value: '6',
                        label: 'Cancelled',
                      },
                    ]}
                  />}></Controller>
                

                {/* <textarea id="to" {...register("toField", { required: true })}></textarea> */}
                {errors.toField && <div>This field is required</div>}
            </div>

            <div>
                <label>Date</label>
                <Controller
                    name="dateField"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => <DatePicker {...field} />}
                />

                {errors.dateField && <div>This field is required</div>}
            </div>

            <button type="submit">Submit</button>
        </form>

    )
}

export default SearchForm