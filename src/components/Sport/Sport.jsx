import React, { useState } from 'react'
import './css/sport.css'

const Sport = () => {
    const [sheetData, sheetDataSet] = useState([]);

    const deleteClickHandler = event => {
        console.log(event.target.id);
        sheetDataSet(sheetData.toSpliced(event.target.id, 1));
    }

    const SubmitHandler = event => {
        event.preventDefault();

        if ((sheetData.length > 0) && (sheetData.findIndex(record => record.date === event.target.date.value) !== -1)) {
            sheetDataSet(
                sheetData.map((record) => (
                    record.date === event.target.date.value ?
                        { 'date': record.date, 'distance': record.distance = Number(record.distance) + Number(event.target.distance.value) } :
                        { 'date': record.date, 'distance': record.distance }
                ))
            )
        } else {
            sheetDataSet([...sheetData, { distance: event.target.distance.value, date: event.target.date.value }].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
        }

        
    }

    return (
        <div>
            <form className='form-main' onSubmit={SubmitHandler}>
                <label htmlFor='date' className='label-date'>Дата <input id='date' name='date' type='date'></input></label>
                <label htmlFor='distance' className='label-distance'>Километров пройдено <input id='distance' name='distance' type='number'></input></label>
                <button type="submit">OK</button>
            </form>

            <div className='sheet'>
                {sheetData.map((item, index) => (
                    <div className='sheet-row'>
                        <div className='date'>{item.date}</div>
                        <div className='dist'>{item.distance}</div>
                        <button id={index} className='delete-button' onClick={deleteClickHandler}>Удалить</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sport