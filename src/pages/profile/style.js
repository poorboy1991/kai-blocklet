import styled from 'styled-components';
import { THEME_MEDIA_ENUM } from '../../theme';

export const ProfilePageView = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1949;
  overflow: hidden;
  color: #ffffff;
`;

export const ProfileView = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 20px;
  height: 400px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  .is-edit {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  ${THEME_MEDIA_ENUM.medium} {
    h1 {
      padding-left: 20px;
      text-align: left;
    }
  }
  ${THEME_MEDIA_ENUM.small} {
    h1 {
      padding-left: 20px;
      text-align: left;
    }

    ${THEME_MEDIA_ENUM.small} {
      max-width: 400px;
    }
  }
`;

export const ProfileContent = styled.div`
  .form {
    .field {
      margin: 20px 20px 0 20px;
      position: relative;
      label {
        text-align: left;
        color: #ffffff;
      }

      .title-value {
        display: block;
        background: #999999;
        width: 100%;
        font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
        margin: 0;
        outline: 0;
        -webkit-appearance: none;
        tap-highlight-color: rgba(255, 255, 255, 0);
        line-height: 17px;
        padding: 9.5px 14px;
        font-size: 14px;
        border: 1px solid rgba(34, 36, 38, 0.15);
        color: rgba(0, 0, 0, 0.87);
        border-radius: 4px;
        box-shadow: 0 0 0 0 transparent inset;
        text-align: left;
        transition: color 0.1s ease, border-color 0.1s ease;
        height: 38px;
      }
    }

    .text-error {
      color: red;
      margin: 0;
      height: 20px;
      position: absolute;
      bottom: -20px;
      text-align: left;
    }

    .buttons {
      display: flex;
      margin: 20px;
      button {
        width: 140px;
      }

      button:first-child {
        background: #6da8ec;
        color: #ffffff;
      }
    }
  }

  ${THEME_MEDIA_ENUM.medium} {
    .form {
    }
  }
  ${THEME_MEDIA_ENUM.small} {
    .form {
      .buttons {
        display: flex;
        margin: 20px;
        button {
          flex: 1;
          width: auto;
        }

        button:first-child {
          background: #6da8ec;
          color: #ffffff;
        }
      }
    }
  }
`;
