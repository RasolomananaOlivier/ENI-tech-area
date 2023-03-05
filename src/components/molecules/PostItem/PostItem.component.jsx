import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import censorBadWords from "../../../utils/censorBadWords";

import htmlSubstring from "../../../utils/htmlSubstring";
import injectEllipsis from "../../../utils/injectEllipsis";

import UserCard from "../UserCard/UserCard.component";
import TagBadge from "../TagBadge/TagBadge.component";

import "./PostItem.styles.scss";
import { Avatar, Box, Stack, Typography } from "@mui/material";

const PostItem = ({
  post: {
    id,
    title,
    content,
    username,
    gravatar,
    user_id,
    answer_count,
    comment_count,
    views,
    created_at,
    tags,
  },
}) => {
  const answerVoteUp = (
    <div className="vote answer">
      <span className="vote-count">{answer_count}</span>
      <div className="count-text">answers</div>
    </div>
  );

  const answerVoteDown = (
    <div className="vote">
      <span className="vote-count">{answer_count}</span>
      <div className="count-text">answers</div>
    </div>
  );

  return (
    <div className="posts">
      <div className="stats-container fc-black-500">
        <div className="stats">
          <div className="vote">
            <span className="vote-count">{comment_count}</span>
            <div className="count-text">comments</div>
          </div>
          {answer_count > 0 ? answerVoteUp : answerVoteDown}
          <div className="vote">
            <span className="vote-count">{tags.length}</span>
            <div className="count-text">tags</div>
          </div>
          {/* <div className="vote">
            <div className="count-text">{views} views</div>
          </div> */}
        </div>
      </div>
      <Stack className="summary" spacing={1.5}>
        <Stack
          direction="row"
          display="flex"
          gap={2}
          justifyContent="start"
          alignItems="flex-start"
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
          <Box display="flex" alignContent="start" pt={0.8}>
            Asked: 2023-12-10
          </Box>
        </Stack>
        <Link to={`/questions/${id}`}>
          {/* {censorBadWords(title)} */}
          <Typography variant="h5" color="white" fontWeight={"bold"}>
            {title}
          </Typography>
        </Link>
        <div
          // className="brief"
          dangerouslySetInnerHTML={{
            __html:
              injectEllipsis(censorBadWords(htmlSubstring(content, 200))) +
              "...",
          }}
        />
        <Stack direction="row" className="profile-tags" spacing={1}>
          {tags.map((tag, index) => (
            <TagBadge key={index} tag_name={tag.tag_name} size={"s-tag"} />
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect(null)(PostItem);
