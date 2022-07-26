import { Drawer, Steps, Typography } from "antd";

const RouteInfo = ({
  data,
  visibleDrawer,
  setVisibleDrawer,
  current,
  setCurrent,
}) => {
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
            {site.description_es !== "NaN"
              ? site.description_es
              : "Sin información"}
          </Paragraph>
        }
      />
    );
  });

  return (
    <Drawer
      title="Detalles de Ruta"
      placement="right"
      onClose={() => setVisibleDrawer(!visibleDrawer)}
      visible={visibleDrawer}
      width={"min(90vw, 40rem)"}
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
