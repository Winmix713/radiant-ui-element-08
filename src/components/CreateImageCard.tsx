
import React from 'react';
import { ArrowRight } from 'lucide-react';
import CardBackground from './card/CardBackground';
import CardContent from './card/CardContent';
import CardText from './card/CardText';
import CardArrowButton from './card/CardArrowButton';

const CreateImageCard = () => {
  return (
    <div className="relative w-[236px] h-[273px] mx-auto group cursor-pointer">
      <CardBackground>
        <CardContent />
        <CardText />
        <CardArrowButton />
      </CardBackground>
    </div>
  );
};

export default CreateImageCard;
