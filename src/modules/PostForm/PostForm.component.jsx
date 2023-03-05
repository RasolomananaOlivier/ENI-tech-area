import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import Spinner from "../../components/molecules/Spinner/Spinner.component";
import AskWidget from "./AskWidget/AskWidget.component";
import AskForm from "./AskForm/AskForm.component";
import Footer from "../../components/organisms/Footer/Footer.component";

import "./PostForm.styles.scss";
import { Typography } from "@mui/material";

const PostForm = ({ auth: { isAuthenticated, loading } }) => {
  if (!true) {
    return <Redirect to="/login" />;
  }

  return loading === null ? (
    <Spinner type="page" width="75px" height="200px" />
  ) : (
    <Fragment>
      <div className="post-form-container">
        <div className="post-form-content">
          <div className="post-form-header">
            <div className=" fc-black-800">
              <Typography variant="h4" fontWeight="bold">
                Ask a question
              </Typography>
            </div>
          </div>
          <div className="post-form-section">
            <div className="postform" style={{ width: "100%" }}>
              <AskForm />
            </div>
            <aside>
              <div className="right-panel">
                <AskWidget />
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

PostForm.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(PostForm);
