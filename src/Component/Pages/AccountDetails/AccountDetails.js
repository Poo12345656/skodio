import React from "react";
import Layout from "../../Shared/Layout";
import InputText from "../../Shared/InputText/InputText";
import Text from "../../Shared/Text/Text";
import style from "./AccountDetails.module.css"
import NavigationTabBar from "../../Shared/NavigationTabBar/NavigationTabBar";
import Button from "../../Shared/Button/Button";

function AccountDetails() {
  return (
    <div>
      <Layout showSideBar={false} >
        <div className={style.AccountDetailsWrapper}>
           <NavigationTabBar/>
          <div className={style.password}>
            <Text test="password*" />
            <InputText
             className={style.detailsInputWrapper}
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <div className={style.cnfPassword}>

            <Text test="Confirm Your Password* " />
            <InputText
               className={style.detailsInputWrapper}
              type="text"
              placeholder="conform your password"
            />
          </div>
          <div className={style.signUpButton}>
              <Button variant="secondary" type="submit" test="Save Change" />
            </div>
        </div>
      </Layout>
    </div>
  );
}

export default AccountDetails;
