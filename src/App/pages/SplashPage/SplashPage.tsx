import * as React from 'react';
import {Link} from 'react-router-dom';

import {ISplashPageProps} from './ISplashPage';
import ConfigConsumer from 'App/providers/Config/ConfigConsumer';
import {IConfigContext} from 'App/providers/Config/IConfigContext';
import {Author, Container} from './styles';
import {Heading} from './styles';

const SplashPage: React.SFC<ISplashPageProps> = ({...props}) => (
  <ConfigConsumer>
    {({title, subTitle, author}: IConfigContext) => (
      <Link {...props} to="/chapter">
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
);

export default SplashPage;
