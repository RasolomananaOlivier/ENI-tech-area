import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, getPostsByUserTags } from "../../redux/posts/posts.actions";
import LinkButton from "../../components/molecules/LinkButton/LinkButton.component";
import PostItem from "../../components/molecules/PostItem/PostItem.component";
import Spinner from "../../components/molecules/Spinner/Spinner.component";
import handleSorting from "../../utils/handleSorting";
import Pagination from "../../components/organisms/Pagination/Pagination.component";
import ButtonGroup from "../../components/molecules/ButtonGroup/ButtonGroup.component";
import handleFilter from "../../utils/handleFilter";

import "./HomePage.styles.scss";
import ChangePassword from "../../components/ChangePasswordModal/Dialog";
import Tags from "../../components/Tags";

import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

const itemsPerPage = 10;

const HomePage = ({
  getPosts,
  getPostsByUserTags,
  post: { posts, loading },
}) => {
  const URL = useLocation();
  const [open, setOpen] = React.useState(false);
  const [TagsOpen, setTagsOpen] = React.useState(false);

  React.useEffect(() => {
    if (URL.search === "?first=true") {
      setOpen(true);
    }
  }, [URL]);

  useEffect(() => {
    getPostsByUserTags();
  }, [getPostsByUserTags]);

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Month");

  const handlePaginationChange = (e, value) => setPage(value);

  console.log(posts);
  return loading || posts === null ? (
    <Spinner type="page" width="75px" height="200px" />
  ) : (
    <Fragment>
      <Box
        id="mainbar"
        className="homepage fc-black-800"
        sx={{ bgcolor: "#323741", pr: 2 }}
      >
        <Box className="questions-grid" sx={{ pr: 3 }}>
          <h3 className="questions-headline">Top Questions</h3>
          <div className="questions-btn">
            <LinkButton
              text={"Ask Question"}
              link={"/add/question"}
              type={"s-btn__primary"}
            />
          </div>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: 3, pr: 4.5 }}
        >
          <span>
            {new Intl.NumberFormat("en-IN").format(posts.length)} questions
          </span>
          <div className="btns-filter">
            <ButtonGroup
              buttons={["Today", "Week", "Month", "Year"]}
              selected={sortType}
              setSelected={setSortType}
            />
          </div>
        </Box>
        <Box className="questions" sx={{ pr: 3 }}>
          <div className="postQues">
            {/*   {posts
              .sort(handleSorting(sortType))
              .filter(handleFilter(sortType))
              .slice(
                (page - 1) * itemsPerPage,
                (page - 1) * itemsPerPage + itemsPerPage
              )
              .map((post, index) => (
                <PostItem key={index} post={post} />
              ))} */}
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
        </Box>
        <Pagination
          page={page}
          itemList={posts
            .sort(handleSorting(sortType))
            .filter(handleFilter(sortType))}
          itemsPerPage={itemsPerPage}
          handlePaginationChange={handlePaginationChange}
        />
        <ChangePassword open={open} setOpen={setOpen} />
        <Tags TagsOpen={TagsOpen} setTagsOpen={setTagsOpen} />
      </Box>
    </Fragment>
  );
};

HomePage.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getPostsByUserTags: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts, getPostsByUserTags })(
  HomePage
);
