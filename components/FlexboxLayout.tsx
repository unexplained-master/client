import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const FlexboxLayout: FunctionComponent<Props> = (props) => {
  
  return (  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
    <header
      style={{
        width: '100%',
      }}>
      Header
    </header>
    <main
      style={{
        width: '100%',
        flex: '1 1 auto',
      }}>
      {props.children}
    </main>
    <footer
      style={{
        width: '100%',
      }}>
      Footer
    </footer>
  </div>);
};

export default FlexboxLayout;
