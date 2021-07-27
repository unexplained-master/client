import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as d3 from 'd3';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  pointer-events: none;

  &__image {
  
  }

  &__placeholder {
    background-color: black;
  }

  svg {
    position: fixed;

    text {
      fill: #fff;
      font-size: xx-large;
    }
  }
`;

const ImageRingImage = styled.img`
  height: 100vh;
  cursor: pointer;
  pointer-events: all;
  width: 100vw;

  &.in-transition {
    pointer-events: none;
  }
`;

interface OwnProps {
  id: string;
  imgSrc: string;
  name: string;
  innerRadius: number;
  outerRadius: number;
  isHidden?: boolean;
  isDisabled?: boolean;
  isSelected?: boolean;
  onRingClick?(): void;
}

type Props = OwnProps;

const ImageRing: FunctionComponent<Props> = ({
                                               id,
                                               imgSrc,
                                               innerRadius,
                                               isDisabled,
                                               isHidden,
                                               isSelected,
                                               outerRadius,
                                               onRingClick
                                             }) => {
  
  const containerElement = useRef<HTMLDivElement>(null);
  
  const d3DefsElement = useRef<SVGSVGElement>(null);
  const d3RenderElement = useRef<SVGSVGElement>(null);
  
  let svg: any = null;
  const arc = d3.arc();
  
  const [isInTransition, ] = useState(false)
  
  const outerRadiusHighlight = outerRadius + 10;
  const innerRadiusHighlight = innerRadius - 5;
  
  useEffect(() => {
    if (!d3DefsElement.current || !containerElement.current) {
      return;
    }
    
    const width = containerElement.current.offsetWidth;
    const height = containerElement.current.offsetHeight;
    
    const arcData = [{
      startAngle: 0,
      endAngle: 2 * Math.PI,
      innerRadius: isHidden ? 0 : innerRadius,
      outerRadius: isHidden ? 0 : outerRadius
    }];
    
    svg = d3.select(d3DefsElement.current)
      .attr('width', width)
      .attr('height', height);
    
    const ringDef = svg.append('defs')
      .append('clipPath')
      .attr('id', id);
    
    ringDef.selectAll('path')
      .data(arcData).enter()
      .append('path')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .attr('d', arc);
    
    const renderSvg = d3.select(d3RenderElement.current);
    
    renderSvg.selectAll('path')
      .data(arcData).enter()
      .append('path')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .attr('d', arc)
      .style('visibility', 'hidden')
      .attr('id', 'textRingPath');
    
    // renderSvg.append('text')
    //   .append('textPath')
    //     .attr('xlink:href', '#textRingPath')
    //     .style('text-anchor','middle')
    //     .attr('startOffset', '50%')
    //     .text('Yay, my text is on a wavy path');
    
  });
  
  // Transitions
  if (containerElement.current) {
    svg = d3.select(containerElement.current);
    svg
      .selectAll('path')
      .transition()
      .duration(() => {
        return 800 + (Math.random() * 1000);
      })
      .ease(d3.easeQuad)
      .attrTween('d', (d: any) => {
        let targetInner = isHidden ? 0 : innerRadius;
        let targetOuter = isHidden ? 0 : outerRadius;
        
        if (isSelected) {
          targetInner = 300;
          targetOuter = 600;
        }
        
        if (isDisabled) {
          targetInner = 600;
          targetOuter = 700;
        }
        
        const interpolateInner = d3.interpolate(d.innerRadius, targetInner);
        const interpolateOuter = d3.interpolate(d.outerRadius, targetOuter);
        
        return (t: any) => {
          d.innerRadius = interpolateInner(t);
          d.outerRadius = interpolateOuter(t);
          return arc(d) as string;
        };
      });
  }
  
  const onMouseEnter = () => {
    if (isSelected || isDisabled) {
      return;
    }
    
    svg
      .selectAll('path')
      .transition()
      .duration(800)
      .ease(d3.easeQuad)
      .attrTween('d', (d: any) => {
        const interpolateOuter = d3.interpolate(d.outerRadius, outerRadiusHighlight);
        const interpolateInner = d3.interpolate(d.innerRadius, innerRadiusHighlight);
        return (t: any) => {
          d.outerRadius = interpolateOuter(t);
          d.innerRadius = interpolateInner(t);
          return arc(d) as string;
        };
      });
  }
  
  const onMouseLeave = () => {
    if (isSelected || isDisabled) {
      return;
    }
    
    svg
      .selectAll('path')
      .transition()
      .duration(800)
      .ease(d3.easeQuad)
      .attrTween('d', (d: any) => {
        const interpolateOuter = d3.interpolate(d.outerRadius, outerRadius);
        const interpolateInner = d3.interpolate(d.innerRadius, innerRadius);
        return (t: any) => {
          d.outerRadius = interpolateOuter(t);
          d.innerRadius = interpolateInner(t);
          return arc(d) as string;
        };
      });
  }
  
  const onClick = () => {
    
    if (onRingClick) {
      onRingClick();
    }
    
    // svg
    //   .selectAll('path')
    //   .transition()
    //   .duration(800)
    //   .ease(d3.easeQuad)
    //   .attrTween('d', (d: any) => {
    //     const interpolateOuter = d3.interpolate(d.outerRadius, 700);
    //     const interpolateInner = d3.interpolate(d.innerRadius, 0);
    //     return (t: any) => {
    //       d.outerRadius = interpolateOuter(t);
    //       d.innerRadius = interpolateInner(t);
    //       return arc(d) as string;
    //     };
    //   });
  }
  
  return (<Wrapper ref={ containerElement }
  >
    <div>
      <svg ref={ d3RenderElement } width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'
           style={{
             zIndex: 2
           }}
      />
      <ImageRingImage className={isInTransition ? 'in-transition' : '' }
           src={ imgSrc }
           style={{
             clipPath: 'url(#' + id + ')'
           }}
           alt=''
           onMouseEnter={ onMouseEnter }
           onMouseLeave={ onMouseLeave }
           onClick={ onClick }
      />
    </div>
  
    <svg ref={ d3DefsElement } width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' />
  </Wrapper>);
};

export default ImageRing;
