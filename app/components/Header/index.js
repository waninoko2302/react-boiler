import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <A>
        {/* dsdadsada */}
        <FormattedMessage {...messages.licenseMessage} />
      </A>
      <LocaleToggle />
    </Wrapper>
  );
}

export default Footer;
