import * as React from 'react';
import {Link} from 'react-router-dom';

import {ISplashPageProps} from './ISplashPage';
import ConfigConsumer from 'App/providers/Config/ConfigConsumer';
import {IConfigContext} from 'App/providers/Config/IConfigContext';
import {Author, Container} from './styles';
import {Heading} from './styles';
import SliderConsumer from '../../providers/Slider/SliderConsumer';
import {ISliderContext} from '../../providers/Slider/ISliderContext';

const SplashPage: React.SFC<ISplashPageProps> = ({...props}) => (
  <SliderConsumer>
    {({getFirstSlideUri}: ISliderContext) => (
      <ConfigConsumer>
        {({title, subTitle, author}: IConfigContext) => (
          <Link {...props} to={getFirstSlideUri()}>
            <Container>
              <Heading>
                {title} {subTitle}
              </Heading>
              {author && <Author>{author.name}</Author>}
              <p>(Click anywhere to begin)</p>
            </Container>
          </Link>
        )}
      </ConfigConsumer>
    )}
  </SliderConsumer>
);

export default SplashPage;
