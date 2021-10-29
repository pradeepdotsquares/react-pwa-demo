import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button, Icon } from 'antd';

import './News.css';

/**
 * Component for article detail card
 * @param {} props
 */
export function NewsItem(props) {
  const { article } = props;
  let imagePath = 'http://image.tmdb.org/t/p/w185'+article.profile_path
  return (
    <Card 
      loading={!article.name} 
      title={article.name}
      cover={
        <div className="NewsItem__image-container">
          <img src={article.profile_path?imagePath: 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'} alt={article.webTitle} className="NewsItem__image" />
        </div>
      }
      actions={[
        <Button justify="end" type="primary" size="large" href={article} target="_blank" rel="noopener" style={{color: 'white'}}>Lire <Icon type="right" /></Button>
      ]}
      bordered={false}>
        <div className="NewsItem__description">
          {article.name}
        </div>
    </Card>
  );
}


/**
 * Component which shows the articles list
 * @param {} props
 */
export function NewsList(props) { 
  return (
    <Row gutter={16}>
      {props.articles.map((article, i) => {
        return (
          <Col key={`article-${i}`} span={32} md={12} lg={8} style={{paddingTop: 8, paddingBottom: 8}}>
            <NewsItem article={article} />
          </Col>
        )
      })}
    </Row>
  );
}

NewsItem.propTypes = {
  article: PropTypes.shape({
    webTitle: PropTypes.string,
    fields: PropTypes.object,
    urlToImage: PropTypes.string,
    webUrl: PropTypes.string,
  })
};