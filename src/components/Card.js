import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import picture from "../pages/angela.jpg";

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="" alt="" />
        <CardBody>
          <CardTitle>{props.projectName}</CardTitle>
          <CardSubtitle>{props.details}</CardSubtitle>
            <CardText>{props.projectText}</CardText>
          <Button href={props.githubHref} target="_blank">Github Link</Button>
          <Button href={props.deployedHref} target="_blank">Deployed Link</Button>
          
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;