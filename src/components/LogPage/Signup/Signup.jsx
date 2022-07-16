import { useEffect, useState } from "react";
import { Form, Button } from "antd";
import StepOne from "./StepOne/StepOne";
import "./Signup.scss";
import StepTwo from "./StepTwo/StepTwo";
import { signUp } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Signup = ({ setNeedsignup }) => {
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
            <Button htmlType="submit" type="primary">
              {step === 1 ? "Next" : "Submit"}
            </Button>
          </nav>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
