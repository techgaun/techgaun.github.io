import React from "react";
import {ArrowUpRight} from 'lucide-react'

const VentureCard = ({sn, title, subTitle, tagline, year,status}) => {
  return (
    <div className="vWrap">
      <div className="vNum">{sn}</div>
      <div className="projectTitle">
        <div className="vTitle">{title}</div>
        <div className="vSub">{subTitle}</div>
      </div>
      <div className="vTagline">{tagline}</div>
      <div className="vDate">
        <div className="vStatus"><span className="statusChip">{status}</span></div>
        <div className="vYear">{year}</div>
      </div>
      <ArrowUpRight className="vArrow"/>
    </div>
  );
};

export default VentureCard;
