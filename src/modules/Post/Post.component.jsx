import React, { useEffect, Fragment } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPost } from "../../redux/posts/posts.actions";

import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import AnswerSection from "./AnswerSection/AnswerSection.component";
import QuestionSection from "./QuestionSection/QuestionSection.component";

import "./Post.styles.scss";
import censorBadWords from "../../utils/censorBadWords";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
    // eslint-disable-next-line
  }, [getPost]);

  return loading || post === null ? (
    <Spinner type="page" width="75px" height="200px" />
  ) : (
    <Fragment>
      <Box id="mainbar" className="post" sx={{ bgcolor: "#323741" }}>
        <Stack
          direction="row"
          display="flex"
          gap={2}
          justifyContent="start"
          alignItems="flex-start"
          px={2.2}
          py={1}
        >
          <Avatar src="" alt="" />
          <Box>
            <Link to={`/users/${id}`}>
              {/* {censorBadWords(title)} */}
              <Typography variant="h6" color="white" fontWeight={"bold"}>
                username
              </Typography>
            </Link>
          </Box>
        </Stack>
        <Box className="question-header fc-black-800 " sx={{ px: 2.5 }}>
          <Typography variant="h5" fontWeight={"bold"}>
            '{censorBadWords(post.title)}'
          </Typography>

          <div>
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </Box>
        <div className="question-date fc-black-800 pl24">
          <div className="grid-cell">
            <span className="fc-light">Asked</span>
            <time dateTime={moment(post.created_at).fromNow(true)}>
              {moment(post.created_at).fromNow(true)} ago
            </time>
          </div>
        </div>
        <div className="question-main pl24 pt16">
          <QuestionSection />
          <AnswerSection />
        </div>
      </Box>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
