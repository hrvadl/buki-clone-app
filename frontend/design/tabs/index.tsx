import React from "react";
import { StyleSheet, View } from "react-native";
import Tab from "./Tab";

export type Tab = {
  name: string;
  item: <T>(data?: T) => React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

const Tabs = ({ tabs }: Props) => {
  const [activeTab, setActiveTab] = React.useState(tabs[0].name);

  const onSelect = (name: string) => {
    setActiveTab(name);
  };

  return (
    <View>
      <View style={styles.Tabs}>
        {tabs.map((t) => (
          <Tab
            key={t.name}
            isActive={t.name === activeTab}
            style={styles.Tab}
            onSelect={onSelect}
            name={t.name}
          />
        ))}
      </View>
      {tabs.map((t) => (t.name === activeTab ? t.item(t) : null))}
    </View>
  );
};

const styles = StyleSheet.create({
  Tab: {
    marginRight: 10,
    paddingBottom: 10,
  },
  Tabs: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Tabs;
