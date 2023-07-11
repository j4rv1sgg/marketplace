import { useState } from 'react';
import Dropdown from "../../../UI/dropdown/Dropdown.jsx";
import Button from "../../../UI/button/Button.jsx";
import styles from "./Filters.module.css"

const years = [{ label: 'All', value: 'All' }];
for (let year = 2023; year >= 1950; year--) {
    years.push({ label: year, value: year });
}


const Filters = ({ setFilters, setOrder, setFromPrice, setToPrice }) => {

    const [fromYear, setFromYear] = useState('')
    const [toYear, setToYear] = useState('')


    const setFiltersData = () => {
        setFilters([
            {
                field: 'year',
                value: toYear ? toYear : '9999',
                operator: '<='
            },
            {
                field: 'year',
                value: fromYear ? fromYear: '0',
                operator: '>='
            }
        ])

    }

    return (
        <div className={styles.filters}>
            <div>
                <b>Year</b>
                <p>From:</p>
                <Dropdown options={years} defaultValue= {fromYear} setValue = {setFromYear} />
                <p>To:</p>
                <Dropdown options={years} defaultValue= {toYear} setValue = {setToYear} />

            </div>

            <div>
                <b>Price</b>
                <p>From:</p>
                <input type="number" onChange={(e)=>setFromPrice(e.target.value)}/>
                <p>To:</p>
                <input type="number" onChange={(e)=>setToPrice(e.target.value)}/>
            </div>

            {/*  huinia, peredelat'   */}
            <div>
                Sort by:
                <select onChange={(e) => setOrder(JSON.parse(e.target.value))}>
                    <option> Select...</option>
                    <option disabled>By price</option>
                    <option value={JSON.stringify({ order: 'price', desc: true })}>high first</option>
                    <option value={JSON.stringify({ order: 'price', desc: false })}>low first</option>
                    <option disabled>By date</option>
                    <option value={JSON.stringify({ order: 'added', desc: true })}>newest first</option>
                    <option value={JSON.stringify({ order: 'added', desc: false })}>oldest first</option>
                </select>
                <Button title={'Search'} onClick={setFiltersData}/>
            </div>
        </div>
    );
};

export default Filters;