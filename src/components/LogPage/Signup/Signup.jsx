import { useEffect, useState } from "react";
import { Form, Button, notification } from "antd";
import StepOne from "./StepOne/StepOne";
import "./Signup.scss";
import StepTwo from "./StepTwo/StepTwo";
import { signUp, resetNotifications } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = ({ setNeedsignup }) => {
  const {
    notification: feedback,
    isLoading,
    isError,
  } = useSelector((state) => state.auth);

  const dataInit = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  };

  const [step, setStep] = useState(1);
  const [data, setData] = useState(dataInit);

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (step === 1) {
      setData({ ...values });
      setStep(2);
    } else {
      dispatch(signUp({ ...data, ...values }));
    }
  };

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Something has gone wrong...",
        description: feedback,
        placement: "bottom",
      });
      setTimeout(() => {
        dispatch(resetNotifications());
      }, 2000);
    }
  }, [feedback]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Signup">
      <Form
        className="Signup__Form"
        requiredMark={false}
        onFinish={onFinish}
        initialValues={{
          remember: false,
        }}
      >
        {step === 1 ? <StepOne data={data} /> : <StepTwo />}{" "}
        <Form.Item noStyle>
          <nav>
            <Button
              onClick={
                step === 1 ? () => setNeedsignup(false) : () => setStep(1)
              }
            >
              Go Back
            </Button>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              {step === 1 ? "Next" : "Submit"}
            </Button>
          </nav>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
