import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div >
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://avatars.githubusercontent.com/u/162537914?s=400&u=02490f475cb5097661c96047cb74272bc07a9597&v=4" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
