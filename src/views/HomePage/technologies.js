import React, { useState } from "react";
import { technologyData } from "src/config/technologyData";
import TechCard from "src/components/TechCard";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const Technology = () => {
    const [active, setActive] = useState(0);
    return <div className="technology-section">
        <div className="container">
            <div className="fs-h2 color-white">Technologies we work with</div>
            <div className="tech-section">
                <Tabs>
                    <TabList className="tab-categories">
                    {
                        technologyData.map((item, index) => (
                            <Tab key={index} className={`tab-category fs-s2 color-white m-4 ${active==index?"active": ""}`} onClick={()=>setActive(index)}>{item.title}</Tab>
                        ))
                    }
                    </TabList>
                    {
                        technologyData.map((item, index) => (
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