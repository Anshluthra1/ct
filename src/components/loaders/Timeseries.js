import ContentLoader from 'react-content-loader';
import React from 'react';
const TimeseriesLoader = () => {
  const windowWidth = window.innerWidth;
  const width = windowWidth > 769 ? 480 : windowWidth;
  const height = 160 * 5;

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      speed={2}
    >
      <circle cx={0.4 * width} cy={height / 2} r="5" />
      <circle cx={0.5 * width} cy={height / 2} r="5" />
      <circle cx={0.6 * width} cy={height / 2} r="5" />
    </ContentLoader>
  );
};

export default TimeseriesLoader;
