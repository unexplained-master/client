import React, { FunctionComponent, useEffect, useRef } from "react";
import * as d3 from 'd3';

interface OwnProps {
  isVisible?: boolean;
  radius?: number;
}

type Props = OwnProps;

const Logo: FunctionComponent<Props> = ({ isVisible, radius = 600 }) => {
  const d3Container = useRef(null);
  let svg: any = null;
  const arc = d3.arc();
  
  useEffect(() => {
    if (!d3Container.current) {
      return;
    }
    
    svg = d3.select(d3Container.current);
    
    const width = radius;
    const height = radius;
    
    const innerRadius = radius / 10;
    const radiusWidth = radius / 15;
    
    const data = [];
    
    for (let k = 0; k < 6; k++) {
      const startAngle = 0;
      const endAngle = 2 * Math.PI;
      const isRed = k % 2 == 1;
      
      data.push({
        startAngle,
        endAngle: isRed ? 0 : endAngle,
        finalAngle: endAngle,
        innerRadius: innerRadius + (radiusWidth * k),
        outerRadius: innerRadius + (radiusWidth * (k + 1)),
        fill: isRed ? '#fff': '#000'
      });
    }
    
    svg
      .attr('width', width)
      .attr('height', height)
      .append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      
      .selectAll('path').data(data).enter()
      .append('path')
      .style('fill', (d: any) => { return d.fill })
      .attr('d', arc);
  }, []);
  
  useEffect(() => {
    svg = d3.select(d3Container.current);
    onClick();
  }, [isVisible]);
  
  const onClick = () => {
    svg
      .selectAll('path')
      .transition()
      .duration(() => {
        return 800 + (Math.random() * 1000);
      })
      .delay(() => {
        return Math.random() * 400;
      })
      .ease(d3.easeQuad)
      .attrTween('d', (d: any) => {
        let target = d.finalAngle;
        
        if (d.fill == '#d20101' && d.endAngle == d.finalAngle) { // red reached end
          target = 0;
        }
        
        const interpolate = d3.interpolate(d.endAngle, target);
        
        return (t: any) => {
          d.endAngle = interpolate(t);
          return arc(d) as string;
        };
      });
  }
  
  return (<div onClick={ onClick }>
    <svg ref={d3Container} className="container" width="100%" height="100%"/>
  </div>);
};

export default Logo;
