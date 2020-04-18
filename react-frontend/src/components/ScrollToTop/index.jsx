import React from 'react';
import { TiArrowUpThick } from 'react-icons/ti';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './scrollToTop.scss';
ScrollToTop.propTypes = {};

function ScrollToTop(props) {
  return (
    <div className="scollToTop">
      <Button>
        <TiArrowUpThick className="icon" />
      </Button>
    </div>
  );
}

export default ScrollToTop;
