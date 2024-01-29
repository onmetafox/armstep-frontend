import React, { useState } from 'react';
import cx from "classnames";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const TechCard = ({data, className}) => {
    const [active, setActive] = useState(0);
    console.log(data);
    let classNames = cx( 'tech-card', className);
    return <div className={classNames}>
        <div className='tech-card-content m-2'>
            <Tabs>
                <TabList>
                {
                    data.map((item, index) => (
                        <Tab key={index} className={`sub-category fs-s1 color-white m-4 text-end ${active==index?"active": ""}`} onClick={()=>setActive(index)}>
                            {active==index?"-": ""} {item.title}
                        </Tab>
                    ))
                }
                </TabList>
                {
                    data.map((item, index) => (
                        <TabPanel key={index} className="">
                            <div className="tech-detail color-white fs-b1 m-4 text-start">{item.detail}</div>
                            <div className="logo-container m-4">
                                {item.icons.map((el, index) => (
                                    <div key={index}>
                                        <img src={el.icon} />
                                        <div className="fs-b2 color-white mt-3">{el.title}</div>
                                    </div>
                                )
                                )}
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
            
        </div>
    </div>
}

export default TechCard;