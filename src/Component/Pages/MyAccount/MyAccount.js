import React from "react";

import Text from "../../Shared/Text/Text";
import style from "./MyAccount.module.css";
import InputText from "../../Shared/InputText/InputText";
import TextArea from "../../Shared/TextArea/TextArea";
import Layout from "../../Shared/Layout/Layout";
import Button from "../../Shared/Button/Button";
import Img from "../../Shared/Img/Img";
import { useForm } from "../../Hooks/useForm";

import NavigationTabBar from "../../Shared/NavigationTabBar/NavigationTabBar";

function MyAccount() {
  const init = {
    firstName: {
      name: "firstName",
      value: "",
      isRequired: "Error : First name is required",
    },
    lastName: {
      name: " lastName",
      value: "",
      isRequired: " Error : Last name is required",
    },
    tagLine: {
      name: "tagLine",
      value: "",
      isRequired: "Error : Tagline field is required.",
    },
    bio: {
      name: "bio",
      value: "",
      isRequired: "Error : Bio field is required",
    },
  };
  const {
    formFileds,
    handleChangeField,
    validateAllFields,
    errors,
    isValidForm,
  } = useForm({ initFileds: init });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    validateAllFields();
    if (!isValidForm()) {
    }
  };

  const { firstName, lastName, tagLine, bio } = formFileds;
  console.log(errors);
  return (
    <Layout showSideBar={false}>
      <form onSubmit={handleOnSubmit} className={style.mainWrapper}>
        <div className={style.profileWrapper}>
          <NavigationTabBar />
          <div className={style.userImageWrapper}>
            <Img
              className={style.profileImageWrapper}
              src="https://skoodio-app.s3.amazonaws.com/staging/profile_pic/5fc8e7596c56655c0e01a4ab/1623332552180.png"
            />
            <div className={style.imagUpperWrapper}>
              <div className={style.imgTextWrapper}>UPDATE</div>
            </div>
          </div>
          <div className={style.profileWrapper}>
            <div className={style.fromGroup}>
              <div className={style.fromFieldWrapper}>
                {/* first Name Filed */}

                <Text color="black" test="First Name*" as="label" />
                <InputText
                  //  className={style.fromGroupInput}
                  name="firstName"
                  type="text"
                  value={firstName.value}
                  placeholder="Enter your Name"
                  onChange={handleChangeField}
                  isError={errors.firstName}
                />
                {errors.firstName ? (
                  <Text
                    test={errors.firstName}
                    size="small"
                    color="red"
                    as="span"
                  />
                ) : null}
              </div>
              <div className={style.fromFieldWrapper}>
                {/* last Name Filed */}

                <Text color="black" test="Last Name*" as="label" />
                <InputText
                  name="lastName"
                  value={lastName.value}
                  type="text"
                  placeholder="Enter your Name"
                  onChange={handleChangeField}
                  isError={errors.lastName}
                />
                {errors.lastName ? (
                  <Text
                    test={errors.lastName}
                    size="small"
                    color="red"
                    as="span"
                  />
                ) : null}
              </div>
            </div>
            <div className={style.textAreaFiled}>
              {/* Tag Line Filed */}

              <Text
                color="black"
                test="Tagline.* In a few quick lines tell the user community who you are."
                as="label"
              />
              <TextArea
                name="tagLine"
                value={tagLine.value}
                row="10"
                type="textarea"
                onChange={handleChangeField}
                isError={errors.tagLine}
              />
              {errors.tagLine ? (
                <Text
                  test={errors.tagLine}
                  size="small"
                  color="red"
                  as="span"
                />
              ) : null}
            </div>
            <div className={style.detailText}>
              {/* Details Text Area */}

              <Text
                color="black"
                test="Bio. *Tell us about your creative history and experiences. (You can always change this later. Note: This will show up on your public bio.)"
                as="label"
              />
              <TextArea
                name="bio"
                value={bio.value}
                className={style.textAreaWrapper}
                type="textarea"
                onChange={handleChangeField}
                isError={errors.bio}
              />
              {errors.bio ? (
                <Text test={errors.bio} color="red" size="small" as="span" />
              ) : null}
            </div>

            {/* Save Change Button */}

            <div className={style.buttonWrapper}>
              <Button
                variant="secondary"
                type="submit"
                test="Save Change"
                disabled={isValidForm()}
              />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default MyAccount;
