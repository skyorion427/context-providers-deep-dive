import * as React from 'react';
import {Link} from 'react-router-dom';
import {ISidebarProps} from './ISidebar';
import ConfigConsumer from 'App/providers/Config/ConfigConsumer';
import {IConfigContext} from 'App/providers/Config/IConfigContext';
import SliderConsumer from 'App/providers/Slider/SliderConsumer';
import {ISliderContext} from 'App/providers/Slider/ISliderContext';

import {Heading, LessonNav, SlideNav, Nav} from './styles';

const Sidebar: React.SFC<ISidebarProps> = ({...props}) => (
  <SliderConsumer>
    {({lessons, isActiveSlide, getSlideUri}: ISliderContext) => (
      <ConfigConsumer>
        {({title, subTitle}: IConfigContext) => (
          <aside {...props}>
            {/* HEADING */}
            <Link to="/">
              <Heading>
                {title}
                <br />
                {subTitle}
              </Heading>
            </Link>

            {/* NAV */}
            {lessons.length && (
              <Nav>
                <ul>
                  {lessons.map((lesson, lessonKey) => (
                    <LessonNav key={lessonKey}>
                      <Link to={getSlideUri(lessonKey, 0)}>
                        {lessonKey + 1}. {lesson.title}
                      </Link>
                      {lesson.slides.length && (
                        <ul>
                          {lesson.slides.map((slide, slideKey) => (
                            <SlideNav key={`${lessonKey}/${slideKey}`}>
                              <Link
                                to={getSlideUri(lessonKey, slideKey)}
                                className={
                                  isActiveSlide(lessonKey, slideKey)
                                    ? 'active'
                                    : ''
                                }
                              >
                                {slide.title}
                              </Link>
                            </SlideNav>
                          ))}
                        </ul>
                      )}
                    </LessonNav>
                  ))}
                </ul>
              </Nav>
            )}
          </aside>
        )}
      </ConfigConsumer>
    )}
  </SliderConsumer>
);

export default Sidebar;
