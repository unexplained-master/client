import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import ImageRing from "./ImageRing";

const Wrapper = styled.div`
  @keyframes fadeIn {
    0% { opacity: 0; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes pulsing {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
  
  animation: fadeIn 2s;
  background-color: #000;
  color: #fff;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Trigger = styled.div`
  background-color: #000;
  border-radius: 50%;
  box-shadow:
          0 0 20px 20px #cc0000,
          0 0 120px 90px #cc0000;
  cursor: pointer;
  height: 10px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.4s ease-in-out;
  width: 10px;
  z-index: 2;

  &:hover {
    transform: translate(-50%, -50%) scale(1.5);
  }

  &.hidden {
    transform: translate(-50%, -50%) scale(0);
  }

  &:not(.hidden) {
    animation: pulsing 2s infinite;
  }
`;

interface NavigationItem {
  id: number;
  name: string;
  mediaSrc: string;
  link: string | null;
  subItems?: NavigationItem[];
  type: 'image' | 'video';
}

interface OwnProps {
  navItems: NavigationItem[];
}

type Props = OwnProps;

const Intro: FunctionComponent<Props> = ({ navItems}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  const [subAreHidden, setSubAreHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState<NavigationItem | null>(null);
  
  const [audioSrc, ] = useState<string>('/assets/audio/intro-start.mp3');
  const [audioTime, ] = useState<number>(1);
  
  const innerRadius = 50;
  const radiusWidth = 40;
  
  const onRingClick = (item: NavigationItem) => {
    if (selectedItem) {
      if (selectedItem.id == item.id) {
        // setAudioSrc('/assets/audio/intro-start.mp3');
        setSelectedItem(null);
        setSubAreHidden(true);
      }
      
      return;
    }
    
    // setAudioTime(15);
    // setAudioSrc('/assets/audio/visage.mp3');
    setSelectedItem(item);
    
    setTimeout(() => {
      setSubAreHidden(false);
    }, 1000); // TODO: Set actual transition time
  };
  
  return (<Wrapper>
    {
      navItems.map((item: NavigationItem, index: number) =>
        <ImageRing key={ index } id={ 'ring-' + index }
                   imgSrc={ item.mediaSrc }
                   name={ item.name }
                   innerRadius={ innerRadius + (radiusWidth * index * 2) }
                   outerRadius={ innerRadius + (radiusWidth * (index * 2 + 1)) }
                   isHidden={ isHidden }
                   isDisabled={ !!selectedItem && selectedItem.id != item.id }
                   isSelected={ selectedItem ? selectedItem.id == item.id : false }
                   onRingClick={ () => onRingClick(item) }
        />
      )}
    {
      selectedItem && selectedItem.subItems.map((item: NavigationItem, index: number) =>
        <ImageRing id={ `subring-${index}` }
                   name={ item.name }
                   imgSrc={ item.mediaSrc }
                   innerRadius={ innerRadius + (radiusWidth * index * 2) }
                   outerRadius={ innerRadius + (radiusWidth * (index * 2 + 1)) }
                   isHidden={ subAreHidden }
        />
      )}
  
    <Trigger className={isHidden ? 'pulsing' : 'hidden'}
         onClick={ () => {
           setIsHidden(false);
           setIsAudioPlaying(true);
         } }
    />
  
    {/*<AudioPlayer src={ audioSrc } isPlaying={ isAudioPlaying } startingTime={ audioTime } />*/}
  </Wrapper>);
};

export default Intro;
