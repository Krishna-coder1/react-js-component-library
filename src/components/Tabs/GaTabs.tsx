import React, { ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabsVariants from "./tabs-variant";
import TabsTextColor from "./tabs-text-color";
import TabsIndicatorColor from "./tabs-indicator-color";
import Typography from "@mui/material/Typography";

type myProps = {
  labels: Array<string | JSX.Element>;
  textColor?: TabsTextColor;
  indicatorColor?: TabsIndicatorColor;
  ariaLabel?: string;
  variant?: TabsVariants;
  tabData?: Array<string | React.ReactNode>;
  centered?: boolean;
};

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, index, value } = props;

  return (
    <div
      role="tabPanel"
      id={`simple-tabPanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const GaTabs: React.FC<myProps> = ({
  labels,
  textColor = TabsTextColor.PRIMARY,
  indicatorColor = TabsIndicatorColor.PRIMARY,
  ariaLabel = "Basic tab",
  variant = TabsVariants.STANDARD,
  tabData,
  centered = false,
}) => {
  function tabsProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor={textColor}
        indicatorColor={indicatorColor}
        aria-label={ariaLabel}
        variant={variant}
        centered={centered}
      >
        {labels.map((item, key) => (
          <Tab label={item} {...tabsProps(key)} />
        ))}
      </Tabs>

      {tabData?.map((data, key) => (
        <TabPanel value={value} index={key}>
          {data}
        </TabPanel>
      ))}
    </>
  );
};
export default GaTabs;
