import { useState } from "react";
import { Form, Button } from "antd";
import StepOne from "./StepOne/StepOne";
import "./Signup.scss";
import StepTwo from "./StepTwo/StepTwo";

const Signup = ({ setNeedsignup }) => {
  const [step, setStep] = useState(1);

  const [form] = Form.useForm();

  return (
    <div className="Signup">
      <Form
        className="Signup__Form"
        requiredMark={false}
        initialValues={{
          remember: false,
        }}
      >
        {step === 1 ? <StepOne /> : <StepTwo />}{" "}
        <Form.Item noStyle>
          <nav>
            <Button
              onClick={
                step === 1 ? () => setNeedsignup(false) : () => setStep(1)
              }
            >
              Go Back
            </Button>
            <Button
              htmlType={step === 1 ? null : "submit"}
              type="primary"
              onClick={() => setStep(2)}
            >
              {step === 1 ? "Next" : "Submit"}
            </Button>
          </nav>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
