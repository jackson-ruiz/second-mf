import React from "react";
import CustomButton from "microf1/CustomButton";
import InputField from "microf1/InputField";
export const LocalPage = () => {
  return (
    <div className="text-md mx-auto max-w-6xl">
      <h1 className="text-xl">New Request:</h1>
      <form>
        <div>
          <InputField
            id="requestName"
            testId="requestNameTestId"
            defaultLabel="REQUEST NAME:"
            type="text"
            required={true}
          />
        </div>
        <div>
          <InputField
            id="idNumber"
            testId="idNumberTestId"
            defaultLabel="IDENTIFICATION NUMBER:"
            type="number"
            required={true}
          />
        </div>
        <div>
          <InputField
            id="description"
            testId="descriptionTestId"
            defaultLabel="DESCRIPTION:"
            type="text"
            required={true}
          />
        </div>
        <div>
          <CustomButton
            id="btnNewRequest"
            testId="btnNewRequestTestId"
            onClick={() => {
              alert("You have registered a new request!");
            }}
            children={<h4>REGISTER NEW REQUEST</h4>}
          />
        </div>
      </form>
    </div>
  );
};
