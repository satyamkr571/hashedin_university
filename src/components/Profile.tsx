import React, { useState } from "react";
import style from "./Profile.module.scss";
import { useDispatch } from "react-redux";
const Profile = () => {
  const interestData = ["Design", "Developer", "Project Manager", "Sales"];
  const [getData, setGetData] = useState("Professional");
  const dispatch = useDispatch();
  const profileSaveClickHandler = () => {
    dispatch({
      type: "UPDATE_MODAL_STATUS",
      payload: { type: "success", message: "Your Profile is saved" },
    });
  };
  return (
    <div className={style.profile}>
      <div className={style.profile__name}>
        <div>
          <div>Display Name</div>
          <input
            placeholder="Display Name"
            className={style.profile__name__input}
          />
        </div>
        <div>
          <div>First Name</div>
          <input
            placeholder="First Name"
            className={style.profile__name__input}
          />
        </div>
        <div>
          <div>Last Name</div>
          <input
            placeholder="Last Name"
            className={style.profile__name__input}
          />
        </div>
      </div>
      <div className={style.profile__about}>
        <div>About Yourself</div>
        <textarea id="about" name="about" rows={10} cols={70}></textarea>
      </div>
      <div className={style.profile__interest}>
        <div>Your Area of interest</div>
        <div className={style.profile__interest__option}>
          {interestData.map((data, index) => {
            return (
              <div
                className={style.profile__interest__option__list}
                key={index}>
                <input
                  type="checkbox"
                  className={style.profile__interest__option__checkbox}
                />
                <label className={style.profile__interest__option__value}>
                  {data}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.parent__occupation}>
        <div className={style.profile__occupation__label}>
          Are you a student or professional
        </div>
        <div className={style.profile__occupation__radio}>
          <input
            type="radio"
            id="student"
            name="radio-group"
            checked={getData === "Student" ? true : false}
            onChange={(e) => setGetData("Student")}
          />
          <label htmlFor="student">Student</label>
        </div>
        <div className={style.profile__occupation__radio}>
          <input
            type="radio"
            id="professional"
            name="radio-group"
            checked={getData === "Professional" ? true : false}
            onChange={(e) => setGetData("Professional")}
          />
          <label htmlFor="professional">Professional</label>
        </div>
      </div>
      {getData === "Professional" ? (
        <div className={style.profile__occupation_details}>
          <div className={style.profile__occupation_details__label}>
            <div>How much of experience you have?</div>
            <div className={style.profile__details__radio_checkbox}>
              <p>
                <input type="radio" />
                <label htmlFor="experience">0-5</label>
              </p>
              <p>
                <input type="radio" defaultChecked />
                <label htmlFor="experience">5-10</label>
              </p>
              <p>
                <input type="radio" />
                <label htmlFor="experience">10 &#38; Above</label>
              </p>
            </div>
          </div>
          <div className={style.profile__occupation_details__label}>
            <div>What is your expertise?</div>
            <div className={style.profile__details__radio_checkbox}>
              <p>
                <input type="radio" defaultChecked />
                <label htmlFor="expertise">Java</label>
              </p>
              <p>
                <input type="radio" />
                <label htmlFor="expertise">React</label>
              </p>
              <p>
                <input type="radio" />
                <label htmlFor="expertise">Backend</label>
              </p>
            </div>
          </div>
          <div className={style.profile__occupation_details__label}>
            <div className="parent_name_item_label_role">Mention your role</div>
            <input placeholder="Please explain your role." className="name" />
            <div style={{ display: "flex" }}>
              <span style={{ color: "red" }}>*</span>
              <div style={{ color: "red", fontSize: "13px" }}>
                Error Message : Please Enter Characters
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        className={style.profile__save_button}
        onClick={profileSaveClickHandler}>
        SAVE
      </div>
    </div>
  );
};

export default Profile;
