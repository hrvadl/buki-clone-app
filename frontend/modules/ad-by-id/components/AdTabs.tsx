import Tabs from "@/design/tabs";
import { Ad } from "@/models/ad";
import React from "react";
import { tabs } from "../mock/tabs";

type Props = {
  ad: Ad;
};

const AdTabs = ({ ad }: Props) => {
  return <Tabs tabs={tabs(ad)} />;
};

export default AdTabs;
