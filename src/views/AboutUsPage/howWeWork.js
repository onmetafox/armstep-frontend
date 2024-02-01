import React, { useRef, useState, useEffect } from 'react';
import processImg from "../../assets/images/progress-circle.svg";

const ProcessStep = ({ active, stepNumber, description }) => {
  return (
    <div className={`process-step ${active}`}>
      <div className="home-title fs-h5 text-start">{stepNumber}</div>
      <div className='fs-b'>{description}</div>
    </div>
  );
};

const HowWeWork = () => {
  const [sliderValue, setValue] = useState(0); // Initial value for the slider
  const containerRef = useRef(null);

  const scrollToLastActiveStep = () => {
    if (containerRef.current) {
      const activeSteps = containerRef.current.querySelectorAll(".process-step.active");

      if (activeSteps.length > 0) {
        const lastActiveStep = activeSteps[activeSteps.length - 1];
        const container = containerRef.current;
        const stepOffsetLeft = lastActiveStep.offsetLeft;

        // Scroll to the last active step using scrollLeft
        container.scrollLeft = stepOffsetLeft;
      }
    }
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    scrollToLastActiveStep();
  }, [sliderValue]);

  const steps = [
    {
      stepNumber: 'Step 1',
      description: `We start by engaging with you to understand your specific goals and expectations by setting up an initial call to analyze your requirements, which includes understanding the scope, timeline and the budget you have prepared.
          Based on that analysis we prepare a detailed proposal, which includes proposed splution, timelines and any assumptions and conditions.`
    },
    {
      stepNumber: 'Step 2',
      description: `Once you review the proposal, we enter into the finalization of terms. This includes preparing final terms of contractual terms after which we assemble a team tailored to your project's needs and finally get into the final call with you to align objectives, establish communication protocols and set expectations related to organizational standpoint of the projects' development.`
    },
    {
      stepNumber: 'Step 3',
      description: `Our project managers create a detailed project plan, outlining the tasks, milestones and final deliverables. After this development team starts working on the project as per the plan, ensuring adherence to the defined processes and quality standards.
            Whole process is being followed by regular updates from the development and communication with you to ensure that we get closer to the final goal.`
    },
    {
      stepNumber: 'Step 4',
      description: `Once the project enters the final phase, we focus on finalizing all deliverables and providing you with a draft version of the project for your feedback. After the feedback is received, the project goes through any necessary revisions to ensure you are completely satisfied.
            After successful delivery, we provide ongoing support and maintenance, which might include handling any post-deployment tasks, updates, or additional requirements by you.`
    },
  ];
  return <div className='about-how-section'>
    <div className='container'>
      <div className='fs-h2 color-white p-1 title'>How we work</div>
      <div className='how-container d-flex'>
        <div className='how-progress'>
          <input
            type="range"
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={3}
            step={1}
            className="progress-range-slider"
          />
          <div className='progress-circle' style={{ left: `calc(${sliderValue * 25}% +  65px / 4 * ${sliderValue})` }}></div>
          <div className='progress-line'></div>
          {steps.map((_, index) => (
            <div
              key={index}
              className={`progress-prev-circle ${index < sliderValue ? 'active' : ''}`}
              style={{ left: `calc(${index * 25}% +  65px / 4 * ${index})` }}
            >
              <img src={processImg} alt='Progress' />
            </div>
          ))}
        </div>
        <div className='d-flex how-steps color-white' ref={containerRef}>
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              active={index <= sliderValue ? "active" : ""}
              stepNumber={step.stepNumber}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  </div>

}

export default HowWeWork;