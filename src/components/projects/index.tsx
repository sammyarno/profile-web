'use client';

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { type CustomArrowProps, type Settings } from 'react-slick';

import useViewportSize from 'hooks/ViewportSize';
import cx from 'plugins/cx';

import portfolios from 'constants/Portfolios';

import Item from './item';

const NextArrow = (props: CustomArrowProps) => {
  const { onClick, currentSlide, slideCount } = props;

  const isDisabled = currentSlide === (slideCount || 0) - 1;
  const classNames = cx(
    'absolute -bottom-20 md:bottom-auto md:top-1/2 right-1/3 md:-right-12 md:-translate-y-1/2 cursor-pointer',
    isDisabled ? 'opacity-50' : 'opacity-100'
  );

  return (
    <div className={classNames} onClick={onClick}>
      <FaChevronRight className="text-primary size-12" />
    </div>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick, currentSlide } = props;

  const isDisabled = currentSlide === 0;
  const classNames = cx(
    'absolute -bottom-20 md:bottom-auto md:top-1/2 left-1/3 md:-left-12 md:-translate-y-1/2 cursor-pointer',
    isDisabled ? 'opacity-50' : 'opacity-100'
  );

  return (
    <div className={classNames} onClick={onClick}>
      <FaChevronLeft className="text-primary size-12" />
    </div>
  );
};

const SliderConfig: Settings = {
  dots: false,
  centerMode: false,
  infinite: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Projects = () => {
  const [config, setConfig] = useState<Settings>(SliderConfig);
  const viewportSize = useViewportSize();

  useEffect(() => {
    if (viewportSize.isMobile) {
      setConfig(prev => ({
        ...prev,
        arrows: true,
      }));
    }
  }, [viewportSize]);

  return (
    <Slider {...config}>
      {portfolios.map(portfolio => (
        <Item portfolio={portfolio} key={portfolio.id} />
      ))}
    </Slider>
  );
};

export default Projects;
