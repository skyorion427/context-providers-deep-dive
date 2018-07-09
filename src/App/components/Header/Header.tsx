import * as React from 'react';
import {Link} from 'react-router-dom';
import {faCaretRight} from '@fortawesome/fontawesome-free-solid';
import {faGithub} from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {IHeaderProps} from './IHeader';
import ProgressBar from '../ProgressBar';
import SliderConsumer from 'App/providers/Slider/SliderConsumer';
import {ISliderContext} from 'App/providers/Slider/ISliderContext';

import {
  Left,
  Right,
  Content,
  ContentWrapper,
  ButtonWrapper,
  LabelButton,
  IconButton,
} from './styles';

const Header: React.SFC<IHeaderProps> = ({...props}) => (
  <SliderConsumer>
    {({
      lessons,
      lessonPosition,
      lessonKey,
      lesson,
      slide,
      slidePosition,
      slideKey,
      getSlideUri,
      getPreviousSlideUri,
      getNextSlideUri,
    }: ISliderContext) => (
      <header {...props}>
        <Left>
          <label>
            {lessonPosition}/{lessons.length}
          </label>
          <ProgressBar value={lessonPosition} max={lessons.length} />
        </Left>
        <Right>
          {lessonKey !== undefined &&
            lesson &&
            slideKey !== undefined &&
            slide && (
              <>
                <ContentWrapper>
                  <Content>
                    <Link to={getSlideUri(lessonKey, 0)}>{lesson.title}</Link>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <Link
                      to={getSlideUri(lessonKey, slideKey)}
                      className="active"
                    >
                      {slide.title}
                    </Link>
                  </Content>
                  <ButtonWrapper>
                    <LabelButton to={getPreviousSlideUri()} replace>
                      Previous
                    </LabelButton>
                    <LabelButton to={getNextSlideUri()} replace>
                      Next
                    </LabelButton>
                    <IconButton to="">
                      <FontAwesomeIcon icon={faGithub} />
                    </IconButton>
                  </ButtonWrapper>
                </ContentWrapper>
                <ProgressBar value={slidePosition} max={lesson.slides.length} />
              </>
            )}
        </Right>
      </header>
    )}
  </SliderConsumer>
);

export default Header;
