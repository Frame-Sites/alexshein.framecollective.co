import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AboutTile';
import SkillTile from '../../SkillTile';
// import { domHtml } from '../../../utils/stripTags';
import CourseworkTile from '../../CourseworkTile';

// const pageText = {
// eslint-disable-next-line max-len
//   paraOne: "Hi, I'm Alfonso. Thanks for checking out the site. I'm currently a senior consultant in EY's Digital & Emerging Technology (DET) practice. I've been staffed in a solution architect role at a large insurance client (> $200B in assets) since October 2018.",
// eslint-disable-next-line max-len
//   paraTwo: "We lead client meetings to translate business requirements into technical requirements and architect enterprise-grade applications. I'm currently responsible for architectures under the Investments, Marketing, and Client Solutions domains. As part of the Architecture Review Board process, I regularly present solution architecture designs to a 50+ person audience for approval, including the CTO, CISO, and Chief Architect.",
// };

const AboutMe = (props) => {
  const {
    // eslint-disable-next-line camelcase,react/prop-types
    profile: {
      experience,
      education,
      leadership,
      skills,
      coursework,
    },
  } = props;
  return (
    <>
      <div>
        {/* <SEO */}
        {/*  title="About" */}
        {/*  description={description} */}
        {/*  path="" */}
        {/* eslint-disable-next-line max-len */}
        {/*  keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']} */}
        {/* /> */}
        <h1 className="titleSeparate">About</h1>
        {/* <p> */}
        {/*  {pageText.paraOne} */}
        {/* </p> */}
        {/* <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} /> */}
      </div>
      {
        experience.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Experience" experience={experience} />
            </Col>
          </Row>
        ) : <></>
      }
      {
        leadership.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Leadership" leadership={leadership} />
            </Col>
          </Row>
        ) : <></>
      }
      {
        education.length ? (
          <Row gutter={[20, 20]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AboutTile type="Education" education={education} />
            </Col>
          </Row>
        ) : <></>
      }
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <SkillTile skills={skills} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <CourseworkTile coursework={coursework} />
        </Col>
      </Row>
    </>
  );
};

export default AboutMe;
