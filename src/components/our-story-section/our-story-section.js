import React from 'react';
import './our-story-section.scss';
import ourStoryImg from "../../img/our-story.png";
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";
import {Link} from "react-router-dom";
import {Row, Col} from 'antd';

function OurStorySection(props) {

    return (
        <Section className="our-story">
            <div className="grey">
                <Container>
                    <Row type="flex" gutter={30}>
                        <Col span={12} className="left">
                            <SectionTitle>Our Story</SectionTitle>
                            <SectionSubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </SectionSubTitle>
                            <DefaultText>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae dolorum eos illo quia
                                quibusdam reprehenderit similique voluptate! Atque aut modi odio omnis? Animi assumenda
                                doloremque obcaecati sapiente totam, ut.
                            </DefaultText>
                            <Link to={"/about"} className="default-button">Read more</Link>
                        </Col>
                        <Col span={12} className="right">
                            <img src={ourStoryImg} alt="out story img"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Section>
    );
}

export default OurStorySection;



{/*<div className="left">*/}
{/*    <SectionTitle>Our Story</SectionTitle>*/}
{/*    <SectionSubTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </SectionSubTitle>*/}
{/*    <DefaultText>*/}
{/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae dolorum eos illo quia*/}
{/*        quibusdam reprehenderit similique voluptate! Atque aut modi odio omnis? Animi assumenda*/}
{/*        doloremque obcaecati sapiente totam, ut.*/}
{/*    </DefaultText>*/}
{/*    <Link to={"/about"} className="default-button">Read more</Link>*/}
{/*</div>*/}