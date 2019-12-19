import React from "react";
import PropTypes from "prop-types";
import { Localize } from "react-redux-i18n";
import Box from "react-bulma-components/lib/components/box";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Content from "react-bulma-components/lib/components/content";

function CommentCard(props) {
  const { profileImageUrl, userName, commentedOn, text } = props.comment;

  return (
    <Box>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image rounded size={64} alt="64x64" src={profileImageUrl} />
        </Media.Item>

        <Media.Item>
          <Content>
            <p>
              <strong>{userName}</strong>{" "}
              <small>
                <Localize value={commentedOn} dateFormat="date.short" />
              </small>
              <br />
              {text}
            </p>
          </Content>
        </Media.Item>
      </Media>
    </Box>
  );
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    userName: PropTypes.string,
    commentedOn: PropTypes.string,
    profileImageUrl: PropTypes.string,
  }).isRequired,
};

export default CommentCard;
