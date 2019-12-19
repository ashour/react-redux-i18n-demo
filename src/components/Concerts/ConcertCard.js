import React from "react";
import PropTypes from "prop-types";
import { Localize } from "react-redux-i18n";
import Tag from "react-bulma-components/lib/components/tag";
import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";

function ConcertCard(props) {
  const { title, occursOn, description, imageUrl } = props.concert;

  return (
    <Card>
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4} renderAs="h2">
              {title}
            </Heading>

            <Heading subtitle size={6} renderAs="h3">
              <Tag color="primary">
                <Localize value={occursOn} dateFormat="date.long" />
              </Tag>
            </Heading>
          </Media.Item>
        </Media>

        <Content>
          <p>{description}</p>
        </Content>
      </Card.Content>

      <Card.Image src={imageUrl} />
    </Card>
  );
}

ConcertCard.propTypes = {
  concert: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    occursOn: PropTypes.string,
  }).isRequired,
};

export default ConcertCard;
