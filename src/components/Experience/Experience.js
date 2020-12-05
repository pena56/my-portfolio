import React from 'react';
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';

import './Experience.css';
import SvgLayout from '../SvgLayout/SvgLayout';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useStateValue } from '../../StateProvider';

function Experience() {
  const [{ darkMode }] = useStateValue();
  return (
    <div className={darkMode ? 'experiences dark__mode-1' : 'experiences light__mode-1'}>
      <SvgLayout />
      <Slide right>
        <SectionTitle name="Experience" />
      </Slide>
      <div className="experiences__list">
        <Pulse>
          <div className="experience__item">
            <p className="experience__title">BitHubph</p>
            <div className="experience__activities">
              <p className="experience__position">
                Frontend Developer <span>.</span> Feb, 2019 - Apr, 2019
              </p>
              <ul>
                <li>
                  Designed Wireframe for the admin dashboard of a single vendor
                  e-commerce store.
                </li>
                <li>
                  Implemented the frontend of the designed mockup using HTML,
                  CSS, and JavaScript.
                </li>
                <li>
                  Involved in interfacing with customers and potential users in
                  the design process.
                </li>
                <li>
                  Worked in a team using version control and project management
                  tools like Pivotal Tracker.
                </li>
                <li>
                  Involved in the deployment process of the e-commerce store.
                </li>
              </ul>
            </div>
          </div>
        </Pulse>

        <Pulse>
          <div className="experience__item">
            <p className="experience__title">BitHubph</p>
            <div className="experience__activities">
              <p className="experience__position">
                Mentor <span>.</span> Jun, 2019 - Dec, 2019
              </p>
              <ul>
                <li>
                  Developed Curriculum for teaching Web development and Python
                </li>
                <li>Developed Course content.</li>
                <li>
                  Mentored a group of 15 undergraduate students in web
                  development.
                </li>
                <li>
                  Supervised web projects of students using Agile software
                  methodology.
                </li>
              </ul>
            </div>
          </div>
        </Pulse>
      </div>
    </div>
  );
}

export default Experience;
