import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from "./../common/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          validate={[required]}
          name={"email"}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          validate={[required]}
          name={"password"}
          type="password"
          component={Input}
        />
      </div>
      <div>
        <Field type={"checkbox"} name={"rememberMe"} component={Input} />{" "}
        remember me
      </div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
