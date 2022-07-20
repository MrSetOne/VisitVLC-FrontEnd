import { Drawer, Steps, Typography } from "antd";
import { useState } from "react";

const RouteInfo = ({ data, visibleDrawer, setVisibleDrawer }) => {
  const [current, setCurrent] = useState(0);

  const { Step } = Steps;
  const { Paragraph } = Typography;

  const onChange = (value) => {
    setCurrent(value);
  };

  const allSteps = data.map((site) => {
    return (
      <Step
        title={site.name}
        description={
          <Paragraph
            ellipsis={{ rows: 2, expandable: true, symbol: "leer más..." }}
          >
            {site.description}
          </Paragraph>
        }
      />
    );
  });

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      onClose={() => setVisibleDrawer(!visibleDrawer)}
      visible={visibleDrawer}
      width={"90vw"}
    >
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        initial={0}
      >
        {allSteps}
      </Steps>
    </Drawer>
  );
};

export default RouteInfo;
