import React, {useEffect, useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {getTechnologies} from "src/services/technology/technology";
import TechCard from "src/components/TechCard";

const Technology = () => {
    const [active, setActive] = useState(0);
    const [allTechnologies, setAllTechnologies] = useState([]);
    useEffect(() => {
        getTechnologies().then(res => {
            setAllTechnologies(res.result.data)
        })
    }, [])

    return <div className="technology-section">
        <div className="container">
            <div className="fs-h2 color-white m-3">Technologies we work with</div>
            <div className="tech-section m-3">
                <Tabs>
                    <TabList className="tab-categories">
                    {
                        allTechnologies && allTechnologies.map((item, index) => (
                            <Tab key={index} className={`tab-category fs-s2 color-white ${active===index?"active": ""}`} onClick={()=>setActive(index)}>{item.title}</Tab>
                        ))
                    }
                    </TabList>
                    {
                        allTechnologies && allTechnologies.map((item, index) => (
                            <TabPanel key={index}>
                                <TechCard data={item.category}/>
                            </TabPanel>
                        ))
                    }
                </Tabs>
            </div>
        </div>
    </div>
}

export default Technology