import './Logs.css';

function Logs() {
    return (
        <div className="logs">
            <h2>Logs & Requests</h2>
            <div className='logs1 text4'>
                <div className='logs1-child'>Attendance Log</div>
                <div className='logs1-child1'>Attendance Requests</div>
            </div>
            <div className='logs2'>
                <div className='logs21'>
                    <h2>December, 2023</h2>
                    <div className='logs1 text4'>
                        <div className='logs1-child'>30 Days</div>
                        <div className='logs1-child1'>Nov</div>
                        <div className='logs1-child1'>OCT</div>
                        <div className='logs1-child1'>SEP</div>
                        <div className='logs1-child1'>AUG</div>
                        <div className='logs1-child1'>JUL</div>
                        <div className='logs1-child1 last'>JUN</div>
                    </div>
                    <div className='logs1 text4'>
                        <div className='logs1-child'><span class="material-symbols-outlined">
                            lists
                        </span></div>
                        <div className='logs1-child1 last'><span class="material-symbols-outlined">
                            calendar_today
                        </span></div>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th></th>
                            <th>Attendance Visual</th>
                            <th>Effective Hours</th>
                            <th>Gross Hours</th>
                            <th>Extra Hours</th>
                            <th>Arrival</th>
                            <th>Log</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='working'>
                            <td>Dec 04, Mon</td>
                            <td></td>
                            <td className='center'>
                                <div className='attendanceBar'>
                                    <div></div>
                                    <div></div>
                                </div>
                            </td>
                            <td> <span class="material-symbols-outlined">
                                pie_chart
                            </span> 9h 15m</td>
                            <td>9h 59m</td>
                            <td>0h 59m</td>
                            <td> <span class="material-symbols-outlined">
                                done
                            </span> On Time</td>
                            <td><span class="material-symbols-outlined">
                                error
                            </span></td>
                        </tr>
                        <tr>
                            <td>Dec 03, Sun</td>
                            <td className='center'><div className='btn1 woff'> W-OFF</div></td>
                            <td colSpan={6} >Full day weekly-off</td>
                        </tr>
                        <tr className='working'>
                            <td>Dec 02, Sat</td>
                            <td></td>
                            <td className='center'>
                                <div className='attendanceBar'>
                                    <div></div>
                                </div>
                            </td>
                            <td> <span class="material-symbols-outlined">
                                pie_chart
                            </span> 9h 15m</td>
                            <td>9h 59m</td>
                            <td>0h 59m</td>
                            <td> <span class="material-symbols-outlined">
                                sentiment_satisfied
                            </span> On Time</td>
                            <td><span class="material-symbols-outlined">
                                task_alt
                            </span></td>
                        </tr>
                        <tr className='working'>
                            <td>Dec 01, Fri</td>
                            <td></td>
                            <td className='center'>
                                <div className='attendanceBar'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </td>
                            <td> <span class="material-symbols-outlined">
                                pie_chart
                            </span> 9h 15m</td>
                            <td>9h 59m</td>
                            <td>0h 59m</td>
                            <td>On Time</td>
                            <td><span class="material-symbols-outlined">
                                hourglass_top
                            </span></td>
                        </tr>
                        <tr>
                            <td>Nov 30, Thu</td>
                            <td className='center'><div className='btn1 leave'> Leave</div></td>
                            <td colSpan={6} >Sick Leave</td>
                        </tr>
                        <tr className='working'>
                            <td>Nov 29, Thu</td>
                            <td></td>
                            <td></td>
                            <td> <span class="material-symbols-outlined">
                                pie_chart
                            </span> 9h 15m</td>
                            <td>9h 59m</td>
                            <td>0h 59m</td>
                            <td>On Time</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Logs;
