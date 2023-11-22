import React from "react";
import { Tab, Tabs } from "@mui/material";

const CategoryTabs = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="primary"
      indicatorColor="primary"
      allowScrollButtonsMobile
    >
      <Tab value="one" label="All" />
      <Tab value="two" label="Home" />
      <Tab value="three" label="Work" />
      <Tab value="four" label="Personal" />
    </Tabs>
  );
};

export default CategoryTabs;
