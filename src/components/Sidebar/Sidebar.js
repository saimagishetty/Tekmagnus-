import React, { useState,useEffect  } from 'react';
import './Sidebar.css';
function Sidebar() {
    const [extendbar, setIsextendbar] = useState(
        window.innerWidth > 800
    );
    const updateScreenSize = () => {
        setIsextendbar(window.innerWidth > 800);
    };
    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);
    const [extend, setIsToggled] = useState(true);
    const handleClick = () => {
        setIsToggled(!extend);
    };
    const handleClick1 = () => {
        setIsextendbar(!extendbar);
    };
    return (
        <div>
            <div className="Side">
                <div className='child1'>
                    {!extendbar && <p>KDISP</p>}
                    {extendbar && <h2>KDISP</h2>}
                    {extendbar && <p>interior design company</p>}
                    {extendbar &&
                        <div onClick={handleClick1} className='arrow right'>
                            <span class="material-symbols-outlined">
                                arrow_back
                            </span>
                        </div>
                    }
                    {!extendbar &&
                        <div onClick={handleClick1} className='arrow left'>
                            <span class="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </div>
                    }
                </div>
                <div className='child2'>
                    <div className='item '>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        {extendbar && <p>Home</p>}
                    </div>
                    <div onClick={handleClick} className='item second'>
                        <span class="material-symbols-outlined">
                            leaderboard
                        </span>
                        {extendbar && <p>My Space</p>}
                        {(extend && extendbar) && <span class="material-symbols-outlined">
                            expand_more
                        </span>}
                        {(!extend && extendbar) && <span class="material-symbols-outlined">
                            expand_less
                        </span>}
                    </div>
                </div>
                {extend && extendbar &&
                    <div className='items'>
                        <ul>
                            <li>Leave</li>
                            <li>Attendance</li>
                            <li>Performance</li>
                            <li>Expenes & travels</li>
                            <li>Help Desk</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}

export default Sidebar;