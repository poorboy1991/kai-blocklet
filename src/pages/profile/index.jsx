import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';

import { ProfilePageView, ProfileView, ProfileContent } from './style';

const LOCAL_PROFILE_KEY = 'myProfile'; /* profile localstorage的 key */
const PROFILE_CONFIG = [
  /* profile Config */
  {
    title: 'User name',
    placeholder: 'user name',
    name: 'username',
    type: 'text',
    required: true,
    pattern: /^[a-zA-Z0-9_-]{4,16}$/,
    text: 'Please check the user name',
  },
  {
    title: 'Email',
    placeholder: 'email',
    name: 'email',
    type: 'email',
    required: true,
    pattern:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape
    text: 'Please check the email',
  },
  {
    title: 'Phone',
    placeholder: 'phone',
    name: 'phone',
    type: 'text',
    required: true,
    pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/, // eslint-disable-line no-useless-escape
    text: 'Please check the phone',
  },
];

const initProfile = localStorage.getItem(LOCAL_PROFILE_KEY) || JSON.stringify({ username: '', email: '', phone: '' });

function Profile() {
  const [isEdit, setIsEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(JSON.parse(initProfile));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {}, []);

  /* 提交 */
  const onSubmit = (data) => {
    console.log(data, 'data');
    setIsEdit(false);
    localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(data));
  };

  /* 监听输入 */
  const handleChange = (e, name) => {
    const { value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  /* 监听取消按钮的回调 */
  const cancelHandle = () => {
    setIsEdit(false);
    reset();
    setUserInfo(JSON.parse(localStorage.getItem(LOCAL_PROFILE_KEY)));
  };

  const renderProfiles = () => {
    return PROFILE_CONFIG.map((item) => {
      const { title, type, placeholder, name, required, pattern, text } = item;
      return (
        <React.Fragment key={name}>
          <Form.Field>
            <label htmlFor={name}>{title}</label>
            {isEdit ? (
              <input
                placeholder={placeholder}
                type={type}
                {...register(name, { required, pattern })}
                value={userInfo[name]}
                onChange={(e) => handleChange(e, name)}
              />
            ) : (
              <div className="title-value">{userInfo[name]}</div>
            )}
            {isEdit && errors[name] && <p className="text-error">{text}</p>}
          </Form.Field>
        </React.Fragment>
      );
    });
  };

  const renderButtons = () => {
    return isEdit ? (
      <div className="buttons">
        <Button type="submit">Submit</Button>
        <Button onClick={() => cancelHandle()}>Cancel</Button>
      </div>
    ) : null;
  };

  return (
    <ProfilePageView>
      <ProfileView>
        <h1>Profile</h1>
        {!isEdit && (
          <div className="is-edit" onClick={() => setIsEdit(!isEdit)}>
            Edit
          </div>
        )}
        <ProfileContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {renderProfiles()}
            {renderButtons()}
          </Form>
        </ProfileContent>
      </ProfileView>
    </ProfilePageView>
  );
}

export default Profile;
