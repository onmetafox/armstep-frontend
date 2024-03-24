import React, {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import cx from "classnames";
import getCompletedURL from "src/utils/getCompletedURL";

const TechCard = ({data, className}) => {
    const [active, setActive] = useState(0);
    let classNames = cx('tech-card', className);
    return <div className={classNames}>
        <div className='tech-card-content m-2'>
            <Tabs className="tab-container">
                <TabList>
                    {
                        data.map((item, index) => (
                            <Tab key={index}
                                 className={`sub-category fs-s1 color-white m-4 ${active === index ? "active" : ""}`}
                                 onClick={() => setActive(index)}>
                                {active === index ? "-" : ""} {item.title}
                            </Tab>
                        ))
                    }
                </TabList>
                <div style={{width: "100%"}}>
                    {
                        data.map((item, index) => (
                            <TabPanel key={index} className="">
                                <div className="tech-detail color-white fs-b1 mt-4 mb-4 text-start">{item.detail}</div>
                                <div className="logo-container m-4">
                                    {item.icons.map((el, index) => (
                                            <div key={index}>
                                                <img src={getCompletedURL(el.icon)} alt="tech-icon"/>
                                                <div className="fs-b2 color-white mt-3">{el.title}</div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </TabPanel>
                        ))
                    }
                </div>
            </Tabs>
        </div>
    </div>
}

export default TechCard;