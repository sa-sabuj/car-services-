import React, { useEffect, useState } from 'react';
import './Services.css';

import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
           <div className="row">
           <h1 className='services-title m-4'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
           </div>

        </div>
    );
};

export default Services;